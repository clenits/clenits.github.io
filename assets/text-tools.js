(function () {
  const LANG_STORAGE_KEY = "localconvert.lang";
  const MAX_INPUT_BYTES = 1024 * 1024;

  const NAV_LABELS = {
    en: {
      home: "Home",
      image: "Image",
      text: "Text",
      audio: "Audio",
      video: "Video",
      textHub: "Text Hub",
      clean: "Clean",
      dev: "Dev",
      counter: "Counter",
      textCase: "Case",
      structure: "Structure",
      special: "Special",
      removeLineBreaks: "No Line Breaks",
      jsonPretty: "JSON Pretty",
      uppercase: "Uppercase",
      dedupe: "Remove Duplicates",
      base64: "Base64",
    },
    es: {
      home: "Inicio",
      image: "Imagen",
      text: "Texto",
      audio: "Audio",
      video: "Video",
      textHub: "Hub Texto",
      clean: "Limpiar",
      dev: "Dev",
      counter: "Contador",
      textCase: "Mayus/Minus",
      structure: "Estructura",
      special: "Especial",
      removeLineBreaks: "Sin Saltos",
      jsonPretty: "JSON Legible",
      uppercase: "Mayusculas",
      dedupe: "Sin Duplicados",
      base64: "Base64",
    },
    zh: {
      home: "首页",
      image: "图片",
      text: "文本",
      audio: "音频",
      video: "视频",
      textHub: "文本中心",
      clean: "清理",
      dev: "开发",
      counter: "计数",
      textCase: "大小写",
      structure: "结构",
      special: "特殊",
      removeLineBreaks: "去除换行",
      jsonPretty: "JSON 美化",
      uppercase: "大写",
      dedupe: "去重",
      base64: "Base64",
    },
    ko: {
      home: "홈",
      image: "이미지",
      text: "텍스트",
      audio: "오디오",
      video: "비디오",
      textHub: "텍스트 허브",
      clean: "정리",
      dev: "개발",
      counter: "카운터",
      textCase: "대소문자",
      structure: "구조",
      special: "특수",
      removeLineBreaks: "줄바꿈 제거",
      jsonPretty: "JSON 포맷",
      uppercase: "대문자",
      dedupe: "중복 제거",
      base64: "Base64",
    },
    ja: {
      home: "ホーム",
      image: "画像",
      text: "テキスト",
      audio: "音声",
      video: "動画",
      textHub: "テキストハブ",
      clean: "整形",
      dev: "開発",
      counter: "カウント",
      textCase: "ケース",
      structure: "構造",
      special: "特殊",
      removeLineBreaks: "改行削除",
      jsonPretty: "JSON 整形",
      uppercase: "大文字",
      dedupe: "重複削除",
      base64: "Base64",
    },
  };

  const state = {
    pageType: document.body.dataset.textPage || "text",
    lastBucket: "",
    lastSuccessKey: "",
    lang: "en",
  };

  const ui = {
    input: document.getElementById("textInput"),
    output: document.getElementById("textOutput"),
    status: document.getElementById("statusText"),
    clear: document.getElementById("clearBtn"),
    copy: document.getElementById("copyBtn"),
    download: document.getElementById("downloadBtn"),
    operationSelect: document.getElementById("operationSelect"),
    checkboxes: Array.from(document.querySelectorAll(".operation-check")),
    chips: Array.from(document.querySelectorAll(".chip-btn[data-operation]")),
    metrics: {
      total: document.getElementById("metricTotal"),
      noSpace: document.getElementById("metricNoSpace"),
      lines: document.getElementById("metricLines"),
      words: document.getElementById("metricWords"),
      bytes: document.getElementById("metricBytes"),
    },
  };

  applyCommonNavigation();
  markActiveLinks();
  bindToolEvents();

  if (ui.input && ui.output) {
    autoGrow(ui.input);
    autoGrow(ui.output);
  }

  render();
  trackEvent("view_page", { page_type: state.pageType });

  function bindToolEvents() {
    if (!ui.input || !ui.output) return;

    ui.input.addEventListener("input", () => {
      enforceLimit();
      autoGrow(ui.input);
      trackLengthBucket();
      render();
    });

    if (ui.operationSelect) {
      ui.operationSelect.addEventListener("change", () => {
        trackOperationSelection(ui.operationSelect.value);
        render();
      });
    }

    ui.checkboxes.forEach((box) => {
      box.addEventListener("change", () => {
        trackOperationSelection(getSelectedOperation().join(","));
        render();
      });
    });

    ui.chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        ui.chips.forEach((item) => item.classList.remove("is-active"));
        chip.classList.add("is-active");
        trackOperationSelection(chip.dataset.operation || "unknown");
        render();
      });
    });

    if (ui.clear) {
      ui.clear.addEventListener("click", () => {
        ui.input.value = "";
        ui.output.value = "";
        autoGrow(ui.input);
        autoGrow(ui.output);
        updateStatus("Cleared.");
        renderMetrics("");
      });
    }

    if (ui.copy) {
      ui.copy.addEventListener("click", async () => {
        if (!ui.output.value) {
          updateStatus("No output to copy.");
          return;
        }

        const copied = await copyToClipboard(ui.output.value);
        if (copied) {
          trackEvent("copy_click", {
            page_type: state.pageType,
            operation: getOperationLabel(),
            output_length: ui.output.value.length,
          });
          updateStatus("Copied to clipboard.");
        } else {
          updateStatus("Copy failed. Please copy manually.");
        }
      });
    }

    if (ui.download) {
      ui.download.addEventListener("click", () => {
        if (!ui.output.value) {
          updateStatus("No output to download.");
          return;
        }

        const stamp = new Date().toISOString().replace(/[:.]/g, "-");
        const fileName = `${state.pageType}-${stamp}.txt`;
        downloadText(fileName, ui.output.value);
        updateStatus(`Downloaded ${fileName}.`);
      });
    }
  }

  function applyCommonNavigation() {
    state.lang = detectLanguage();
    document.documentElement.lang = state.lang;

    const labels = NAV_LABELS[state.lang] || NAV_LABELS.en;

    document.querySelectorAll("[data-nav]").forEach((node) => {
      const key = node.dataset.nav;
      if (labels[key]) {
        node.textContent = labels[key];
      }
    });
  }

  function markActiveLinks() {
    const path = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
    const isTextSurface = Boolean(document.body.dataset.textPage);

    document.querySelectorAll(".text-subnav-link").forEach((link) => {
      const href = (link.getAttribute("href") || "").replace(/\/+$/, "") || "/";
      link.classList.toggle("is-active", href === path);
    });

    document.querySelectorAll(".tabs .tab").forEach((link) => {
      const href = (link.getAttribute("href") || "").replace(/\/+$/, "") || "/";
      link.classList.toggle("is-active", href === path || (isTextSurface && href === "/text"));
    });
  }

  function render() {
    if (!ui.input || !ui.output) return;

    enforceLimit();

    const input = ui.input.value;
    renderMetrics(input);

    if (!input) {
      ui.output.value = "";
      autoGrow(ui.output);
      updateStatus("Enter text to start.");
      return;
    }

    const operation = getSelectedOperation();
    Promise.resolve(runOperation(state.pageType, input, operation))
      .then((result) => {
        ui.output.value = result;
        autoGrow(ui.output);
        updateStatus("Ready.");
        trackConvertSuccess(operation, input.length, result.length);
      })
      .catch((error) => {
        ui.output.value = "";
        autoGrow(ui.output);
        updateStatus(`Error: ${error && error.message ? error.message : "Conversion failed."}`);
      });
  }

  function renderMetrics(text) {
    const metricNodes = ui.metrics;
    if (!metricNodes.total) return;

    const lines = text ? text.split(/\r?\n/).length : 0;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const bytes = new TextEncoder().encode(text).length;

    metricNodes.total.textContent = String(text.length);
    metricNodes.noSpace.textContent = String(text.replace(/\s/g, "").length);
    metricNodes.lines.textContent = String(lines);
    metricNodes.words.textContent = String(words);
    metricNodes.bytes.textContent = String(bytes);
  }

  function runOperation(pageType, input, operation) {
    switch (pageType) {
      case "text-clean":
      case "remove-line-breaks":
        return cleanText(input, Array.isArray(operation) ? operation : [operation]);
      case "text-dev":
      case "json-pretty-print":
      case "base64-encode":
        return devTransform(input, String(operation || "json_pretty"));
      case "text-counter":
        return counterSummary(input);
      case "text-case":
      case "uppercase-converter":
        return caseTransform(input, String(operation || "uppercase"));
      case "text-structure":
      case "remove-duplicate-lines":
        return structureTransform(input, String(operation || "dedupe_lines"));
      case "text-special":
        return specialTransform(input, String(operation || "remove_emoji"));
      default:
        return input;
    }
  }

  function cleanText(text, operations) {
    let next = text;

    operations.forEach((op) => {
      if (op === "trim_edges") {
        next = next
          .split(/\r?\n/)
          .map((line) => line.trim())
          .join("\n");
      } else if (op === "collapse_spaces") {
        next = next.replace(/[ \t]{2,}/g, " ");
      } else if (op === "normalize_linebreaks") {
        next = next.replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(/\n{3,}/g, "\n\n");
      } else if (op === "remove_linebreaks") {
        next = next.replace(/\r?\n+/g, " ").replace(/\s{2,}/g, " ").trim();
      } else if (op === "strip_html") {
        next = next.replace(/<[^>]*>/g, "");
      } else if (op === "remove_special_chars") {
        next = next.replace(/[^\p{L}\p{N}\s]/gu, "");
      }
    });

    return next;
  }

  function devTransform(text, operation) {
    if (operation === "json_pretty") {
      return JSON.stringify(JSON.parse(text), null, 2);
    }
    if (operation === "json_minify") {
      return JSON.stringify(JSON.parse(text));
    }
    if (operation === "json_validate") {
      JSON.parse(text);
      return "Valid JSON";
    }
    if (operation === "base64_encode") {
      return utf8ToBase64(text);
    }
    if (operation === "base64_decode") {
      return base64ToUtf8(text);
    }
    if (operation === "url_encode") {
      return encodeURIComponent(text);
    }
    if (operation === "url_decode") {
      return decodeURIComponent(text);
    }
    if (operation === "html_escape") {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }
    if (operation === "html_unescape") {
      const entityMap = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&amp;": "&",
      };
      return text.replace(/(&lt;|&gt;|&quot;|&#39;|&amp;)/g, (entity) => entityMap[entity] || entity);
    }
    if (operation === "unicode_escape") {
      return Array.from(text)
        .map((ch) => {
          const code = ch.codePointAt(0) || 0;
          if (code <= 0xffff) {
            return `\\u${code.toString(16).padStart(4, "0")}`;
          }
          return `\\u{${code.toString(16)}}`;
        })
        .join("");
    }
    if (operation === "hash_sha256") {
      return sha256Hex(text);
    }

    return text;
  }

  function counterSummary(text) {
    const total = text.length;
    const noSpace = text.replace(/\s/g, "").length;
    const lines = text ? text.split(/\r?\n/).length : 0;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const bytes = new TextEncoder().encode(text).length;

    return [
      `Total characters: ${total}`,
      `Characters (no spaces): ${noSpace}`,
      `Line count: ${lines}`,
      `Word count: ${words}`,
      `UTF-8 bytes: ${bytes}`,
    ].join("\n");
  }

  function caseTransform(text, operation) {
    if (operation === "uppercase") return text.toUpperCase();
    if (operation === "lowercase") return text.toLowerCase();
    if (operation === "title_case") return toTitleCase(text);
    if (operation === "camel_case") return toCamelCase(text);
    if (operation === "snake_case") return toSnakeCase(text);
    if (operation === "kebab_case") return toKebabCase(text);
    return text;
  }

  function structureTransform(text, operation) {
    const lines = text.split(/\r?\n/);

    if (operation === "number_lines") {
      return lines.map((line, index) => `${index + 1}. ${line}`).join("\n");
    }
    if (operation === "bullet_lines") {
      return lines.map((line) => (line.trim() ? `- ${line}` : "")).join("\n");
    }
    if (operation === "comma_to_lines") {
      return text
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
        .join("\n");
    }
    if (operation === "lines_to_comma") {
      return lines
        .map((line) => line.trim())
        .filter(Boolean)
        .join(", ");
    }
    if (operation === "dedupe_lines") {
      const seen = new Set();
      const unique = [];
      lines.forEach((line) => {
        const key = line.trim();
        if (!key) return;
        if (seen.has(key)) return;
        seen.add(key);
        unique.push(line);
      });
      return unique.join("\n");
    }
    if (operation === "sort_az") {
      return lines
        .map((line) => line.trim())
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b))
        .join("\n");
    }

    return text;
  }

  function specialTransform(text, operation) {
    if (operation === "remove_emoji") {
      return text.replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, "");
    }
    if (operation === "digits_only") {
      return (text.match(/\d+/g) || []).join("");
    }
    if (operation === "korean_only") {
      return (text.match(/[\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF\s]+/g) || []).join("").trim();
    }
    if (operation === "english_only") {
      return (text.match(/[A-Za-z\s]+/g) || []).join("").trim();
    }
    if (operation === "remove_special_chars") {
      return text.replace(/[^\p{L}\p{N}\s]/gu, "");
    }

    return text;
  }

  function getSelectedOperation() {
    if (ui.checkboxes.length) {
      return ui.checkboxes.filter((item) => item.checked).map((item) => item.value);
    }
    if (ui.operationSelect) {
      return ui.operationSelect.value;
    }
    const activeChip = ui.chips.find((item) => item.classList.contains("is-active"));
    return activeChip ? activeChip.dataset.operation : "";
  }

  function getOperationLabel() {
    const selected = getSelectedOperation();
    if (Array.isArray(selected)) {
      return selected.join(",") || "none";
    }
    return String(selected || "none");
  }

  function updateStatus(message) {
    if (ui.status) {
      ui.status.textContent = message;
    }
  }

  function enforceLimit() {
    if (!ui.input) return;

    const bytes = new TextEncoder().encode(ui.input.value).length;
    if (bytes <= MAX_INPUT_BYTES) {
      return;
    }

    ui.input.value = clampUtf8ByBytes(ui.input.value, MAX_INPUT_BYTES);
    updateStatus("Input exceeds 1MB. Extra characters were removed.");
  }

  function clampUtf8ByBytes(text, limit) {
    const encoder = new TextEncoder();
    let result = "";
    let byteCount = 0;

    for (const ch of text) {
      const nextByte = encoder.encode(ch).length;
      if (byteCount + nextByte > limit) {
        break;
      }
      result += ch;
      byteCount += nextByte;
    }

    return result;
  }

  function trackLengthBucket() {
    if (!ui.input) return;

    const len = ui.input.value.length;
    let bucket = ">=10000";
    if (len < 500) bucket = "<500";
    else if (len < 2000) bucket = "<2000";
    else if (len < 10000) bucket = "<10000";

    if (bucket === state.lastBucket) return;
    state.lastBucket = bucket;

    trackEvent("text_length_bucket", {
      page_type: state.pageType,
      bucket,
    });
  }

  function trackConvertSuccess(operation, inputLength, outputLength) {
    const opKey = Array.isArray(operation) ? operation.join(",") : String(operation || "none");
    const key = `${state.pageType}|${opKey}|${inputLength}|${outputLength}`;
    if (key === state.lastSuccessKey) {
      return;
    }

    state.lastSuccessKey = key;
    trackEvent("convert_success", {
      page_type: state.pageType,
      operation: opKey,
      input_length: inputLength,
      output_length: outputLength,
    });
  }

  function trackOperationSelection(operation) {
    trackEvent("operation_selected", {
      page_type: state.pageType,
      operation: String(operation || "none"),
    });
  }

  function trackEvent(eventName, payload) {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...payload });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }
  }

  function autoGrow(textarea) {
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.max(180, textarea.scrollHeight)}px`;
  }

  function detectLanguage() {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && NAV_LABELS[saved]) {
      return saved;
    }

    const candidates = [navigator.language, ...(navigator.languages || [])].filter(Boolean);
    for (const raw of candidates) {
      const code = raw.toLowerCase();
      if (code.startsWith("es")) return "es";
      if (code.startsWith("zh")) return "zh";
      if (code.startsWith("ko")) return "ko";
      if (code.startsWith("ja")) return "ja";
      if (code.startsWith("en")) return "en";
    }

    return "en";
  }

  function toTitleCase(text) {
    return text
      .toLowerCase()
      .split(/\s+/)
      .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
      .join(" ");
  }

  function splitWords(text) {
    return text
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .split(/[^\p{L}\p{N}]+/u)
      .map((word) => word.trim())
      .filter(Boolean);
  }

  function toCamelCase(text) {
    const words = splitWords(text).map((word) => word.toLowerCase());
    if (!words.length) return "";
    return words[0] + words.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join("");
  }

  function toSnakeCase(text) {
    return splitWords(text)
      .map((word) => word.toLowerCase())
      .join("_");
  }

  function toKebabCase(text) {
    return splitWords(text)
      .map((word) => word.toLowerCase())
      .join("-");
  }

  function utf8ToBase64(text) {
    const bytes = new TextEncoder().encode(text);
    let binary = "";
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  }

  function base64ToUtf8(text) {
    const normalized = text.replace(/\s+/g, "");
    const binary = atob(normalized);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  function sha256Hex(text) {
    if (!window.crypto || !window.crypto.subtle) {
      throw new Error("SHA-256 is not supported in this browser.");
    }

    return window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)).then((buffer) => {
      const bytes = Array.from(new Uint8Array(buffer));
      return bytes.map((item) => item.toString(16).padStart(2, "0")).join("");
    });
  }

  async function copyToClipboard(value) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        return true;
      } catch (error) {
        return false;
      }
    }

    const hidden = document.createElement("textarea");
    hidden.value = value;
    hidden.style.position = "fixed";
    hidden.style.opacity = "0";
    document.body.appendChild(hidden);
    hidden.focus();
    hidden.select();

    let success = false;
    try {
      success = document.execCommand("copy");
    } catch (error) {
      success = false;
    }

    document.body.removeChild(hidden);
    return success;
  }

  function downloadText(fileName, value) {
    const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
})();
