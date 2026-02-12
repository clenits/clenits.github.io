(function () {
  const LANG_STORAGE_KEY = "localconvert.lang";
  const MAX_INPUT_BYTES = 1024 * 1024;

  const LANGUAGES = [
    { code: "en", flag: "🇺🇸", short: "EN", name: "English" },
    { code: "es", flag: "🇪🇸", short: "ES", name: "Espanol" },
    { code: "zh", flag: "🇨🇳", short: "中文", name: "中文" },
    { code: "ko", flag: "🇰🇷", short: "KO", name: "한국어" },
    { code: "ja", flag: "🇯🇵", short: "JP", name: "日本語" },
  ];

  const NAV_LABELS = {
    en: {
      language: "Language",
      navMain: "Main navigation",
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
      language: "Idioma",
      navMain: "Navegacion principal",
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
      language: "语言",
      navMain: "主导航",
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
      language: "언어",
      navMain: "메인 메뉴",
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
      language: "言語",
      navMain: "メインナビ",
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

  const UI_TEXT = {
    en: {
      operation: "Operation",
      input: "Input",
      output: "Result",
      clear: "Clear",
      copy: "Copy Result",
      download: "Download .txt",
      metrics: ["Total chars", "No-space chars", "Lines", "Words", "UTF-8 bytes"],
      privacy: ["Text is not sent to any server.", "All processing runs in your browser."],
      statusReady: "Ready.",
      statusEnter: "Enter text to start.",
      statusCleared: "Cleared.",
      statusNoCopy: "No output to copy.",
      statusNoDownload: "No output to download.",
      statusCopied: "Copied to clipboard.",
      statusCopyFail: "Copy failed. Please copy manually.",
      statusDownloaded: "Downloaded {{fileName}}.",
      statusError: "Error: {{message}}",
      statusLimit: "Input exceeds 1MB. Extra characters were removed.",
      validJson: "Valid JSON",
      unsupportedSha: "SHA-256 is not supported in this browser.",
      summaryTotal: "Total characters",
      summaryNoSpace: "Characters (no spaces)",
      summaryLines: "Line count",
      summaryWords: "Word count",
      summaryBytes: "UTF-8 bytes",
      hubPopular: "Popular quick pages",
      hubPrivacyStrong: "Privacy first.",
      hubPrivacyBody: "Text is never uploaded. Processing is done locally in your browser.",
      relatedTitle: "Related shortcuts",
      relatedToolsTitle: "Related tools",
      exampleTitle: "Example",
      faqTitle: "FAQ",
      inputPlaceholder: "Paste text here",
      outputPlaceholder: "Result appears here",
      inputPlaceholderLinebreaks: "Paste text with many line breaks",
      outputPlaceholderLinebreaks: "One-line result appears here",
      inputPlaceholderDev: "Paste source text",
      outputPlaceholderDev: "Converted output appears here",
      inputPlaceholderCounter: "Type or paste text",
      outputPlaceholderCounter: "Count summary appears here",
      inputPlaceholderStructure: "Paste lines or comma-separated values",
      outputPlaceholderStructure: "Structured output appears here",
      inputPlaceholderSpecial: "Paste text to filter",
      outputPlaceholderSpecial: "Filtered output appears here",
    },
    es: {
      operation: "Operacion",
      input: "Entrada",
      output: "Resultado",
      clear: "Limpiar",
      copy: "Copiar resultado",
      download: "Descargar .txt",
      metrics: ["Caracteres", "Sin espacios", "Lineas", "Palabras", "Bytes UTF-8"],
      privacy: ["El texto no se envia al servidor.", "Todo se procesa en tu navegador."],
      statusReady: "Listo.",
      statusEnter: "Ingresa texto para comenzar.",
      statusCleared: "Limpiado.",
      statusNoCopy: "No hay resultado para copiar.",
      statusNoDownload: "No hay resultado para descargar.",
      statusCopied: "Copiado al portapapeles.",
      statusCopyFail: "Fallo al copiar. Copia manualmente.",
      statusDownloaded: "Descargado: {{fileName}}.",
      statusError: "Error: {{message}}",
      statusLimit: "La entrada supera 1MB. Se recorto el exceso.",
      validJson: "JSON valido",
      unsupportedSha: "SHA-256 no es compatible en este navegador.",
      summaryTotal: "Caracteres totales",
      summaryNoSpace: "Caracteres (sin espacios)",
      summaryLines: "Numero de lineas",
      summaryWords: "Numero de palabras",
      summaryBytes: "Bytes UTF-8",
      hubPopular: "Paginas rapidas",
      hubPrivacyStrong: "Privacidad primero.",
      hubPrivacyBody: "El texto nunca se sube. Todo se procesa en el navegador.",
      relatedTitle: "Atajos relacionados",
      relatedToolsTitle: "Herramientas relacionadas",
      exampleTitle: "Ejemplo",
      faqTitle: "FAQ",
      inputPlaceholder: "Pega texto aqui",
      outputPlaceholder: "El resultado aparece aqui",
      inputPlaceholderLinebreaks: "Pega texto con muchos saltos",
      outputPlaceholderLinebreaks: "El resultado en una linea aparece aqui",
      inputPlaceholderDev: "Pega texto fuente",
      outputPlaceholderDev: "El resultado convertido aparece aqui",
      inputPlaceholderCounter: "Escribe o pega texto",
      outputPlaceholderCounter: "Resumen de conteo aqui",
      inputPlaceholderStructure: "Pega lineas o valores separados por comas",
      outputPlaceholderStructure: "Resultado estructurado aqui",
      inputPlaceholderSpecial: "Pega texto para filtrar",
      outputPlaceholderSpecial: "Resultado filtrado aqui",
    },
    zh: {
      operation: "操作",
      input: "输入",
      output: "结果",
      clear: "清空",
      copy: "复制结果",
      download: "下载 .txt",
      metrics: ["总字符", "去空格字符", "行数", "词数", "UTF-8 字节"],
      privacy: ["文本不会发送到服务器。", "所有处理都在浏览器中完成。"],
      statusReady: "就绪。",
      statusEnter: "请输入文本开始处理。",
      statusCleared: "已清空。",
      statusNoCopy: "没有可复制的结果。",
      statusNoDownload: "没有可下载的结果。",
      statusCopied: "已复制到剪贴板。",
      statusCopyFail: "复制失败，请手动复制。",
      statusDownloaded: "已下载 {{fileName}}。",
      statusError: "错误：{{message}}",
      statusLimit: "输入超过 1MB，超出部分已移除。",
      validJson: "JSON 有效",
      unsupportedSha: "当前浏览器不支持 SHA-256。",
      summaryTotal: "总字符数",
      summaryNoSpace: "字符数（不含空格）",
      summaryLines: "行数",
      summaryWords: "词数",
      summaryBytes: "UTF-8 字节",
      hubPopular: "常用快捷页面",
      hubPrivacyStrong: "隐私优先。",
      hubPrivacyBody: "文本不会上传，全部在浏览器本地处理。",
      relatedTitle: "相关快捷工具",
      relatedToolsTitle: "相关工具",
      exampleTitle: "示例",
      faqTitle: "常见问题",
      inputPlaceholder: "在此粘贴文本",
      outputPlaceholder: "结果显示在这里",
      inputPlaceholderLinebreaks: "粘贴含有很多换行的文本",
      outputPlaceholderLinebreaks: "单行结果显示在这里",
      inputPlaceholderDev: "粘贴源文本",
      outputPlaceholderDev: "转换结果显示在这里",
      inputPlaceholderCounter: "输入或粘贴文本",
      outputPlaceholderCounter: "计数摘要显示在这里",
      inputPlaceholderStructure: "粘贴多行文本或逗号分隔值",
      outputPlaceholderStructure: "结构化结果显示在这里",
      inputPlaceholderSpecial: "粘贴要过滤的文本",
      outputPlaceholderSpecial: "过滤结果显示在这里",
    },
    ko: {
      operation: "작업",
      input: "입력",
      output: "결과",
      clear: "초기화",
      copy: "결과 복사",
      download: "다운로드 .txt",
      metrics: ["전체 글자", "공백 제외", "줄 수", "단어 수", "UTF-8 바이트"],
      privacy: ["텍스트는 서버로 전송되지 않습니다.", "모든 처리는 브라우저에서 수행됩니다."],
      statusReady: "준비 완료.",
      statusEnter: "텍스트를 입력하면 시작됩니다.",
      statusCleared: "초기화되었습니다.",
      statusNoCopy: "복사할 결과가 없습니다.",
      statusNoDownload: "다운로드할 결과가 없습니다.",
      statusCopied: "클립보드에 복사되었습니다.",
      statusCopyFail: "복사 실패. 수동으로 복사해주세요.",
      statusDownloaded: "다운로드 완료: {{fileName}}",
      statusError: "오류: {{message}}",
      statusLimit: "입력이 1MB를 초과해 초과 문자를 잘랐습니다.",
      validJson: "유효한 JSON입니다.",
      unsupportedSha: "이 브라우저는 SHA-256을 지원하지 않습니다.",
      summaryTotal: "전체 글자 수",
      summaryNoSpace: "공백 제외 글자 수",
      summaryLines: "줄 수",
      summaryWords: "단어 수",
      summaryBytes: "UTF-8 바이트",
      hubPopular: "자주 쓰는 바로가기",
      hubPrivacyStrong: "프라이버시 우선.",
      hubPrivacyBody: "텍스트는 업로드되지 않으며 브라우저에서만 처리됩니다.",
      relatedTitle: "관련 바로가기",
      relatedToolsTitle: "관련 도구",
      exampleTitle: "예시",
      faqTitle: "FAQ",
      inputPlaceholder: "여기에 텍스트를 붙여넣으세요",
      outputPlaceholder: "결과가 여기에 표시됩니다",
      inputPlaceholderLinebreaks: "줄바꿈이 많은 텍스트를 붙여넣으세요",
      outputPlaceholderLinebreaks: "한 줄 결과가 여기에 표시됩니다",
      inputPlaceholderDev: "원본 텍스트를 붙여넣으세요",
      outputPlaceholderDev: "변환 결과가 여기에 표시됩니다",
      inputPlaceholderCounter: "입력하거나 붙여넣으세요",
      outputPlaceholderCounter: "카운트 요약이 여기에 표시됩니다",
      inputPlaceholderStructure: "줄 목록 또는 쉼표 목록을 붙여넣으세요",
      outputPlaceholderStructure: "구조화된 결과가 여기에 표시됩니다",
      inputPlaceholderSpecial: "필터할 텍스트를 붙여넣으세요",
      outputPlaceholderSpecial: "필터 결과가 여기에 표시됩니다",
    },
    ja: {
      operation: "操作",
      input: "入力",
      output: "結果",
      clear: "クリア",
      copy: "結果をコピー",
      download: "ダウンロード .txt",
      metrics: ["総文字数", "空白除外", "行数", "単語数", "UTF-8 バイト"],
      privacy: ["テキストはサーバーに送信されません。", "すべての処理はブラウザ内で実行されます。"],
      statusReady: "準備完了。",
      statusEnter: "テキストを入力してください。",
      statusCleared: "クリアしました。",
      statusNoCopy: "コピーする結果がありません。",
      statusNoDownload: "ダウンロードする結果がありません。",
      statusCopied: "クリップボードにコピーしました。",
      statusCopyFail: "コピーに失敗しました。手動でコピーしてください。",
      statusDownloaded: "ダウンロード完了: {{fileName}}",
      statusError: "エラー: {{message}}",
      statusLimit: "入力が1MBを超えたため超過分を削除しました。",
      validJson: "有効な JSON です",
      unsupportedSha: "このブラウザは SHA-256 をサポートしていません。",
      summaryTotal: "総文字数",
      summaryNoSpace: "空白除外文字数",
      summaryLines: "行数",
      summaryWords: "単語数",
      summaryBytes: "UTF-8 バイト",
      hubPopular: "人気のクイックページ",
      hubPrivacyStrong: "プライバシー優先。",
      hubPrivacyBody: "テキストはアップロードされず、ブラウザ内で処理されます。",
      relatedTitle: "関連ショートカット",
      relatedToolsTitle: "関連ツール",
      exampleTitle: "例",
      faqTitle: "FAQ",
      inputPlaceholder: "ここにテキストを貼り付け",
      outputPlaceholder: "結果がここに表示されます",
      inputPlaceholderLinebreaks: "改行が多いテキストを貼り付け",
      outputPlaceholderLinebreaks: "1行結果がここに表示されます",
      inputPlaceholderDev: "元テキストを貼り付け",
      outputPlaceholderDev: "変換結果がここに表示されます",
      inputPlaceholderCounter: "入力または貼り付け",
      outputPlaceholderCounter: "カウント結果がここに表示されます",
      inputPlaceholderStructure: "行リストまたはカンマ区切りを貼り付け",
      outputPlaceholderStructure: "整形結果がここに表示されます",
      inputPlaceholderSpecial: "フィルタするテキストを貼り付け",
      outputPlaceholderSpecial: "フィルタ結果がここに表示されます",
    },
  };

  const OPERATION_LABELS = {
    en: {
      collapse_spaces: "Remove duplicate spaces",
      normalize_linebreaks: "Normalize line breaks",
      remove_linebreaks: "Remove line breaks",
      strip_html: "Remove HTML tags",
      remove_special_chars: "Remove special characters",
      trim_edges: "Trim each line",
      json_pretty: "Pretty print JSON",
      json_minify: "Minify JSON",
      json_validate: "Validate JSON",
      base64_encode: "Base64 encode",
      base64_decode: "Base64 decode",
      url_encode: "URL encode",
      url_decode: "URL decode",
      html_escape: "HTML escape",
      html_unescape: "HTML unescape",
      unicode_escape: "Unicode escape",
      hash_sha256: "SHA-256 hash",
      uppercase: "UPPERCASE",
      lowercase: "lowercase",
      title_case: "Title Case",
      camel_case: "camelCase",
      snake_case: "snake_case",
      kebab_case: "kebab-case",
      dedupe_lines: "Remove duplicates",
      sort_az: "Sort A-Z",
      number_lines: "Add numbering",
      bullet_lines: "Add bullets",
      comma_to_lines: "Comma to lines",
      lines_to_comma: "Lines to comma",
      remove_emoji: "Remove emoji",
      digits_only: "Keep digits only",
      korean_only: "Keep Korean only",
      english_only: "Keep English only",
      group_json: "JSON",
      group_encoding: "Encoding",
      group_hash: "Hash",
    },
    ko: {
      collapse_spaces: "중복 공백 제거",
      normalize_linebreaks: "줄바꿈 정리",
      remove_linebreaks: "줄바꿈 제거",
      strip_html: "HTML 태그 제거",
      remove_special_chars: "특수문자 제거",
      trim_edges: "줄 앞뒤 공백 제거",
      json_pretty: "JSON 보기 좋게",
      json_minify: "JSON 압축",
      json_validate: "JSON 유효성 검사",
      base64_encode: "Base64 인코딩",
      base64_decode: "Base64 디코딩",
      url_encode: "URL 인코딩",
      url_decode: "URL 디코딩",
      html_escape: "HTML 이스케이프",
      html_unescape: "HTML 언이스케이프",
      unicode_escape: "유니코드 이스케이프",
      hash_sha256: "SHA-256 해시",
      uppercase: "대문자",
      lowercase: "소문자",
      title_case: "타이틀 케이스",
      camel_case: "camelCase",
      snake_case: "snake_case",
      kebab_case: "kebab-case",
      dedupe_lines: "중복 제거",
      sort_az: "A-Z 정렬",
      number_lines: "번호 붙이기",
      bullet_lines: "불릿 추가",
      comma_to_lines: "쉼표를 줄로",
      lines_to_comma: "줄을 쉼표로",
      remove_emoji: "이모지 제거",
      digits_only: "숫자만",
      korean_only: "한글만",
      english_only: "영어만",
      group_json: "JSON",
      group_encoding: "인코딩",
      group_hash: "해시",
    },
    es: {
      collapse_spaces: "Eliminar espacios duplicados",
      normalize_linebreaks: "Normalizar saltos de linea",
      remove_linebreaks: "Eliminar saltos de linea",
      strip_html: "Eliminar etiquetas HTML",
      remove_special_chars: "Eliminar caracteres especiales",
      trim_edges: "Recortar cada linea",
      json_pretty: "JSON legible",
      json_minify: "JSON minificado",
      json_validate: "Validar JSON",
      base64_encode: "Codificar Base64",
      base64_decode: "Decodificar Base64",
      url_encode: "Codificar URL",
      url_decode: "Decodificar URL",
      html_escape: "Escapar HTML",
      html_unescape: "Desescapar HTML",
      unicode_escape: "Escape Unicode",
      hash_sha256: "Hash SHA-256",
      uppercase: "MAYUSCULAS",
      lowercase: "minusculas",
      title_case: "Tipo Titulo",
      camel_case: "camelCase",
      snake_case: "snake_case",
      kebab_case: "kebab-case",
      dedupe_lines: "Eliminar duplicados",
      sort_az: "Ordenar A-Z",
      number_lines: "Agregar numeracion",
      bullet_lines: "Agregar vinetas",
      comma_to_lines: "Comas a lineas",
      lines_to_comma: "Lineas a comas",
      remove_emoji: "Eliminar emoji",
      digits_only: "Solo numeros",
      korean_only: "Solo coreano",
      english_only: "Solo ingles",
      group_json: "JSON",
      group_encoding: "Codificacion",
      group_hash: "Hash",
    },
    zh: {
      collapse_spaces: "移除重复空格",
      normalize_linebreaks: "规范换行",
      remove_linebreaks: "移除换行",
      strip_html: "移除 HTML 标签",
      remove_special_chars: "移除特殊字符",
      trim_edges: "去除每行首尾空格",
      json_pretty: "JSON 美化",
      json_minify: "JSON 压缩",
      json_validate: "JSON 校验",
      base64_encode: "Base64 编码",
      base64_decode: "Base64 解码",
      url_encode: "URL 编码",
      url_decode: "URL 解码",
      html_escape: "HTML 转义",
      html_unescape: "HTML 反转义",
      unicode_escape: "Unicode 转义",
      hash_sha256: "SHA-256 哈希",
      uppercase: "大写",
      lowercase: "小写",
      title_case: "标题格式",
      camel_case: "camelCase",
      snake_case: "snake_case",
      kebab_case: "kebab-case",
      dedupe_lines: "去重",
      sort_az: "A-Z 排序",
      number_lines: "添加编号",
      bullet_lines: "添加项目符号",
      comma_to_lines: "逗号转多行",
      lines_to_comma: "多行转逗号",
      remove_emoji: "移除表情",
      digits_only: "仅保留数字",
      korean_only: "仅保留韩文",
      english_only: "仅保留英文",
      group_json: "JSON",
      group_encoding: "编码",
      group_hash: "哈希",
    },
    ja: {
      collapse_spaces: "重複スペースを削除",
      normalize_linebreaks: "改行を正規化",
      remove_linebreaks: "改行を削除",
      strip_html: "HTML タグを削除",
      remove_special_chars: "記号を削除",
      trim_edges: "各行の前後空白を削除",
      json_pretty: "JSON 整形",
      json_minify: "JSON 圧縮",
      json_validate: "JSON 検証",
      base64_encode: "Base64 エンコード",
      base64_decode: "Base64 デコード",
      url_encode: "URL エンコード",
      url_decode: "URL デコード",
      html_escape: "HTML エスケープ",
      html_unescape: "HTML アンエスケープ",
      unicode_escape: "Unicode エスケープ",
      hash_sha256: "SHA-256 ハッシュ",
      uppercase: "大文字",
      lowercase: "小文字",
      title_case: "タイトルケース",
      camel_case: "camelCase",
      snake_case: "snake_case",
      kebab_case: "kebab-case",
      dedupe_lines: "重複削除",
      sort_az: "A-Z ソート",
      number_lines: "連番を追加",
      bullet_lines: "箇条書きを追加",
      comma_to_lines: "カンマを改行に",
      lines_to_comma: "改行をカンマに",
      remove_emoji: "絵文字を削除",
      digits_only: "数字のみ",
      korean_only: "韓国語のみ",
      english_only: "英語のみ",
      group_json: "JSON",
      group_encoding: "エンコード",
      group_hash: "ハッシュ",
    },
  };

  const PAGE_COPY = {
    en: {
      pages: {
        text: {
          heroTitle: "Why do you need to transform text?",
          heroDesc: "Start from your exact situation and jump to the right tool. Everything runs in your browser.",
          cards: [
            {
              title: "Clean messy text",
              desc: "Fix copied content with broken spacing, extra line breaks, and unwanted symbols.",
            },
            {
              title: "Developer transforms",
              desc: "Format JSON, encode/decode strings, and run quick dev-focused text conversions.",
            },
            {
              title: "Count characters quickly",
              desc: "Check characters, words, lines, and bytes in real time while you type or paste.",
            },
            {
              title: "Convert case formats",
              desc: "Switch between uppercase, lowercase, title case, camelCase, snake_case, and kebab-case.",
            },
            {
              title: "Restructure lists",
              desc: "Add numbers or bullets, split by commas, merge lines, sort, and remove duplicates.",
            },
            {
              title: "Filter special content",
              desc: "Remove emoji, keep only numbers, keep only Korean or English text, and sanitize symbols.",
            },
          ],
        },
        "text-clean": {
          heroTitle: "Clean copied text in one pass",
          heroDesc: "Select multiple cleanup rules. Output updates instantly with no upload.",
        },
        "text-dev": {
          heroTitle: "Developer conversion utilities",
          heroDesc: "Switch operation and convert immediately. JSON parsing errors are reported in place.",
        },
        "text-counter": {
          heroTitle: "Real-time text counter",
          heroDesc: "Paste or type text and monitor counts instantly while editing.",
        },
        "text-case": {
          heroTitle: "Convert text case and naming format",
          heroDesc: "Use the buttons to map plain text into app, code, or content naming styles.",
        },
        "text-structure": {
          heroTitle: "Restructure line-based text lists",
          heroDesc: "Convert between line and comma formats, deduplicate values, and sort cleanly.",
        },
        "text-special": {
          heroTitle: "Filter special characters and language sets",
          heroDesc: "Keep only the part of text you need and remove the rest in real time.",
        },
        "remove-line-breaks": {
          heroTitle: "Remove line breaks from text",
          heroDesc: "Merge multiline content into a single clean line while keeping words readable.",
        },
        "json-pretty-print": {
          heroTitle: "JSON pretty print and validation",
          heroDesc: "Make compact JSON readable, verify syntax, and minify again when needed.",
        },
        "uppercase-converter": {
          heroTitle: "Uppercase converter",
          heroDesc: "Convert selected text to uppercase in one click, then copy or download the result.",
        },
        "remove-duplicate-lines": {
          heroTitle: "Remove duplicate lines from text lists",
          heroDesc: "Clean repeated values and keep only the first unique appearance of each line.",
        },
        "base64-encode": {
          heroTitle: "Base64 encode and decode",
          heroDesc: "Convert plain text to Base64 and decode it back instantly in your browser.",
        },
      },
    },
    ko: {
      pages: {
        text: {
          heroTitle: "왜 텍스트를 변환하려고 하나요?",
          heroDesc: "상황에 맞는 카드를 선택해 바로 필요한 도구로 이동하세요. 모든 처리는 브라우저에서 실행됩니다.",
          cards: [
            {
              title: "복붙 텍스트 정리",
              desc: "깨진 공백, 불필요한 줄바꿈, 특수문자를 한 번에 정리합니다.",
            },
            {
              title: "개발용 변환",
              desc: "JSON 포맷, 인코딩/디코딩 등 개발 작업용 변환을 빠르게 수행합니다.",
            },
            {
              title: "글자 수 빠른 확인",
              desc: "글자 수, 단어 수, 줄 수, 바이트를 실시간으로 확인합니다.",
            },
            {
              title: "대소문자 변환",
              desc: "대문자, 소문자, Title Case, camelCase 등으로 변환합니다.",
            },
            {
              title: "리스트 구조 변환",
              desc: "번호/불릿 추가, 쉼표-줄 변환, 정렬, 중복 제거를 처리합니다.",
            },
            {
              title: "특수 필터",
              desc: "이모지 제거, 숫자만/한글만/영어만 추출 등을 지원합니다.",
            },
          ],
        },
        "text-clean": {
          heroTitle: "복사한 텍스트를 한 번에 정리",
          heroDesc: "여러 정리 옵션을 동시에 선택하면 결과가 즉시 갱신됩니다.",
        },
        "text-dev": {
          heroTitle: "개발자용 텍스트 변환",
          heroDesc: "작업을 바꾸면 바로 변환되며 JSON 오류도 즉시 확인할 수 있습니다.",
        },
        "text-counter": {
          heroTitle: "실시간 텍스트 카운터",
          heroDesc: "텍스트를 붙여넣거나 입력하면 카운트가 즉시 업데이트됩니다.",
        },
        "text-case": {
          heroTitle: "대소문자와 네이밍 형식 변환",
          heroDesc: "버튼으로 문장/코드 스타일에 맞는 케이스로 빠르게 바꿉니다.",
        },
        "text-structure": {
          heroTitle: "줄 단위 리스트 구조 정리",
          heroDesc: "줄-쉼표 변환, 중복 제거, 정렬을 한 번에 처리합니다.",
        },
        "text-special": {
          heroTitle: "특수 문자와 언어 필터",
          heroDesc: "필요한 문자만 남기고 나머지는 실시간으로 제거합니다.",
        },
        "remove-line-breaks": {
          heroTitle: "줄바꿈 제거",
          heroDesc: "여러 줄 텍스트를 읽기 쉬운 한 줄 형태로 합칩니다.",
        },
        "json-pretty-print": {
          heroTitle: "JSON 포맷/검증",
          heroDesc: "압축된 JSON을 보기 좋게 정리하고 유효성을 확인하세요.",
        },
        "uppercase-converter": {
          heroTitle: "대문자 변환기",
          heroDesc: "텍스트를 즉시 대문자로 변환하고 복사/다운로드할 수 있습니다.",
        },
        "remove-duplicate-lines": {
          heroTitle: "중복 줄 제거",
          heroDesc: "반복된 항목을 제거하고 고유한 줄만 남깁니다.",
        },
        "base64-encode": {
          heroTitle: "Base64 인코딩/디코딩",
          heroDesc: "일반 텍스트를 Base64로 변환하거나 다시 복원합니다.",
        },
      },
    },
    ja: {
      pages: {
        text: {
          heroTitle: "なぜテキストを変換しますか？",
          heroDesc: "状況に合うカードを選ぶと、必要なツールにすぐ移動できます。",
          cards: [
            {
              title: "乱れたテキストを整形",
              desc: "コピー時に崩れた空白や改行、不要な記号をまとめて整理します。",
            },
            {
              title: "開発向け変換",
              desc: "JSON整形、エンコード/デコードなど開発作業を素早く処理します。",
            },
            {
              title: "文字数をすぐ確認",
              desc: "文字数、単語数、行数、バイト数をリアルタイムで確認できます。",
            },
            {
              title: "ケース変換",
              desc: "大文字、小文字、Title、camelCase などに変換します。",
            },
            {
              title: "リスト構造変換",
              desc: "番号付け、箇条書き、カンマ/改行変換、並び替え、重複削除を行います。",
            },
            {
              title: "特殊フィルタ",
              desc: "絵文字削除、数字のみ抽出、韓国語/英語のみ抽出に対応します。",
            },
          ],
        },
        "text-clean": {
          heroTitle: "コピーしたテキストを一括整形",
          heroDesc: "複数の整形ルールを同時に適用し、結果を即時表示します。",
        },
        "text-dev": {
          heroTitle: "開発者向けテキスト変換",
          heroDesc: "操作を切り替えると即変換。JSONエラーもその場で確認できます。",
        },
        "text-counter": {
          heroTitle: "リアルタイム文字数カウンター",
          heroDesc: "入力や貼り付けに合わせてカウントが即時更新されます。",
        },
        "text-case": {
          heroTitle: "ケースと命名形式を変換",
          heroDesc: "文章やコード向けに最適なケースへすばやく変換できます。",
        },
        "text-structure": {
          heroTitle: "行ベースのリストを整える",
          heroDesc: "改行/カンマ変換、重複削除、並び替えを一括で処理します。",
        },
        "text-special": {
          heroTitle: "特殊文字と言語フィルタ",
          heroDesc: "必要な文字だけ残し、不要な内容をリアルタイムで除去します。",
        },
        "remove-line-breaks": {
          heroTitle: "改行を削除",
          heroDesc: "複数行のテキストを読みやすい1行にまとめます。",
        },
        "json-pretty-print": {
          heroTitle: "JSON 整形 / 検証",
          heroDesc: "圧縮JSONを見やすく整形し、構文の妥当性を確認します。",
        },
        "uppercase-converter": {
          heroTitle: "大文字変換ツール",
          heroDesc: "テキストを即時で大文字化し、コピーまたは保存できます。",
        },
        "remove-duplicate-lines": {
          heroTitle: "重複行を削除",
          heroDesc: "重複した項目を取り除き、一意な行だけを残します。",
        },
        "base64-encode": {
          heroTitle: "Base64 エンコード / デコード",
          heroDesc: "通常テキストをBase64へ変換し、逆変換も行えます。",
        },
      },
    },
    es: {
      pages: {
        text: {
          heroTitle: "Por que necesitas transformar texto?",
          heroDesc: "Empieza por tu caso y abre la herramienta correcta al instante.",
          cards: [
            {
              title: "Limpiar texto desordenado",
              desc: "Arregla espacios rotos, saltos extras y simbolos no deseados.",
            },
            {
              title: "Conversion para desarrolladores",
              desc: "Formatea JSON y realiza codificacion/decodificacion rapidamente.",
            },
            {
              title: "Contar caracteres rapido",
              desc: "Verifica caracteres, palabras, lineas y bytes en tiempo real.",
            },
            {
              title: "Convertir mayusculas y formato",
              desc: "Convierte entre mayusculas, minusculas, title, camel y snake.",
            },
            {
              title: "Reestructurar listas",
              desc: "Agrega numeracion, divide por comas, une lineas, ordena y elimina duplicados.",
            },
            {
              title: "Filtrar contenido especial",
              desc: "Quita emoji y extrae solo numeros, coreano o ingles.",
            },
          ],
        },
        "text-clean": {
          heroTitle: "Limpiar texto copiado en una pasada",
          heroDesc: "Aplica varias reglas de limpieza y ve el resultado al instante.",
        },
        "text-dev": {
          heroTitle: "Utilidades de conversion para desarrolladores",
          heroDesc: "Cambia la operacion y convierte de inmediato con validacion JSON.",
        },
        "text-counter": {
          heroTitle: "Contador de texto en tiempo real",
          heroDesc: "Pega o escribe texto y revisa los conteos al instante.",
        },
        "text-case": {
          heroTitle: "Convertir formato de mayusculas y nombres",
          heroDesc: "Transforma texto para estilos de contenido o nombres de codigo.",
        },
        "text-structure": {
          heroTitle: "Reestructurar listas por lineas",
          heroDesc: "Convierte lineas y comas, elimina duplicados y ordena facil.",
        },
        "text-special": {
          heroTitle: "Filtrar caracteres especiales e idioma",
          heroDesc: "Conserva solo lo necesario y elimina el resto en tiempo real.",
        },
        "remove-line-breaks": {
          heroTitle: "Eliminar saltos de linea",
          heroDesc: "Une texto multilinea en una sola linea limpia y legible.",
        },
        "json-pretty-print": {
          heroTitle: "JSON legible y validacion",
          heroDesc: "Haz legible JSON compacto y valida su estructura rapidamente.",
        },
        "uppercase-converter": {
          heroTitle: "Convertidor a mayusculas",
          heroDesc: "Convierte texto a MAYUSCULAS al instante y copia el resultado.",
        },
        "remove-duplicate-lines": {
          heroTitle: "Eliminar lineas duplicadas",
          heroDesc: "Conserva solo la primera aparicion de cada linea unica.",
        },
        "base64-encode": {
          heroTitle: "Codificar y decodificar Base64",
          heroDesc: "Convierte texto a Base64 y recuperalo al instante.",
        },
      },
    },
    zh: {
      pages: {
        text: {
          heroTitle: "你为什么要转换文本？",
          heroDesc: "按你的场景选择卡片，直接进入合适的工具。",
          cards: [
            {
              title: "清理杂乱文本",
              desc: "修复复制后出现的空格、换行和无用符号问题。",
            },
            {
              title: "开发转换工具",
              desc: "快速完成 JSON 格式化与编码/解码转换。",
            },
            {
              title: "快速统计字数",
              desc: "实时查看字符数、词数、行数和字节数。",
            },
            {
              title: "大小写格式转换",
              desc: "在大写、小写、Title、camel、snake 等格式间切换。",
            },
            {
              title: "列表结构整理",
              desc: "支持编号、项目符号、逗号与换行互转、排序和去重。",
            },
            {
              title: "特殊内容过滤",
              desc: "移除表情，仅保留数字、韩文或英文。",
            },
          ],
        },
        "text-clean": {
          heroTitle: "一键清理复制文本",
          heroDesc: "可同时应用多条清理规则，结果即时更新。",
        },
        "text-dev": {
          heroTitle: "开发者文本转换",
          heroDesc: "切换操作即可即时转换，并显示 JSON 错误信息。",
        },
        "text-counter": {
          heroTitle: "实时文本计数器",
          heroDesc: "输入或粘贴文本后，统计结果会立即更新。",
        },
        "text-case": {
          heroTitle: "大小写与命名格式转换",
          heroDesc: "一键转换为内容写作或代码命名所需格式。",
        },
        "text-structure": {
          heroTitle: "按行整理列表结构",
          heroDesc: "支持逗号/换行互转、去重和排序。",
        },
        "text-special": {
          heroTitle: "特殊字符与语言过滤",
          heroDesc: "仅保留你需要的文本内容，其余即时移除。",
        },
        "remove-line-breaks": {
          heroTitle: "移除换行",
          heroDesc: "将多行文本合并为更易读的一行内容。",
        },
        "json-pretty-print": {
          heroTitle: "JSON 美化与校验",
          heroDesc: "把压缩 JSON 变得易读，并快速校验格式。",
        },
        "uppercase-converter": {
          heroTitle: "大写转换器",
          heroDesc: "一键转为大写，并可直接复制或下载。",
        },
        "remove-duplicate-lines": {
          heroTitle: "移除重复行",
          heroDesc: "去掉重复项，仅保留每行的首次出现。",
        },
        "base64-encode": {
          heroTitle: "Base64 编码与解码",
          heroDesc: "把文本转换为 Base64，或还原为原文。",
        },
      },
    },
  };

  const LONG_COPY = {
    ko: {
      paragraphs: [
        "{{tool}} 도구는 텍스트를 빠르게 정리하고 변환할 때 유용합니다. 붙여넣기 직후 결과를 확인할 수 있어 반복 작업 시간을 줄일 수 있습니다.",
        "모든 처리는 브라우저에서 수행되며 입력 텍스트는 서버로 전송되지 않습니다. 결과는 복사하거나 파일로 저장할 수 있습니다.",
      ],
      faqQ: [
        "이 도구는 서버 업로드가 필요한가요?",
        "긴 텍스트도 처리할 수 있나요?",
        "모바일에서도 사용할 수 있나요?",
        "결과를 바로 복사할 수 있나요?",
        "다운로드 기능도 제공되나요?",
        "추가 텍스트 도구로 이동할 수 있나요?",
      ],
      faqA: [
        "아니요. 브라우저 안에서 로컬로 처리됩니다.",
        "네. 페이지 입력 제한 범위 안에서 처리됩니다.",
        "네. 모바일 브라우저에서도 동작합니다.",
        "네. 결과 복사 버튼으로 바로 복사할 수 있습니다.",
        "네. .txt 파일로 바로 저장할 수 있습니다.",
        "네. 하단 관련 링크로 다른 도구에 이동할 수 있습니다.",
      ],
      example: "입력:\\n예시 텍스트\\n\\n결과:\\n변환된 텍스트",
    },
    es: {
      paragraphs: [
        "La herramienta {{tool}} ayuda a limpiar y convertir texto rapidamente desde el navegador.",
        "Todo el procesamiento es local. El texto no se sube al servidor y puedes copiar o descargar el resultado.",
      ],
      faqQ: [
        "Se sube mi texto al servidor?",
        "Funciona con texto largo?",
        "Puedo usarlo en movil?",
        "Puedo copiar el resultado?",
        "Puedo descargar el resultado?",
        "Hay enlaces a otras herramientas?",
      ],
      faqA: [
        "No. Todo se procesa localmente en el navegador.",
        "Si, dentro del limite de entrada de la pagina.",
        "Si, funciona en navegadores moviles.",
        "Si, usa el boton de copiar resultado.",
        "Si, puedes descargar un archivo .txt.",
        "Si, revisa los enlaces relacionados al final.",
      ],
      example: "Entrada:\\ntexto de ejemplo\\n\\nSalida:\\ntexto convertido",
    },
    zh: {
      paragraphs: [
        "{{tool}} 工具可在浏览器中快速完成文本清理与转换，减少重复操作时间。",
        "所有处理都在本地完成，文本不会上传到服务器。你可以直接复制或下载结果。",
      ],
      faqQ: [
        "文本会上传到服务器吗？",
        "支持长文本吗？",
        "手机端可以使用吗？",
        "可以直接复制结果吗？",
        "支持下载结果吗？",
        "可以跳转到其他文本工具吗？",
      ],
      faqA: [
        "不会，处理全部在浏览器本地进行。",
        "支持，在页面输入上限范围内可正常处理。",
        "可以，移动端浏览器同样可用。",
        "可以，点击复制结果按钮即可。",
        "可以，可下载为 .txt 文件。",
        "可以，通过底部相关链接进入其他工具。",
      ],
      example: "输入:\\n示例文本\\n\\n输出:\\n转换结果",
    },
    ja: {
      paragraphs: [
        "{{tool}} ツールはブラウザ上でテキストを素早く整形・変換できます。",
        "処理はすべてローカルで実行され、テキストはサーバーに送信されません。結果はコピーまたは保存できます。",
      ],
      faqQ: [
        "テキストはサーバーに送信されますか？",
        "長いテキストにも対応しますか？",
        "スマホでも使えますか？",
        "結果をすぐコピーできますか？",
        "結果をダウンロードできますか？",
        "他のツールへ移動できますか？",
      ],
      faqA: [
        "いいえ。ブラウザ内でローカル処理されます。",
        "はい。ページの入力上限内で処理できます。",
        "はい。モバイルブラウザでも動作します。",
        "はい。結果コピーでそのままコピーできます。",
        "はい。.txt ファイルとして保存できます。",
        "はい。関連リンクから他ツールに移動できます。",
      ],
      example: "入力:\\nサンプルテキスト\\n\\n出力:\\n変換結果",
    },
  };

  const state = {
    pageType: document.body.dataset.textPage || "text",
    lastBucket: "",
    lastSuccessKey: "",
    lang: "en",
    languageDom: null,
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

  state.languageDom = ensureLanguagePicker();
  buildLanguageMenu(state.languageDom);
  bindLanguageEvents(state.languageDom);
  setLanguage(detectLanguage(), false, state.languageDom);

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
        updateStatus(t("statusCleared"));
        renderMetrics("");
      });
    }

    if (ui.copy) {
      ui.copy.addEventListener("click", async () => {
        if (!ui.output.value) {
          updateStatus(t("statusNoCopy"));
          return;
        }

        const copied = await copyToClipboard(ui.output.value);
        if (copied) {
          trackEvent("copy_click", {
            page_type: state.pageType,
            operation: getOperationLabel(),
            output_length: ui.output.value.length,
          });
          updateStatus(t("statusCopied"));
        } else {
          updateStatus(t("statusCopyFail"));
        }
      });
    }

    if (ui.download) {
      ui.download.addEventListener("click", () => {
        if (!ui.output.value) {
          updateStatus(t("statusNoDownload"));
          return;
        }

        const stamp = new Date().toISOString().replace(/[:.]/g, "-");
        const fileName = `${state.pageType}-${stamp}.txt`;
        downloadText(fileName, ui.output.value);
        updateStatus(format(t("statusDownloaded"), { fileName }));
      });
    }
  }

  function ensureLanguagePicker() {
    const topbar = document.querySelector(".topbar");
    if (!topbar) {
      return {
        button: null,
        flag: null,
        label: null,
        menu: null,
      };
    }

    let picker = topbar.querySelector(".language-picker");
    if (!picker) {
      picker = document.createElement("div");
      picker.className = "language-picker";
      picker.innerHTML =
        '<button id="languageButton" class="language-button" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Language"><span id="languageFlag">🇺🇸</span><span id="languageLabel">EN</span></button><ul id="languageMenu" class="language-menu" role="menu" hidden></ul>';
      topbar.appendChild(picker);
    }

    return {
      button: picker.querySelector("#languageButton"),
      flag: picker.querySelector("#languageFlag"),
      label: picker.querySelector("#languageLabel"),
      menu: picker.querySelector("#languageMenu"),
    };
  }

  function buildLanguageMenu(dom) {
    if (!dom.menu) return;
    const fragment = document.createDocumentFragment();

    LANGUAGES.forEach((item) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "language-option";
      button.role = "menuitem";
      button.dataset.lang = item.code;
      button.textContent = `${item.flag} ${item.name}`;
      li.appendChild(button);
      fragment.appendChild(li);
    });

    dom.menu.innerHTML = "";
    dom.menu.appendChild(fragment);
  }

  function bindLanguageEvents(dom) {
    if (!dom.button || !dom.menu) return;

    dom.button.addEventListener("click", () => {
      const expanded = dom.button.getAttribute("aria-expanded") === "true";
      dom.button.setAttribute("aria-expanded", String(!expanded));
      dom.menu.hidden = expanded;
    });

    dom.menu.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-lang]");
      if (!button) return;
      setLanguage(button.dataset.lang, true, dom);
      dom.button.setAttribute("aria-expanded", "false");
      dom.menu.hidden = true;
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".language-picker")) {
        dom.button.setAttribute("aria-expanded", "false");
        dom.menu.hidden = true;
      }
    });
  }

  function setLanguage(langCode, persist, dom) {
    const next = NAV_LABELS[langCode] ? langCode : "en";
    state.lang = next;
    if (persist) {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    }

    const currentLang = LANGUAGES.find((item) => item.code === next);
    if (currentLang && dom.flag && dom.label && dom.button) {
      dom.flag.textContent = currentLang.flag;
      dom.label.textContent = currentLang.short;
      dom.button.setAttribute("aria-label", getNavLabels().language);
    }

    document.documentElement.lang = next;
    applyCommonNavigation();
    applyPageCopy();
    applyToolLabels();
    render();
  }

  function applyCommonNavigation() {
    const labels = getNavLabels();

    const topNav = document.querySelector(".topbar .tabs");
    if (topNav) {
      topNav.setAttribute("aria-label", labels.navMain);
    }

    document.querySelectorAll("[data-nav]").forEach((node) => {
      const key = node.dataset.nav;
      if (labels[key]) {
        node.textContent = labels[key];
      }
    });
  }

  function applyPageCopy() {
    const pageCopy = getPageCopy();

    if (pageCopy && pageCopy.heroTitle) {
      setText("main .hero h1", pageCopy.heroTitle);
    }
    if (pageCopy && pageCopy.heroDesc) {
      setText("main .hero p", pageCopy.heroDesc);
    }

    if (state.pageType === "text") {
      applyHubCopy(pageCopy);
    }

    applySectionTitles();
    applyLongCopy();
  }

  function applyHubCopy(pageCopy) {
    const copy = pageCopy || {};
    if (Array.isArray(copy.cards)) {
      const cards = document.querySelectorAll("main .text-card-grid .link-card");
      cards.forEach((card, index) => {
        if (!copy.cards[index]) return;
        setTextNode(card.querySelector("h2"), copy.cards[index].title);
        setTextNode(card.querySelector("p"), copy.cards[index].desc);
      });
    }

    setText("main > section:nth-of-type(3) h2", t("hubPopular"));

    const privacy = document.querySelector("main > section.privacy-note");
    if (privacy) {
      privacy.innerHTML = `<strong>${escapeHtml(t("hubPrivacyStrong"))}</strong> ${escapeHtml(t("hubPrivacyBody"))}`;
    }
  }

  function applySectionTitles() {
    if (state.pageType === "text") {
      return;
    }

    if (state.pageType === "remove-line-breaks" || state.pageType === "json-pretty-print" || state.pageType === "uppercase-converter" || state.pageType === "remove-duplicate-lines" || state.pageType === "base64-encode" || state.pageType === "text-counter") {
      setText("main > section:nth-of-type(4) h2", t("exampleTitle"));
      setText("main > section:nth-of-type(5) h2", t("faqTitle"));
      setText("main > section:nth-of-type(6) h2", t("relatedToolsTitle"));
      return;
    }

    setText("main > section:nth-of-type(3) h2", t("relatedTitle"));
  }

  function applyLongCopy() {
    if (state.lang === "en") return;
    const copy = LONG_COPY[state.lang];
    if (!copy) return;

    const heroTitle = document.querySelector("main .hero h1");
    const toolTitle = heroTitle ? heroTitle.textContent.trim() : "tool";

    const paragraphs = document.querySelectorAll("main .seo-copy p");
    if (paragraphs.length >= 2) {
      paragraphs[0].textContent = format(copy.paragraphs[0], { tool: toolTitle });
      paragraphs[1].textContent = copy.paragraphs[1];
    }

    const faqQuestions = document.querySelectorAll("#faq h3");
    const faqAnswers = document.querySelectorAll("#faq p");
    if (faqQuestions.length === 6 && faqAnswers.length === 6) {
      setListTextNodes(faqQuestions, copy.faqQ);
      setListTextNodes(faqAnswers, copy.faqA);
    }

    const example = document.querySelector("main > section:nth-of-type(4) pre");
    if (example) {
      example.textContent = copy.example;
    }
  }

  function applyToolLabels() {
    if (!ui.input || !ui.output) return;

    setTextNode(ui.clear, t("clear"));
    setTextNode(ui.copy, t("copy"));
    setTextNode(ui.download, t("download"));

    const ioLabels = document.querySelectorAll(".text-grid .option > span");
    if (ioLabels[0]) ioLabels[0].textContent = t("input");
    if (ioLabels[1]) ioLabels[1].textContent = t("output");

    if (ui.operationSelect) {
      const operationLabel = document.querySelector(".tool-surface > label.option > span");
      if (operationLabel) {
        operationLabel.textContent = t("operation");
      }

      ui.operationSelect.querySelectorAll("optgroup").forEach((group) => {
        const label = group.getAttribute("label") || "";
        if (label.toLowerCase() === "json") {
          group.setAttribute("label", operationLabelByKey("group_json"));
        } else if (label.toLowerCase() === "encoding") {
          group.setAttribute("label", operationLabelByKey("group_encoding"));
        } else if (label.toLowerCase() === "hash") {
          group.setAttribute("label", operationLabelByKey("group_hash"));
        }
      });

      ui.operationSelect.querySelectorAll("option").forEach((option) => {
        option.textContent = operationLabelByKey(option.value);
      });
    }

    ui.checkboxes.forEach((box) => {
      const label = box.closest("label");
      if (!label) return;
      const text = operationLabelByKey(box.value);
      label.innerHTML = "";
      label.appendChild(box);
      label.appendChild(document.createTextNode(` ${text}`));
    });

    ui.chips.forEach((chip) => {
      chip.textContent = operationLabelByKey(chip.dataset.operation || "");
    });

    const metricNodes = document.querySelectorAll(".metric-box span");
    const metricText = t("metrics");
    metricNodes.forEach((node, index) => {
      if (Array.isArray(metricText) && typeof metricText[index] === "string") {
        node.textContent = metricText[index];
      }
    });

    const privacyNodes = document.querySelectorAll(".privacy-note div");
    const privacyText = t("privacy");
    privacyNodes.forEach((node, index) => {
      if (Array.isArray(privacyText) && typeof privacyText[index] === "string") {
        node.textContent = privacyText[index];
      }
    });

    applyPlaceholders();
  }

  function applyPlaceholders() {
    if (!ui.input || !ui.output) return;

    ui.input.placeholder = t("inputPlaceholder");
    ui.output.placeholder = t("outputPlaceholder");

    if (state.pageType === "text-dev" || state.pageType === "json-pretty-print" || state.pageType === "base64-encode") {
      ui.input.placeholder = t("inputPlaceholderDev");
      ui.output.placeholder = t("outputPlaceholderDev");
    } else if (state.pageType === "text-counter") {
      ui.input.placeholder = t("inputPlaceholderCounter");
      ui.output.placeholder = t("outputPlaceholderCounter");
    } else if (state.pageType === "text-structure" || state.pageType === "remove-duplicate-lines") {
      ui.input.placeholder = t("inputPlaceholderStructure");
      ui.output.placeholder = t("outputPlaceholderStructure");
    } else if (state.pageType === "text-special") {
      ui.input.placeholder = t("inputPlaceholderSpecial");
      ui.output.placeholder = t("outputPlaceholderSpecial");
    } else if (state.pageType === "text-clean" || state.pageType === "remove-line-breaks") {
      ui.input.placeholder = t("inputPlaceholderLinebreaks");
      ui.output.placeholder = t("outputPlaceholderLinebreaks");
    }
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
      updateStatus(t("statusEnter"));
      return;
    }

    const operation = getSelectedOperation();
    Promise.resolve(runOperation(state.pageType, input, operation))
      .then((result) => {
        ui.output.value = result;
        autoGrow(ui.output);
        updateStatus(t("statusReady"));
        trackConvertSuccess(operation, input.length, result.length);
      })
      .catch((error) => {
        ui.output.value = "";
        autoGrow(ui.output);
        updateStatus(format(t("statusError"), { message: error && error.message ? error.message : "Conversion failed." }));
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
      return t("validJson");
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
      `${t("summaryTotal")}: ${total}`,
      `${t("summaryNoSpace")}: ${noSpace}`,
      `${t("summaryLines")}: ${lines}`,
      `${t("summaryWords")}: ${words}`,
      `${t("summaryBytes")}: ${bytes}`,
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
    updateStatus(t("statusLimit"));
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

  function getNavLabels() {
    return NAV_LABELS[state.lang] || NAV_LABELS.en;
  }

  function getUiText() {
    return UI_TEXT[state.lang] || UI_TEXT.en;
  }

  function getPageCopy() {
    const langPages = (PAGE_COPY[state.lang] && PAGE_COPY[state.lang].pages) || {};
    const enPages = PAGE_COPY.en.pages || {};
    return langPages[state.pageType] || enPages[state.pageType] || null;
  }

  function operationLabelByKey(key) {
    const langMap = OPERATION_LABELS[state.lang] || {};
    const enMap = OPERATION_LABELS.en || {};
    return langMap[key] || enMap[key] || key;
  }

  function t(key) {
    const current = getUiText();
    if (Object.prototype.hasOwnProperty.call(current, key)) {
      return current[key];
    }
    return UI_TEXT.en[key];
  }

  function format(template, vars) {
    if (typeof template !== "string") return "";
    return template.replace(/{{\s*(\w+)\s*}}/g, (_, key) => String(vars[key] ?? ""));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function setText(selector, text) {
    if (typeof text !== "string") return;
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = text;
    }
  }

  function setTextNode(node, text) {
    if (!node || typeof text !== "string") return;
    node.textContent = text;
  }

  function setListTextNodes(nodes, list) {
    if (!Array.isArray(list)) return;
    nodes.forEach((node, index) => {
      if (typeof list[index] === "string") {
        node.textContent = list[index];
      }
    });
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
      throw new Error(t("unsupportedSha"));
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
