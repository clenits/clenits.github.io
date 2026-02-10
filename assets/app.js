const LANG_STORAGE_KEY = "localconvert.lang";

const LANGUAGES = [
  { code: "en", flag: "🇺🇸", short: "EN", name: "English" },
  { code: "es", flag: "🇪🇸", short: "ES", name: "Espanol" },
  { code: "zh", flag: "🇨🇳", short: "中文", name: "中文" },
  { code: "ko", flag: "🇰🇷", short: "KO", name: "한국어" },
  { code: "ja", flag: "🇯🇵", short: "JP", name: "日本語" },
];

const TEXT_TOOLS = [
  { id: "json_pretty", labelKey: "text_tool_json_pretty" },
  { id: "json_minify", labelKey: "text_tool_json_minify" },
  { id: "json_validate", labelKey: "text_tool_json_validate" },
  { id: "csv_to_tsv", labelKey: "text_tool_csv_to_tsv" },
  { id: "tsv_to_csv", labelKey: "text_tool_tsv_to_csv" },
  { id: "txt_to_md", labelKey: "text_tool_txt_to_md" },
  { id: "md_to_txt", labelKey: "text_tool_md_to_txt" },
  { id: "md_to_html", labelKey: "text_tool_md_to_html" },
  { id: "html_to_md", labelKey: "text_tool_html_to_md" },
  { id: "txt_to_html", labelKey: "text_tool_txt_to_html" },
  { id: "html_to_txt", labelKey: "text_tool_html_to_txt" },
];

const COPY = {
  en: {
    tabs_image: "Image",
    tabs_text: "Text",
    tabs_audio: "Audio",
    tabs_video: "Video",
    hero_title: "Free and Unlimited Image Converter.",
    hero_desc: "Use it free with no count limit. Your files stay on your device.",
    trust_free: "100% free",
    trust_unlimited: "Unlimited conversions",
    trust_no_upload: "No file upload",
    trust_local: "Runs in your browser",
    trust_network: "No file data sent to internet",
    trust_privacy: "Hidden photo info removed by default",
    converter_title: "Image Converter",
    converter_subtitle: "Drag files or choose images from your device.",
    drop_hint: "Drop PNG/JPG/WebP/GIF files here",
    choose_files: "Choose Files",
    selected_none: "No files selected",
    selected_count: "{{count}} file(s) selected",
    opt_format: "Output Format",
    opt_quality_dynamic: "Quality ({{value}})",
    opt_width: "Resize Width (px)",
    opt_height: "Resize Height (px)",
    opt_keep_ratio: "Keep aspect ratio",
    opt_remove_exif: "Remove hidden photo info (always on)",
    convert_btn: "Convert",
    clear_btn: "Clear",
    download_all_btn: "Download All",
    zip_note: "ZIP download is coming soon.",
    status_idle: "Ready",
    status_no_files: "Select at least one image to continue.",
    status_converting: "Converting {{count}} file(s)...",
    status_progress: "Converted {{done}} / {{total}}",
    status_done: "Conversion complete. Download your files below.",
    status_warn_unsupported: "Skipped unsupported file(s): {{names}}",
    status_download_all: "Downloading all converted files one by one.",
    result_title: "Results",
    result_empty: "No converted files yet.",
    result_failed: "Failed",
    result_size: "{{from}} -> {{to}}",
    download_btn: "Download",
    audio_title: "Audio Converter",
    audio_subtitle: "Batch process audio locally: trim, volume, fade, and format conversion.",
    audio_drop_hint: "Drop audio file(s) here (MP3/WAV/OGG/M4A)",
    audio_supported_formats: "Supported: mp3, wav, ogg, m4a, aac, webm",
    audio_choose_file: "Choose Audio File",
    audio_selected_none: "No audio file selected",
    audio_selected_file: "Selected: {{name}} ({{duration}} sec)",
    audio_selected_count: "Selected {{count}} file(s)",
    audio_meta_info: "First file: {{sampleRate}} Hz · {{channels}} ch · {{size}}",
    audio_meta_info_basic: "Total size: {{size}}",
    audio_result_title: "Audio Results",
    audio_result_empty: "No processed audio yet.",
    audio_output_format: "Output Format",
    audio_output_bitrate: "Bitrate",
    audio_rate_mode: "Rate Mode",
    audio_vbr_quality: "VBR Quality",
    audio_aac_profile: "AAC Profile",
    audio_output_sample_rate: "Sample Rate",
    audio_sample_rate_keep: "Keep original",
    audio_output_channels: "Channels",
    audio_channels_keep: "Keep original",
    audio_channels_mono: "Mono",
    audio_channels_stereo: "Stereo",
    audio_trim_start: "Trim Start (sec)",
    audio_trim_end: "Trim End (sec)",
    audio_volume_dynamic: "Volume ({{value}} dB)",
    audio_fade_in: "Fade In (sec)",
    audio_fade_out: "Fade Out (sec)",
    audio_normalize: "Auto normalize volume (safe level)",
    audio_ffmpeg_note: "MP3/M4A export uses FFmpeg in your browser and may take extra time on large files.",
    audio_process_btn: "Process Audio",
    audio_clear_btn: "Clear",
    audio_download_btn: "Download Audio",
    audio_status_ready: "Ready for audio conversion.",
    audio_status_no_file: "Select one audio file first.",
    audio_status_no_output: "Process audio first, then download.",
    audio_status_loading: "Loading audio file...",
    audio_status_loaded: "Audio loaded. Set options and click Process Audio.",
    audio_status_processing: "Processing audio...",
    audio_status_processing_file: "Processing {{index}} / {{total}}: {{name}}",
    audio_status_batch_done: "Batch complete: {{done}} succeeded, {{failed}} failed.",
    audio_status_batch_partial: "Batch finished with some failures. Check result list.",
    audio_status_ffmpeg_loading: "Loading FFmpeg engine...",
    audio_status_ffmpeg_ready: "FFmpeg loaded. Encoding audio...",
    audio_status_done: "Audio processing complete.",
    audio_status_unsupported: "Unsupported audio format. Try mp3, wav, ogg, m4a, aac, or webm.",
    audio_status_invalid_trim: "Trim range is invalid. Check start/end values.",
    audio_status_error: "Audio processing failed: {{message}}",
    audio_preview_original: "Original Preview",
    audio_preview_output: "Output Preview",
    audio_progress_idle: "No audio processing yet.",
    audio_progress_text: "{{phase}} · {{percent}}%",
    audio_phase_decode: "Decode",
    audio_phase_render: "Render",
    audio_phase_encode: "Encode",
    audio_phase_done: "Done",
    video_title: "Video Converter",
    video_subtitle: "Convert video format, trim, resize, and extract thumbnails. Everything runs in your browser.",
    video_drop_hint: "Drop video file(s) here (mp4, mov, webm, mkv)",
    video_supported_formats: "Supported input: mp4, mov, webm, mkv, avi",
    video_choose_file: "Choose Video File",
    video_selected_none: "No video file selected",
    video_selected_file: "Selected: {{name}}",
    video_selected_count: "Selected: {{count}} files",
    video_meta_info: "{{duration}} sec · {{width}}x{{height}} · {{size}}",
    video_meta_info_basic: "Total size: {{size}}",
    video_output_format: "Output Format",
    video_bitrate: "Video Bitrate",
    video_preset: "Encoding Preset",
    video_fps: "FPS",
    video_keep_original: "Keep original",
    video_trim_start: "Trim Start (sec)",
    video_trim_end: "Trim End (sec)",
    video_resize_width: "Resize Width (px)",
    video_resize_height: "Resize Height (px)",
    video_keep_ratio: "Keep aspect ratio",
    video_mute: "Mute audio",
    video_process_btn: "Convert Videos",
    video_cancel_btn: "Cancel",
    video_thumb_btn: "Extract Thumbnail",
    video_clear_btn: "Clear",
    video_download_btn: "Download Converted",
    video_thumb_download_btn: "Download Thumbnail",
    video_status_ready: "Ready for video conversion.",
    video_status_no_file: "Select at least one video file first.",
    video_status_no_output: "Convert video first, then download.",
    video_status_loading: "Loading video files...",
    video_status_loaded: "Video loaded. Set options and click Convert Videos.",
    video_status_processing: "Processing video...",
    video_status_processing_file: "Processing {{index}} / {{total}}: {{name}}",
    video_status_cancel_requested: "Cancel requested. Finishing current file...",
    video_status_batch_done: "Batch complete: {{done}} succeeded, {{failed}} failed.",
    video_status_batch_canceled: "Batch canceled: {{done}} succeeded, {{failed}} failed.",
    video_status_thumbnail: "Extracting thumbnail...",
    video_status_done: "Video conversion complete.",
    video_status_thumb_done: "Thumbnail extracted.",
    video_status_invalid_trim: "Trim range is invalid. Check start/end values.",
    video_status_ffmpeg_loading: "Loading FFmpeg engine...",
    video_status_ffmpeg_ready: "FFmpeg loaded. Encoding video...",
    video_status_error: "Video processing failed: {{message}}",
    video_error_hint_memory: "Try shorter trim, lower resolution, or close other tabs.",
    video_error_hint_codec: "Input codec may not be supported. Try mp4/webm source.",
    video_error_hint_network: "FFmpeg failed to load. Check network and retry.",
    video_error_hint_default: "Try a smaller file or different output settings.",
    video_preview_original: "Original Preview",
    video_preview_output: "Output Preview",
    video_queue_title: "Queue",
    video_queue_empty: "No videos in queue.",
    video_queue_status_queued: "Queued",
    video_queue_status_processing: "Processing",
    video_queue_status_done: "Done",
    video_queue_status_failed: "Failed",
    video_queue_status_canceled: "Canceled",
    video_result_title: "Video Results",
    video_result_empty: "No processed videos yet.",
    video_thumbnail_title: "Thumbnail",
    video_progress_idle: "No video processing yet.",
    video_progress_text: "{{phase}} · {{percent}}%",
    video_phase_decode: "Analyze",
    video_phase_encode: "Encode",
    video_phase_thumb: "Thumbnail",
    video_phase_done: "Done",
    text_title: "Text Converter",
    text_subtitle: "Paste text and convert instantly in your browser.",
    text_tool_label: "Conversion Tool",
    text_input_label: "Input",
    text_output_label: "Output",
    text_input_placeholder: "Paste your text here",
    text_output_placeholder: "Converted result appears here",
    text_run_btn: "Convert Text",
    text_swap_btn: "Swap Input/Output",
    text_clear_btn: "Clear",
    text_copy_btn: "Copy Output",
    text_download_btn: "Download Output",
    text_status_ready: "Ready for text conversion.",
    text_status_empty: "Enter text first.",
    text_status_done: "Text conversion complete.",
    text_status_json_valid: "Valid JSON.",
    text_status_copied: "Output copied.",
    text_status_copy_failed: "Copy failed. Please copy manually.",
    text_status_downloaded: "Output downloaded.",
    text_status_error: "Conversion failed: {{message}}",
    text_tool_json_pretty: "JSON Pretty (readable)",
    text_tool_json_minify: "JSON Minify (compact)",
    text_tool_json_validate: "JSON Validate",
    text_tool_csv_to_tsv: "CSV -> TSV",
    text_tool_tsv_to_csv: "TSV -> CSV",
    text_tool_txt_to_md: "TXT -> Markdown",
    text_tool_md_to_txt: "Markdown -> TXT",
    text_tool_md_to_html: "Markdown -> HTML",
    text_tool_html_to_md: "HTML -> Markdown",
    text_tool_txt_to_html: "TXT -> HTML",
    text_tool_html_to_txt: "HTML -> TXT",
    about_title: "About LocalConvert",
    about_body: "LocalConvert is a free converter that runs entirely in your browser.",
    faq_title: "FAQ",
    faq_q1: "Are my files uploaded?",
    faq_a1: "No. Files are processed locally in your browser memory only.",
    faq_q2: "Why did conversion fail?",
    faq_a2: "Large images may exceed memory limits. Try fewer files or smaller dimensions.",
    privacy_title: "Privacy Policy",
    privacy_body1: "We do not upload your file data to our server.",
    privacy_body2: "Analytics and ad scripts may load, but file content and file names are not sent.",
    terms_title: "Terms of Use",
    terms_body: "This service is provided as-is. You are responsible for validating output before production use.",
    contact_title: "Contact",
    contact_body: "Questions or feedback:",
    footer_about: "About",
    footer_faq: "FAQ",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_contact: "Contact",
    auto_placeholder: "Auto",
  },
  es: {
    tabs_image: "Imagen",
    tabs_text: "Texto",
    tabs_audio: "Audio",
    tabs_video: "Video",
    hero_title: "Convertidor de imagenes gratis e ilimitado.",
    hero_desc: "Uso gratis y sin limite de cantidad. Tus archivos se quedan en tu dispositivo.",
    trust_free: "100% gratis",
    trust_unlimited: "Conversiones ilimitadas",
    trust_no_upload: "Sin subida de archivos",
    trust_local: "Funciona en tu navegador",
    trust_network: "No se envian datos del archivo a internet",
    trust_privacy: "Se elimina la informacion oculta de la foto",
    converter_title: "Convertidor de Imagenes",
    converter_subtitle: "Arrastra archivos o elige imagenes desde tu dispositivo.",
    drop_hint: "Suelta archivos PNG/JPG/WebP/GIF aqui",
    choose_files: "Elegir archivos",
    selected_none: "No hay archivos seleccionados",
    selected_count: "{{count}} archivo(s) seleccionado(s)",
    opt_format: "Formato de salida",
    opt_quality_dynamic: "Calidad ({{value}})",
    opt_width: "Ancho (px)",
    opt_height: "Alto (px)",
    opt_keep_ratio: "Mantener proporcion",
    opt_remove_exif: "Eliminar informacion oculta de la foto (siempre activo)",
    convert_btn: "Convertir",
    clear_btn: "Limpiar",
    download_all_btn: "Descargar todo",
    zip_note: "La descarga ZIP estara disponible pronto.",
    status_idle: "Listo",
    status_no_files: "Selecciona al menos una imagen.",
    status_converting: "Convirtiendo {{count}} archivo(s)...",
    status_progress: "Convertido {{done}} / {{total}}",
    status_done: "Conversion completa. Descarga abajo.",
    status_warn_unsupported: "Se omitieron archivos no compatibles: {{names}}",
    status_download_all: "Descargando todos los archivos uno por uno.",
    result_title: "Resultados",
    result_empty: "Aun no hay archivos convertidos.",
    result_failed: "Error",
    result_size: "{{from}} -> {{to}}",
    download_btn: "Descargar",
    text_title: "Convertidor de Texto",
    text_subtitle: "Pega texto y convierte al instante en tu navegador.",
    text_tool_label: "Herramienta",
    text_input_label: "Entrada",
    text_output_label: "Salida",
    text_input_placeholder: "Pega tu texto aqui",
    text_output_placeholder: "El resultado aparece aqui",
    text_run_btn: "Convertir texto",
    text_swap_btn: "Intercambiar entrada/salida",
    text_clear_btn: "Limpiar",
    text_copy_btn: "Copiar salida",
    text_download_btn: "Descargar salida",
    text_status_ready: "Listo para convertir texto.",
    text_status_empty: "Primero ingresa texto.",
    text_status_done: "Conversion de texto completa.",
    text_status_json_valid: "JSON valido.",
    text_status_copied: "Salida copiada.",
    text_status_copy_failed: "No se pudo copiar. Copia manualmente.",
    text_status_downloaded: "Salida descargada.",
    text_status_error: "Fallo de conversion: {{message}}",
    text_tool_json_pretty: "JSON legible",
    text_tool_json_minify: "JSON compacto",
    text_tool_json_validate: "Validar JSON",
    text_tool_csv_to_tsv: "CSV -> TSV",
    text_tool_tsv_to_csv: "TSV -> CSV",
    text_tool_txt_to_md: "TXT -> Markdown",
    text_tool_md_to_txt: "Markdown -> TXT",
    text_tool_md_to_html: "Markdown -> HTML",
    text_tool_html_to_md: "HTML -> Markdown",
    text_tool_txt_to_html: "TXT -> HTML",
    text_tool_html_to_txt: "HTML -> TXT",
    about_title: "Sobre LocalConvert",
    about_body: "LocalConvert es un convertidor gratis que funciona en tu navegador.",
    faq_title: "Preguntas frecuentes",
    faq_q1: "Se suben mis archivos?",
    faq_a1: "No. Los archivos se procesan solo en la memoria del navegador.",
    faq_q2: "Por que falla la conversion?",
    faq_a2: "Imagenes grandes pueden superar memoria. Prueba menos archivos o dimensiones menores.",
    privacy_title: "Politica de privacidad",
    privacy_body1: "No subimos tus datos de archivo a nuestro servidor.",
    privacy_body2: "Se pueden cargar scripts de analitica y anuncios, pero no enviamos contenido ni nombres de archivos.",
    terms_title: "Terminos de uso",
    terms_body: "El servicio se ofrece tal cual. Debes validar el resultado antes de uso en produccion.",
    contact_title: "Contacto",
    contact_body: "Preguntas o comentarios:",
    footer_about: "Sobre",
    footer_faq: "FAQ",
    footer_privacy: "Privacidad",
    footer_terms: "Terminos",
    footer_contact: "Contacto",
    auto_placeholder: "Auto",
  },
  zh: {
    tabs_image: "图片",
    tabs_text: "文本",
    tabs_audio: "音频",
    tabs_video: "视频",
    hero_title: "免费且不限次数的图片转换。",
    hero_desc: "完全免费，无次数限制，文件始终留在你的设备里。",
    trust_free: "100% 免费",
    trust_unlimited: "不限次数转换",
    trust_no_upload: "不上传文件",
    trust_local: "在浏览器里直接处理",
    trust_network: "文件数据不会发到互联网",
    trust_privacy: "默认删除照片中的隐藏信息",
    converter_title: "图片转换器",
    converter_subtitle: "拖拽文件或从设备中选择图片。",
    drop_hint: "将 PNG/JPG/WebP/GIF 文件拖到这里",
    choose_files: "选择文件",
    selected_none: "未选择文件",
    selected_count: "已选择 {{count}} 个文件",
    opt_format: "输出格式",
    opt_quality_dynamic: "质量 ({{value}})",
    opt_width: "宽度 (px)",
    opt_height: "高度 (px)",
    opt_keep_ratio: "保持比例",
    opt_remove_exif: "删除照片隐藏信息 (始终开启)",
    convert_btn: "开始转换",
    clear_btn: "清空",
    download_all_btn: "全部下载",
    zip_note: "ZIP 打包下载即将上线。",
    status_idle: "就绪",
    status_no_files: "请至少选择一张图片。",
    status_converting: "正在转换 {{count}} 个文件...",
    status_progress: "已转换 {{done}} / {{total}}",
    status_done: "转换完成，可在下方下载。",
    status_warn_unsupported: "已跳过不支持的文件: {{names}}",
    status_download_all: "正在逐个下载所有已转换文件。",
    result_title: "转换结果",
    result_empty: "还没有转换结果。",
    result_failed: "失败",
    result_size: "{{from}} -> {{to}}",
    download_btn: "下载",
    text_title: "文本转换器",
    text_subtitle: "粘贴文本并在浏览器中立即转换。",
    text_tool_label: "转换工具",
    text_input_label: "输入",
    text_output_label: "输出",
    text_input_placeholder: "在这里粘贴文本",
    text_output_placeholder: "转换结果显示在这里",
    text_run_btn: "转换文本",
    text_swap_btn: "交换输入/输出",
    text_clear_btn: "清空",
    text_copy_btn: "复制输出",
    text_download_btn: "下载输出",
    text_status_ready: "已准备好文本转换。",
    text_status_empty: "请先输入文本。",
    text_status_done: "文本转换完成。",
    text_status_json_valid: "JSON 有效。",
    text_status_copied: "已复制输出。",
    text_status_copy_failed: "复制失败，请手动复制。",
    text_status_downloaded: "已下载输出。",
    text_status_error: "转换失败: {{message}}",
    text_tool_json_pretty: "JSON 美化",
    text_tool_json_minify: "JSON 压缩",
    text_tool_json_validate: "JSON 校验",
    text_tool_csv_to_tsv: "CSV -> TSV",
    text_tool_tsv_to_csv: "TSV -> CSV",
    text_tool_txt_to_md: "TXT -> Markdown",
    text_tool_md_to_txt: "Markdown -> TXT",
    text_tool_md_to_html: "Markdown -> HTML",
    text_tool_html_to_md: "HTML -> Markdown",
    text_tool_txt_to_html: "TXT -> HTML",
    text_tool_html_to_txt: "HTML -> TXT",
    about_title: "关于 LocalConvert",
    about_body: "LocalConvert 是一个免费、在浏览器内运行的转换工具。",
    faq_title: "常见问题",
    faq_q1: "文件会被上传吗?",
    faq_a1: "不会。文件仅在浏览器内存中处理。",
    faq_q2: "为什么转换失败?",
    faq_a2: "大图可能超出内存限制。请减少数量或缩小尺寸。",
    privacy_title: "隐私政策",
    privacy_body1: "我们不会将你的文件数据上传到服务器。",
    privacy_body2: "可能加载统计或广告脚本，但不会发送文件内容或文件名。",
    terms_title: "使用条款",
    terms_body: "本服务按现状提供。正式使用前请自行校验输出结果。",
    contact_title: "联系我们",
    contact_body: "问题或反馈:",
    footer_about: "关于",
    footer_faq: "FAQ",
    footer_privacy: "隐私",
    footer_terms: "条款",
    footer_contact: "联系",
    auto_placeholder: "自动",
  },
  ko: {
    tabs_image: "이미지",
    tabs_text: "텍스트",
    tabs_audio: "오디오",
    tabs_video: "비디오",
    hero_title: "무료 무제한 이미지 변환.",
    hero_desc: "완전 무료, 횟수 제한 없음. 파일은 내 기기에만 남습니다.",
    trust_free: "100% 무료",
    trust_unlimited: "무제한 변환",
    trust_no_upload: "파일 업로드 없음",
    trust_local: "브라우저에서 바로 실행",
    trust_network: "파일 데이터는 인터넷 전송 없음",
    trust_privacy: "사진 숨은 정보는 기본 삭제",
    converter_title: "이미지 변환기",
    converter_subtitle: "파일을 드래그하거나 기기에서 이미지를 선택하세요.",
    drop_hint: "PNG/JPG/WebP/GIF 파일을 여기에 놓으세요",
    choose_files: "파일 선택",
    selected_none: "선택된 파일 없음",
    selected_count: "{{count}}개 파일 선택됨",
    opt_format: "출력 포맷",
    opt_quality_dynamic: "품질 ({{value}})",
    opt_width: "가로 (px)",
    opt_height: "세로 (px)",
    opt_keep_ratio: "비율 유지",
    opt_remove_exif: "사진 숨은 정보 삭제 (항상 켜짐)",
    convert_btn: "변환 시작",
    clear_btn: "초기화",
    download_all_btn: "전체 다운로드",
    zip_note: "ZIP 묶음 다운로드는 곧 제공됩니다.",
    status_idle: "준비됨",
    status_no_files: "최소 1개 이미지를 선택해 주세요.",
    status_converting: "{{count}}개 파일 변환 중...",
    status_progress: "{{done}} / {{total}} 변환 완료",
    status_done: "변환 완료. 아래에서 다운로드하세요.",
    status_warn_unsupported: "지원하지 않는 파일 건너뜀: {{names}}",
    status_download_all: "변환 파일을 순차 다운로드합니다.",
    result_title: "결과",
    result_empty: "아직 변환된 파일이 없습니다.",
    result_failed: "실패",
    result_size: "{{from}} -> {{to}}",
    download_btn: "다운로드",
    text_title: "텍스트 변환기",
    text_subtitle: "텍스트를 붙여 넣고 브라우저에서 바로 변환하세요.",
    text_tool_label: "변환 도구",
    text_input_label: "입력",
    text_output_label: "출력",
    text_input_placeholder: "여기에 텍스트를 붙여 넣으세요",
    text_output_placeholder: "변환 결과가 여기에 표시됩니다",
    text_run_btn: "텍스트 변환",
    text_swap_btn: "입력/출력 바꾸기",
    text_clear_btn: "지우기",
    text_copy_btn: "출력 복사",
    text_download_btn: "출력 다운로드",
    text_status_ready: "텍스트 변환 준비 완료.",
    text_status_empty: "먼저 텍스트를 입력해 주세요.",
    text_status_done: "텍스트 변환이 완료되었습니다.",
    text_status_json_valid: "올바른 JSON입니다.",
    text_status_copied: "출력을 복사했습니다.",
    text_status_copy_failed: "복사에 실패했습니다. 직접 복사해 주세요.",
    text_status_downloaded: "출력을 다운로드했습니다.",
    text_status_error: "변환 실패: {{message}}",
    text_tool_json_pretty: "JSON 보기 좋게",
    text_tool_json_minify: "JSON 압축",
    text_tool_json_validate: "JSON 유효성 검사",
    text_tool_csv_to_tsv: "CSV -> TSV",
    text_tool_tsv_to_csv: "TSV -> CSV",
    text_tool_txt_to_md: "TXT -> Markdown",
    text_tool_md_to_txt: "Markdown -> TXT",
    text_tool_md_to_html: "Markdown -> HTML",
    text_tool_html_to_md: "HTML -> Markdown",
    text_tool_txt_to_html: "TXT -> HTML",
    text_tool_html_to_txt: "HTML -> TXT",
    about_title: "LocalConvert 소개",
    about_body: "LocalConvert는 브라우저에서 바로 쓰는 무료 변환 서비스입니다.",
    faq_title: "자주 묻는 질문",
    faq_q1: "파일이 업로드되나요?",
    faq_a1: "아니요. 파일은 브라우저 메모리에서만 처리됩니다.",
    faq_q2: "왜 변환이 실패하나요?",
    faq_a2: "큰 이미지는 메모리 한계를 넘을 수 있습니다. 파일 수를 줄이거나 크기를 낮춰보세요.",
    privacy_title: "개인정보처리방침",
    privacy_body1: "파일 데이터는 서버로 업로드되지 않습니다.",
    privacy_body2: "통계/광고 스크립트가 열릴 수 있지만, 파일 내용과 파일명은 보내지 않습니다.",
    terms_title: "이용약관",
    terms_body: "본 서비스는 현 상태로 제공됩니다. 실제 업무 사용 전 결과를 검증해 주세요.",
    contact_title: "문의",
    contact_body: "문의 또는 피드백:",
    footer_about: "소개",
    footer_faq: "FAQ",
    footer_privacy: "개인정보",
    footer_terms: "약관",
    footer_contact: "문의",
    auto_placeholder: "자동",
  },
  ja: {
    tabs_image: "画像",
    tabs_text: "テキスト",
    tabs_audio: "音声",
    tabs_video: "動画",
    hero_title: "無料・回数無制限の画像変換。",
    hero_desc: "完全無料、回数制限なし。ファイルは端末内にのみ残ります。",
    trust_free: "100% 無料",
    trust_unlimited: "回数無制限で変換",
    trust_no_upload: "ファイルをアップロードしない",
    trust_local: "ブラウザでそのまま動く",
    trust_network: "ファイルデータをネットへ送らない",
    trust_privacy: "写真の隠し情報は既定で削除",
    converter_title: "画像コンバーター",
    converter_subtitle: "ファイルをドラッグするか端末から選択してください。",
    drop_hint: "PNG/JPG/WebP/GIF をここにドロップ",
    choose_files: "ファイルを選択",
    selected_none: "ファイル未選択",
    selected_count: "{{count}} 件のファイルを選択",
    opt_format: "出力形式",
    opt_quality_dynamic: "品質 ({{value}})",
    opt_width: "幅 (px)",
    opt_height: "高さ (px)",
    opt_keep_ratio: "縦横比を維持",
    opt_remove_exif: "写真の隠し情報を削除 (常時オン)",
    convert_btn: "変換",
    clear_btn: "クリア",
    download_all_btn: "すべてダウンロード",
    zip_note: "ZIP まとめダウンロードは近日対応。",
    status_idle: "準備完了",
    status_no_files: "画像を1つ以上選択してください。",
    status_converting: "{{count}} 件を変換中...",
    status_progress: "{{done}} / {{total}} 変換完了",
    status_done: "変換が完了しました。下からダウンロードしてください。",
    status_warn_unsupported: "未対応ファイルをスキップしました: {{names}}",
    status_download_all: "変換済みファイルを順番にダウンロードしています。",
    result_title: "結果",
    result_empty: "まだ変換結果がありません。",
    result_failed: "失敗",
    result_size: "{{from}} -> {{to}}",
    download_btn: "ダウンロード",
    text_title: "テキスト変換",
    text_subtitle: "テキストを貼り付けてブラウザですぐ変換できます。",
    text_tool_label: "変換ツール",
    text_input_label: "入力",
    text_output_label: "出力",
    text_input_placeholder: "ここにテキストを貼り付け",
    text_output_placeholder: "変換結果がここに表示されます",
    text_run_btn: "テキスト変換",
    text_swap_btn: "入力/出力を入れ替え",
    text_clear_btn: "クリア",
    text_copy_btn: "出力をコピー",
    text_download_btn: "出力をダウンロード",
    text_status_ready: "テキスト変換の準備ができました。",
    text_status_empty: "先にテキストを入力してください。",
    text_status_done: "テキスト変換が完了しました。",
    text_status_json_valid: "有効な JSON です。",
    text_status_copied: "出力をコピーしました。",
    text_status_copy_failed: "コピーに失敗しました。手動でコピーしてください。",
    text_status_downloaded: "出力をダウンロードしました。",
    text_status_error: "変換に失敗しました: {{message}}",
    text_tool_json_pretty: "JSON 整形",
    text_tool_json_minify: "JSON 圧縮",
    text_tool_json_validate: "JSON 検証",
    text_tool_csv_to_tsv: "CSV -> TSV",
    text_tool_tsv_to_csv: "TSV -> CSV",
    text_tool_txt_to_md: "TXT -> Markdown",
    text_tool_md_to_txt: "Markdown -> TXT",
    text_tool_md_to_html: "Markdown -> HTML",
    text_tool_html_to_md: "HTML -> Markdown",
    text_tool_txt_to_html: "TXT -> HTML",
    text_tool_html_to_txt: "HTML -> TXT",
    about_title: "LocalConvert について",
    about_body: "LocalConvert はブラウザで使える無料の変換サービスです。",
    faq_title: "FAQ",
    faq_q1: "ファイルはアップロードされますか?",
    faq_a1: "いいえ。ファイルはブラウザメモリ内でのみ処理されます。",
    faq_q2: "なぜ変換に失敗しますか?",
    faq_a2: "大きい画像はメモリ制限を超える場合があります。件数やサイズを下げてください。",
    privacy_title: "プライバシーポリシー",
    privacy_body1: "ファイルデータをサーバーにアップロードしません。",
    privacy_body2: "計測・広告スクリプトが読み込まれる場合がありますが、ファイル内容とファイル名は送信しません。",
    terms_title: "利用規約",
    terms_body: "本サービスは現状のまま提供されます。本番利用前に結果を確認してください。",
    contact_title: "お問い合わせ",
    contact_body: "質問・フィードバック:",
    footer_about: "概要",
    footer_faq: "FAQ",
    footer_privacy: "プライバシー",
    footer_terms: "利用規約",
    footer_contact: "お問い合わせ",
    auto_placeholder: "自動",
  },
};

const state = {
  lang: "en",
  activeTab: "image",
  files: [],
  results: [],
  audio: {
    files: [],
    firstMeta: null,
    originalUrl: "",
    outputBlob: null,
    outputUrl: "",
    outputExt: "wav",
    results: [],
    progress: { percent: 0, phaseKey: "audio_phase_done" },
  },
  audioStatus: { key: "audio_status_ready", params: {}, isWarn: false },
  video: {
    files: [],
    firstMeta: null,
    originalUrl: "",
    outputBlob: null,
    outputUrl: "",
    outputExt: "mp4",
    thumbnailBlob: null,
    thumbnailUrl: "",
    queue: [],
    results: [],
    cancelRequested: false,
    processing: false,
    progress: { percent: 0, phaseKey: "video_phase_done" },
  },
  videoStatus: { key: "video_status_ready", params: {}, isWarn: false },
  textStatus: { key: "text_status_ready", params: {}, isWarn: false },
};

const supportedTypes = new Set(["image/png", "image/jpeg", "image/webp", "image/gif"]);
const supportedAudioExtensions = new Set(["mp3", "wav", "ogg", "m4a", "aac", "webm"]);
const supportedVideoExtensions = new Set(["mp4", "mov", "m4v", "webm", "mkv", "avi"]);
let sharedAudioContext = null;
let ffmpegInstance = null;
let ffmpegLoadPromise = null;

const dom = {
  languageButton: document.getElementById("languageButton"),
  languageFlag: document.getElementById("languageFlag"),
  languageLabel: document.getElementById("languageLabel"),
  languageMenu: document.getElementById("languageMenu"),
  tabs: Array.from(document.querySelectorAll(".tab[data-tab]")),
  imageSection: document.getElementById("imageSection"),
  textSection: document.getElementById("textSection"),
  audioSection: document.getElementById("audioSection"),
  videoSection: document.getElementById("videoSection"),
  dropZone: document.getElementById("dropZone"),
  fileInput: document.getElementById("fileInput"),
  selectFilesBtn: document.getElementById("selectFilesBtn"),
  selectedSummary: document.getElementById("selectedSummary"),
  formatSelect: document.getElementById("formatSelect"),
  qualityInput: document.getElementById("qualityInput"),
  qualityLabel: document.getElementById("qualityLabel"),
  widthInput: document.getElementById("widthInput"),
  heightInput: document.getElementById("heightInput"),
  keepRatioInput: document.getElementById("keepRatioInput"),
  convertBtn: document.getElementById("convertBtn"),
  clearBtn: document.getElementById("clearBtn"),
  downloadAllBtn: document.getElementById("downloadAllBtn"),
  statusText: document.getElementById("statusText"),
  resultList: document.getElementById("resultList"),
  textToolSelect: document.getElementById("textToolSelect"),
  textInput: document.getElementById("textInput"),
  textOutput: document.getElementById("textOutput"),
  textConvertBtn: document.getElementById("textConvertBtn"),
  textSwapBtn: document.getElementById("textSwapBtn"),
  textClearBtn: document.getElementById("textClearBtn"),
  textCopyBtn: document.getElementById("textCopyBtn"),
  textDownloadBtn: document.getElementById("textDownloadBtn"),
  textStatus: document.getElementById("textStatus"),
  audioDropZone: document.getElementById("audioDropZone"),
  audioInput: document.getElementById("audioInput"),
  audioSelectBtn: document.getElementById("audioSelectBtn"),
  audioSelectedSummary: document.getElementById("audioSelectedSummary"),
  audioMetaInfo: document.getElementById("audioMetaInfo"),
  audioOutputFormatSelect: document.getElementById("audioOutputFormatSelect"),
  audioBitrateSelect: document.getElementById("audioBitrateSelect"),
  audioRateModeSelect: document.getElementById("audioRateModeSelect"),
  audioVbrQualitySelect: document.getElementById("audioVbrQualitySelect"),
  audioAacProfileSelect: document.getElementById("audioAacProfileSelect"),
  audioSampleRateSelect: document.getElementById("audioSampleRateSelect"),
  audioChannelSelect: document.getElementById("audioChannelSelect"),
  audioStartInput: document.getElementById("audioStartInput"),
  audioEndInput: document.getElementById("audioEndInput"),
  audioVolumeInput: document.getElementById("audioVolumeInput"),
  audioVolumeLabel: document.getElementById("audioVolumeLabel"),
  audioFadeInInput: document.getElementById("audioFadeInInput"),
  audioFadeOutInput: document.getElementById("audioFadeOutInput"),
  audioNormalizeInput: document.getElementById("audioNormalizeInput"),
  audioProcessBtn: document.getElementById("audioProcessBtn"),
  audioClearBtn: document.getElementById("audioClearBtn"),
  audioDownloadBtn: document.getElementById("audioDownloadBtn"),
  audioStatus: document.getElementById("audioStatus"),
  audioProgressBar: document.getElementById("audioProgressBar"),
  audioProgressText: document.getElementById("audioProgressText"),
  audioOriginalPreview: document.getElementById("audioOriginalPreview"),
  audioOutputPreview: document.getElementById("audioOutputPreview"),
  audioResultList: document.getElementById("audioResultList"),
  videoDropZone: document.getElementById("videoDropZone"),
  videoInput: document.getElementById("videoInput"),
  videoSelectBtn: document.getElementById("videoSelectBtn"),
  videoSelectedSummary: document.getElementById("videoSelectedSummary"),
  videoMetaInfo: document.getElementById("videoMetaInfo"),
  videoOutputFormatSelect: document.getElementById("videoOutputFormatSelect"),
  videoBitrateSelect: document.getElementById("videoBitrateSelect"),
  videoPresetSelect: document.getElementById("videoPresetSelect"),
  videoFpsSelect: document.getElementById("videoFpsSelect"),
  videoStartInput: document.getElementById("videoStartInput"),
  videoEndInput: document.getElementById("videoEndInput"),
  videoWidthInput: document.getElementById("videoWidthInput"),
  videoHeightInput: document.getElementById("videoHeightInput"),
  videoKeepRatioInput: document.getElementById("videoKeepRatioInput"),
  videoMuteInput: document.getElementById("videoMuteInput"),
  videoProcessBtn: document.getElementById("videoProcessBtn"),
  videoCancelBtn: document.getElementById("videoCancelBtn"),
  videoThumbBtn: document.getElementById("videoThumbBtn"),
  videoClearBtn: document.getElementById("videoClearBtn"),
  videoDownloadBtn: document.getElementById("videoDownloadBtn"),
  videoThumbDownloadBtn: document.getElementById("videoThumbDownloadBtn"),
  videoStatus: document.getElementById("videoStatus"),
  videoProgressBar: document.getElementById("videoProgressBar"),
  videoProgressText: document.getElementById("videoProgressText"),
  videoOriginalPreview: document.getElementById("videoOriginalPreview"),
  videoOutputPreview: document.getElementById("videoOutputPreview"),
  videoThumbnailPreview: document.getElementById("videoThumbnailPreview"),
  videoQueueList: document.getElementById("videoQueueList"),
  videoResultList: document.getElementById("videoResultList"),
};

init();

function init() {
  buildLanguageMenu();
  buildTextToolOptions();
  setLanguage(detectLanguage(), false);
  bindEvents();
  setActiveTab("image");
  renderResults();
  updateSelectedSummary();
  syncQualityLabel();
  syncAudioVolumeLabel();
  syncAudioOutputControls();
  updateAudioSelectedSummary();
  renderAudioResults();
  renderAudioProgress();
  setAudioStatus("audio_status_ready");
  updateVideoSelectedSummary();
  renderVideoQueue();
  renderVideoResults();
  renderVideoProgress();
  setVideoStatus("video_status_ready");
  setTextStatus("text_status_ready");
}

function detectLanguage() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved && COPY[saved]) {
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

function buildLanguageMenu() {
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

  dom.languageMenu.innerHTML = "";
  dom.languageMenu.appendChild(fragment);
}

function buildTextToolOptions() {
  const selected = dom.textToolSelect.value || TEXT_TOOLS[0].id;
  dom.textToolSelect.innerHTML = "";

  TEXT_TOOLS.forEach((tool) => {
    const option = document.createElement("option");
    option.value = tool.id;
    option.textContent = translate(tool.labelKey);
    dom.textToolSelect.appendChild(option);
  });

  dom.textToolSelect.value = TEXT_TOOLS.some((tool) => tool.id === selected) ? selected : TEXT_TOOLS[0].id;
}

function bindEvents() {
  dom.languageButton.addEventListener("click", () => {
    const expanded = dom.languageButton.getAttribute("aria-expanded") === "true";
    dom.languageButton.setAttribute("aria-expanded", String(!expanded));
    dom.languageMenu.hidden = expanded;
  });

  dom.languageMenu.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-lang]");
    if (!button) return;
    setLanguage(button.dataset.lang, true);
    dom.languageButton.setAttribute("aria-expanded", "false");
    dom.languageMenu.hidden = true;
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-picker")) {
      dom.languageButton.setAttribute("aria-expanded", "false");
      dom.languageMenu.hidden = true;
    }
  });

  dom.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.disabled) return;
      setActiveTab(tab.dataset.tab);
    });
  });

  dom.selectFilesBtn.addEventListener("click", () => dom.fileInput.click());
  dom.fileInput.addEventListener("change", (event) => addFiles(event.target.files));

  dom.dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dom.dropZone.classList.add("is-dragover");
  });

  dom.dropZone.addEventListener("dragleave", () => {
    dom.dropZone.classList.remove("is-dragover");
  });

  dom.dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dom.dropZone.classList.remove("is-dragover");
    addFiles(event.dataTransfer?.files || []);
  });

  dom.dropZone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      dom.fileInput.click();
    }
  });

  dom.dropZone.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    dom.fileInput.click();
  });

  dom.audioSelectBtn.addEventListener("click", () => dom.audioInput.click());
  dom.audioInput.addEventListener("change", (event) => addAudioFiles(event.target.files));

  dom.audioDropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dom.audioDropZone.classList.add("is-dragover");
  });

  dom.audioDropZone.addEventListener("dragleave", () => {
    dom.audioDropZone.classList.remove("is-dragover");
  });

  dom.audioDropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dom.audioDropZone.classList.remove("is-dragover");
    addAudioFiles(event.dataTransfer?.files);
  });

  dom.audioDropZone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      dom.audioInput.click();
    }
  });

  dom.audioDropZone.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    dom.audioInput.click();
  });

  dom.videoSelectBtn.addEventListener("click", () => dom.videoInput.click());
  dom.videoInput.addEventListener("change", (event) => addVideoFiles(event.target.files));

  dom.videoDropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dom.videoDropZone.classList.add("is-dragover");
  });

  dom.videoDropZone.addEventListener("dragleave", () => {
    dom.videoDropZone.classList.remove("is-dragover");
  });

  dom.videoDropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dom.videoDropZone.classList.remove("is-dragover");
    addVideoFiles(event.dataTransfer?.files);
  });

  dom.videoDropZone.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      dom.videoInput.click();
    }
  });

  dom.videoDropZone.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    dom.videoInput.click();
  });

  dom.qualityInput.addEventListener("input", syncQualityLabel);
  dom.audioVolumeInput.addEventListener("input", syncAudioVolumeLabel);
  dom.audioOutputFormatSelect.addEventListener("change", syncAudioOutputControls);
  dom.audioRateModeSelect.addEventListener("change", syncAudioOutputControls);
  dom.convertBtn.addEventListener("click", convertAll);
  dom.clearBtn.addEventListener("click", clearAll);
  dom.downloadAllBtn.addEventListener("click", downloadAll);
  dom.audioProcessBtn.addEventListener("click", processAudio);
  dom.audioClearBtn.addEventListener("click", clearAudioState);
  dom.audioDownloadBtn.addEventListener("click", downloadProcessedAudio);
  dom.videoProcessBtn.addEventListener("click", processVideo);
  dom.videoCancelBtn.addEventListener("click", cancelVideoProcessing);
  dom.videoThumbBtn.addEventListener("click", extractVideoThumbnail);
  dom.videoClearBtn.addEventListener("click", clearVideoState);
  dom.videoDownloadBtn.addEventListener("click", downloadProcessedVideo);
  dom.videoThumbDownloadBtn.addEventListener("click", downloadVideoThumbnail);

  dom.textConvertBtn.addEventListener("click", convertText);
  dom.textSwapBtn.addEventListener("click", swapTextInputOutput);
  dom.textClearBtn.addEventListener("click", clearTextFields);
  dom.textCopyBtn.addEventListener("click", copyTextOutput);
  dom.textDownloadBtn.addEventListener("click", downloadTextOutput);
}

function setActiveTab(tabName) {
  if (tabName === "text") {
    state.activeTab = "text";
  } else if (tabName === "audio") {
    state.activeTab = "audio";
  } else if (tabName === "video") {
    state.activeTab = "video";
  } else {
    state.activeTab = "image";
  }

  dom.tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === state.activeTab);
  });

  dom.imageSection.classList.toggle("is-hidden", state.activeTab !== "image");
  dom.textSection.classList.toggle("is-hidden", state.activeTab !== "text");
  dom.audioSection.classList.toggle("is-hidden", state.activeTab !== "audio");
  dom.videoSection.classList.toggle("is-hidden", state.activeTab !== "video");
}

function setLanguage(langCode, persist) {
  const next = COPY[langCode] ? langCode : "en";
  state.lang = next;
  if (persist) {
    localStorage.setItem(LANG_STORAGE_KEY, next);
  }

  const lang = LANGUAGES.find((item) => item.code === next);
  if (lang) {
    dom.languageFlag.textContent = lang.flag;
    dom.languageLabel.textContent = lang.short;
  }

  document.documentElement.lang = next;
  applyCopy();
}

function applyCopy() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translate(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = translate(node.dataset.i18nPlaceholder);
  });

  dom.widthInput.placeholder = translate("auto_placeholder");
  dom.heightInput.placeholder = translate("auto_placeholder");
  dom.videoWidthInput.placeholder = translate("auto_placeholder");
  dom.videoHeightInput.placeholder = translate("auto_placeholder");
  syncQualityLabel();
  syncAudioVolumeLabel();
  syncAudioOutputControls();
  updateSelectedSummary();
  updateAudioSelectedSummary();
  updateVideoSelectedSummary();
  renderVideoQueue();
  renderVideoResults();
  buildTextToolOptions();
  renderResults();
  renderAudioResults();
  renderAudioProgress();
  renderAudioStatus();
  renderVideoProgress();
  renderVideoStatus();
  renderTextStatus();
}

function translate(key, params = {}) {
  const copy = COPY[state.lang] || COPY.en;
  const fallback = COPY.en[key] || key;
  let text = copy[key] || fallback;
  Object.entries(params).forEach(([token, value]) => {
    text = text.replace(`{{${token}}}`, String(value));
  });
  return text;
}

function syncQualityLabel() {
  dom.qualityLabel.textContent = translate("opt_quality_dynamic", {
    value: dom.qualityInput.value,
  });
}

function syncAudioVolumeLabel() {
  dom.audioVolumeLabel.textContent = translate("audio_volume_dynamic", {
    value: dom.audioVolumeInput.value,
  });
}

function syncAudioOutputControls() {
  const format = dom.audioOutputFormatSelect.value;
  const isMp3 = format === "mp3";
  const isM4a = format === "m4a";
  const compressed = isMp3 || isM4a;
  const isVbr = dom.audioRateModeSelect.value === "vbr";

  dom.audioBitrateSelect.disabled = !compressed || (isMp3 && isVbr);
  dom.audioRateModeSelect.disabled = !compressed;
  dom.audioVbrQualitySelect.disabled = !(isMp3 && isVbr);
  dom.audioAacProfileSelect.disabled = !isM4a;
}

function setVideoStatus(key, params = {}, isWarn = false) {
  state.videoStatus = { key, params, isWarn };
  renderVideoStatus();
}

function renderVideoStatus() {
  dom.videoStatus.textContent = translate(state.videoStatus.key, state.videoStatus.params);
  dom.videoStatus.style.color = state.videoStatus.isWarn ? "#b54708" : "";
}

function setVideoProgress(percent, phaseKey = "video_phase_done") {
  state.video.progress = {
    percent: clamp(percent, 0, 100),
    phaseKey,
  };
  renderVideoProgress();
}

function renderVideoProgress() {
  const percent = Math.round(state.video.progress.percent || 0);
  dom.videoProgressBar.value = percent;
  if (percent <= 0) {
    dom.videoProgressText.textContent = translate("video_progress_idle");
  } else {
    dom.videoProgressText.textContent = translate("video_progress_text", {
      phase: translate(state.video.progress.phaseKey || "video_phase_done"),
      percent,
    });
  }
}

function addFiles(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return;

  const valid = [];
  const invalidNames = [];

  files.forEach((file) => {
    if (supportedTypes.has(file.type)) {
      valid.push(file);
    } else {
      invalidNames.push(file.name);
    }
  });

  if (valid.length) {
    const merged = [...state.files, ...valid];
    const unique = new Map();
    merged.forEach((file) => {
      const key = `${file.name}-${file.size}-${file.lastModified}`;
      unique.set(key, file);
    });
    state.files = Array.from(unique.values());
  }

  if (invalidNames.length) {
    setStatus(
      translate("status_warn_unsupported", {
        names: invalidNames.slice(0, 3).join(", "),
      }),
      true,
    );
  }

  updateSelectedSummary();
}

function updateSelectedSummary() {
  if (!state.files.length) {
    dom.selectedSummary.textContent = translate("selected_none");
    return;
  }

  dom.selectedSummary.textContent = translate("selected_count", {
    count: state.files.length,
  });
}

async function convertAll() {
  if (!state.files.length) {
    setStatus(translate("status_no_files"), true);
    return;
  }

  state.results = [];
  renderResults();
  dom.downloadAllBtn.disabled = true;

  const options = {
    format: dom.formatSelect.value,
    quality: Number(dom.qualityInput.value) / 100,
    width: normalizeDimension(dom.widthInput.value),
    height: normalizeDimension(dom.heightInput.value),
    keepRatio: dom.keepRatioInput.checked,
  };

  setStatus(translate("status_converting", { count: state.files.length }));

  for (let index = 0; index < state.files.length; index += 1) {
    const file = state.files[index];
    try {
      const converted = await convertFile(file, options);
      state.results.push(converted);
      setStatus(translate("status_progress", { done: index + 1, total: state.files.length }));
    } catch (error) {
      state.results.push({
        name: file.name,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  renderResults();
  dom.downloadAllBtn.disabled = !state.results.some((item) => item.blob);
  setStatus(translate("status_done"));
}

function normalizeDimension(rawValue) {
  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed) || parsed <= 0) return null;
  return Math.floor(parsed);
}

async function convertFile(file, options) {
  const bitmap = await createImageBitmap(file);
  const size = resolveSize(bitmap.width, bitmap.height, options.width, options.height, options.keepRatio);

  const canvas = document.createElement("canvas");
  canvas.width = size.width;
  canvas.height = size.height;

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) {
    bitmap.close();
    throw new Error("Canvas is not available");
  }

  ctx.drawImage(bitmap, 0, 0, size.width, size.height);
  bitmap.close();

  const useQuality = options.format === "image/jpeg" || options.format === "image/webp";
  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob(
      (result) => {
        if (!result) {
          reject(new Error("Could not encode image"));
          return;
        }
        resolve(result);
      },
      options.format,
      useQuality ? options.quality : undefined,
    );
  });

  return {
    name: buildOutputName(file.name, options.format),
    originalSize: file.size,
    convertedSize: blob.size,
    blob,
  };
}

function resolveSize(originalWidth, originalHeight, targetWidth, targetHeight, keepRatio) {
  if (!targetWidth && !targetHeight) {
    return { width: originalWidth, height: originalHeight };
  }

  if (!keepRatio) {
    return {
      width: targetWidth || originalWidth,
      height: targetHeight || originalHeight,
    };
  }

  const ratio = originalWidth / originalHeight;

  if (targetWidth && !targetHeight) {
    return { width: targetWidth, height: Math.max(1, Math.round(targetWidth / ratio)) };
  }

  if (!targetWidth && targetHeight) {
    return { width: Math.max(1, Math.round(targetHeight * ratio)), height: targetHeight };
  }

  const widthBasedHeight = Math.round(targetWidth / ratio);
  if (widthBasedHeight <= targetHeight) {
    return { width: targetWidth, height: Math.max(1, widthBasedHeight) };
  }

  const heightBasedWidth = Math.round(targetHeight * ratio);
  return { width: Math.max(1, heightBasedWidth), height: targetHeight };
}

function buildOutputName(originalName, mimeType) {
  const ext = mimeType === "image/png" ? "png" : mimeType === "image/webp" ? "webp" : "jpg";
  const dotIndex = originalName.lastIndexOf(".");
  const base = dotIndex > 0 ? originalName.slice(0, dotIndex) : originalName;
  return `${base}_converted.${ext}`;
}

function renderResults() {
  dom.resultList.innerHTML = "";

  if (!state.results.length) {
    const item = document.createElement("li");
    item.className = "muted";
    item.textContent = translate("result_empty");
    dom.resultList.appendChild(item);
    return;
  }

  state.results.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "result-item";

    const meta = document.createElement("div");
    meta.className = "result-meta";

    const name = document.createElement("span");
    name.className = "result-name";
    name.textContent = entry.name;

    const size = document.createElement("small");
    size.className = "muted";

    if (entry.error) {
      size.textContent = `${translate("result_failed")}: ${entry.error}`;
    } else {
      size.textContent = translate("result_size", {
        from: formatBytes(entry.originalSize),
        to: formatBytes(entry.convertedSize),
      });
    }

    meta.appendChild(name);
    meta.appendChild(size);

    item.appendChild(meta);

    if (entry.blob) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ghost-btn";
      button.textContent = translate("download_btn");
      button.addEventListener("click", () => downloadBlob(entry.blob, entry.name));
      item.appendChild(button);
    }

    dom.resultList.appendChild(item);
  });
}

function clearAll() {
  state.files = [];
  state.results = [];
  dom.fileInput.value = "";
  dom.widthInput.value = "";
  dom.heightInput.value = "";
  renderResults();
  updateSelectedSummary();
  dom.downloadAllBtn.disabled = true;
  setStatus(translate("status_idle"));
}

function downloadAll() {
  const downloadable = state.results.filter((item) => item.blob);
  if (!downloadable.length) return;

  downloadable.forEach((item, idx) => {
    window.setTimeout(() => downloadBlob(item.blob, item.name), idx * 120);
  });

  setStatus(translate("status_download_all"));
}

function downloadBlob(blob, fileName) {
  const link = document.createElement("a");
  const href = URL.createObjectURL(blob);
  link.href = href;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(href);
}

function setStatus(message, isWarn = false) {
  dom.statusText.textContent = message;
  dom.statusText.style.color = isWarn ? "#b54708" : "";
}

function setAudioStatus(key, params = {}, isWarn = false) {
  state.audioStatus = { key, params, isWarn };
  renderAudioStatus();
}

function renderAudioStatus() {
  dom.audioStatus.textContent = translate(state.audioStatus.key, state.audioStatus.params);
  dom.audioStatus.style.color = state.audioStatus.isWarn ? "#b54708" : "";
}

function setAudioProgress(percent, phaseKey = "audio_phase_done") {
  state.audio.progress = {
    percent: clamp(percent, 0, 100),
    phaseKey,
  };
  renderAudioProgress();
}

function renderAudioProgress() {
  const percent = Math.round(state.audio.progress.percent || 0);
  dom.audioProgressBar.value = percent;
  if (percent <= 0) {
    dom.audioProgressText.textContent = translate("audio_progress_idle");
  } else {
    dom.audioProgressText.textContent = translate("audio_progress_text", {
      phase: translate(state.audio.progress.phaseKey || "audio_phase_done"),
      percent,
    });
  }
}

function renderAudioResults() {
  dom.audioResultList.innerHTML = "";
  if (!state.audio.results.length) {
    const item = document.createElement("li");
    item.className = "muted";
    item.textContent = translate("audio_result_empty");
    dom.audioResultList.appendChild(item);
    return;
  }

  state.audio.results.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "result-item";

    const meta = document.createElement("div");
    meta.className = "result-meta";

    const name = document.createElement("span");
    name.className = "result-name";
    name.textContent = entry.name;

    const size = document.createElement("small");
    size.className = "muted";
    if (entry.error) {
      size.textContent = `${translate("result_failed")}: ${entry.error}`;
    } else {
      size.textContent = `${entry.format.toUpperCase()} · ${formatBytes(entry.size)}`;
    }

    meta.appendChild(name);
    meta.appendChild(size);
    item.appendChild(meta);

    if (entry.blob) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ghost-btn";
      button.textContent = translate("download_btn");
      button.addEventListener("click", () => downloadBlob(entry.blob, entry.name));
      item.appendChild(button);
    }

    dom.audioResultList.appendChild(item);
  });
}

function updateAudioSelectedSummary() {
  const files = state.audio.files;
  if (!files.length) {
    dom.audioSelectedSummary.textContent = translate("audio_selected_none");
    dom.audioMetaInfo.textContent = "";
    return;
  }

  if (files.length === 1 && state.audio.firstMeta) {
    dom.audioSelectedSummary.textContent = translate("audio_selected_file", {
      name: files[0].name,
      duration: state.audio.firstMeta.duration.toFixed(2),
    });
    dom.audioMetaInfo.textContent = translate("audio_meta_info", {
      sampleRate: state.audio.firstMeta.sampleRate,
      channels: state.audio.firstMeta.channels,
      size: formatBytes(files[0].size),
    });
    return;
  }

  dom.audioSelectedSummary.textContent = translate("audio_selected_count", {
    count: files.length,
  });

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  dom.audioMetaInfo.textContent = translate("audio_meta_info_basic", {
    size: formatBytes(totalSize),
  });
}

function getSharedAudioContext() {
  if (sharedAudioContext && sharedAudioContext.state !== "closed") {
    return sharedAudioContext;
  }

  const Context = window.AudioContext || window.webkitAudioContext;
  sharedAudioContext = new Context();
  return sharedAudioContext;
}

function getFileExtension(fileName) {
  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex < 0) return "";
  return fileName.slice(dotIndex + 1).toLowerCase();
}

function isSupportedAudioFile(file) {
  if (!file) return false;
  const ext = getFileExtension(file.name);
  if (supportedAudioExtensions.has(ext)) return true;

  const mime = (file.type || "").toLowerCase();
  return (
    mime.startsWith("audio/mpeg") ||
    mime.startsWith("audio/wav") ||
    mime.startsWith("audio/x-wav") ||
    mime.startsWith("audio/ogg") ||
    mime.startsWith("audio/mp4") ||
    mime.startsWith("audio/aac") ||
    mime.startsWith("audio/webm")
  );
}

function isSupportedVideoFile(file) {
  if (!file) return false;
  const ext = getFileExtension(file.name);
  if (supportedVideoExtensions.has(ext)) return true;

  const mime = (file.type || "").toLowerCase();
  return mime.startsWith("video/");
}

function dedupeVideoFiles(files) {
  const map = new Map();
  files.forEach((file) => {
    const key = `${file.name}-${file.size}-${file.lastModified}`;
    map.set(key, file);
  });
  return Array.from(map.values());
}

function rebuildVideoQueue() {
  state.video.queue = state.video.files.map((file) => ({
    name: file.name,
    size: file.size,
    status: "queued",
    error: "",
  }));
  renderVideoQueue();
}

function updateVideoQueueItemStatus(index, status, error = "") {
  if (!state.video.queue[index]) return;
  state.video.queue[index].status = status;
  state.video.queue[index].error = error;
  renderVideoQueue();
}

function revokeVideoUrls() {
  if (state.video.originalUrl) {
    URL.revokeObjectURL(state.video.originalUrl);
    state.video.originalUrl = "";
  }
  if (state.video.outputUrl) {
    URL.revokeObjectURL(state.video.outputUrl);
    state.video.outputUrl = "";
  }
  if (state.video.thumbnailUrl) {
    URL.revokeObjectURL(state.video.thumbnailUrl);
    state.video.thumbnailUrl = "";
  }
}

function updateVideoSelectedSummary() {
  const files = state.video.files;
  if (!files.length) {
    dom.videoSelectedSummary.textContent = translate("video_selected_none");
    dom.videoMetaInfo.textContent = "";
    return;
  }

  if (files.length === 1 && state.video.firstMeta) {
    dom.videoSelectedSummary.textContent = translate("video_selected_file", {
      name: files[0].name,
    });
    dom.videoMetaInfo.textContent = translate("video_meta_info", {
      duration: state.video.firstMeta.duration.toFixed(2),
      width: state.video.firstMeta.width,
      height: state.video.firstMeta.height,
      size: formatBytes(files[0].size),
    });
    return;
  }

  dom.videoSelectedSummary.textContent = translate("video_selected_count", {
    count: files.length,
  });
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  dom.videoMetaInfo.textContent = translate("video_meta_info_basic", {
    size: formatBytes(totalSize),
  });
}

function renderVideoQueue() {
  dom.videoQueueList.innerHTML = "";
  if (!state.video.queue.length) {
    const item = document.createElement("li");
    item.className = "muted";
    item.textContent = translate("video_queue_empty");
    dom.videoQueueList.appendChild(item);
    return;
  }

  state.video.queue.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "result-item";

    const meta = document.createElement("div");
    meta.className = "result-meta";
    const name = document.createElement("span");
    name.className = "result-name";
    name.textContent = entry.name;
    const detail = document.createElement("small");
    detail.className = "muted";
    detail.textContent = `${formatBytes(entry.size)} · ${translate(`video_queue_status_${entry.status}`)}`;
    if (entry.error) {
      detail.textContent += ` · ${translate("result_failed")}: ${entry.error}`;
    }
    meta.appendChild(name);
    meta.appendChild(detail);
    item.appendChild(meta);
    dom.videoQueueList.appendChild(item);
  });
}

function renderVideoResults() {
  dom.videoResultList.innerHTML = "";
  if (!state.video.results.length) {
    const item = document.createElement("li");
    item.className = "muted";
    item.textContent = translate("video_result_empty");
    dom.videoResultList.appendChild(item);
    return;
  }

  state.video.results.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "result-item";

    const meta = document.createElement("div");
    meta.className = "result-meta";
    const name = document.createElement("span");
    name.className = "result-name";
    name.textContent = entry.name;
    const detail = document.createElement("small");
    detail.className = "muted";
    if (entry.error) {
      detail.textContent = `${translate("result_failed")}: ${entry.error}`;
    } else {
      detail.textContent = `${entry.format.toUpperCase()} · ${formatBytes(entry.size)}`;
    }
    meta.appendChild(name);
    meta.appendChild(detail);
    item.appendChild(meta);

    if (entry.blob) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ghost-btn";
      button.textContent = translate("download_btn");
      button.addEventListener("click", () => downloadBlob(entry.blob, entry.name));
      item.appendChild(button);
    }

    dom.videoResultList.appendChild(item);
  });
}

function clearVideoOutputsOnly() {
  if (state.video.outputUrl) {
    URL.revokeObjectURL(state.video.outputUrl);
    state.video.outputUrl = "";
  }
  if (state.video.thumbnailUrl) {
    URL.revokeObjectURL(state.video.thumbnailUrl);
    state.video.thumbnailUrl = "";
  }
  state.video.outputBlob = null;
  state.video.outputExt = dom.videoOutputFormatSelect.value || "mp4";
  state.video.thumbnailBlob = null;
  state.video.results = [];
  state.video.queue = state.video.queue.map((entry) => ({
    ...entry,
    status: "queued",
    error: "",
  }));
  dom.videoOutputPreview.removeAttribute("src");
  dom.videoOutputPreview.load();
  dom.videoDownloadBtn.disabled = true;
  dom.videoThumbDownloadBtn.disabled = true;
  dom.videoThumbnailPreview.removeAttribute("src");
  dom.videoThumbnailPreview.classList.add("is-hidden");
  renderVideoQueue();
  renderVideoResults();
  setVideoProgress(0, "video_phase_done");
}

async function addVideoFiles(fileList) {
  const incoming = Array.from(fileList || []);
  if (!incoming.length) return;
  if (state.video.processing) {
    setVideoStatus("video_status_processing", {}, true);
    return;
  }

  const supported = [];
  const rejected = [];
  incoming.forEach((file) => {
    if (isSupportedVideoFile(file)) supported.push(file);
    else rejected.push(file.name);
  });

  if (rejected.length) {
    setVideoStatus("video_status_error", { message: translate("video_supported_formats") }, true);
  }
  if (!supported.length) {
    return;
  }

  state.video.files = dedupeVideoFiles([...state.video.files, ...supported]);
  state.video.firstMeta = null;
  clearVideoOutputsOnly();
  rebuildVideoQueue();

  const firstFile = state.video.files[0];
  if (firstFile) {
    if (state.video.originalUrl) {
      URL.revokeObjectURL(state.video.originalUrl);
    }
    state.video.originalUrl = URL.createObjectURL(firstFile);
    dom.videoOriginalPreview.src = state.video.originalUrl;
    dom.videoStartInput.value = "0";
    dom.videoEndInput.value = "";
  }

  dom.videoInput.value = "";
  updateVideoSelectedSummary();
  setVideoStatus("video_status_loading");

  try {
    await loadFirstVideoMeta();
    updateVideoSelectedSummary();
    setVideoStatus("video_status_loaded");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setVideoStatus("video_status_error", { message }, true);
  }
}

async function loadFirstVideoMeta() {
  const firstFile = state.video.files[0];
  if (!firstFile) {
    state.video.firstMeta = null;
    return;
  }
  const meta = await readVideoMeta(firstFile);
  state.video.firstMeta = meta;
  if (meta.duration > 0) {
    dom.videoEndInput.value = meta.duration.toFixed(2);
  }
}

async function readVideoMeta(file) {
  const objectUrl = URL.createObjectURL(file);
  try {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.src = objectUrl;

    await new Promise((resolve, reject) => {
      video.onloadedmetadata = () => resolve();
      video.onerror = () => reject(new Error("Could not read video metadata"));
    });

    return {
      duration: Number.isFinite(video.duration) ? video.duration : 0,
      width: video.videoWidth || 0,
      height: video.videoHeight || 0,
    };
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function dedupeAudioFiles(files) {
  const map = new Map();
  files.forEach((file) => {
    const key = `${file.name}-${file.size}-${file.lastModified}`;
    map.set(key, file);
  });
  return Array.from(map.values());
}

function revokeAudioUrls() {
  if (state.audio.originalUrl) {
    URL.revokeObjectURL(state.audio.originalUrl);
    state.audio.originalUrl = "";
  }
  if (state.audio.outputUrl) {
    URL.revokeObjectURL(state.audio.outputUrl);
    state.audio.outputUrl = "";
  }
}

function clearAudioOutputsOnly() {
  if (state.audio.outputUrl) {
    URL.revokeObjectURL(state.audio.outputUrl);
    state.audio.outputUrl = "";
  }
  state.audio.outputBlob = null;
  state.audio.outputExt = "wav";
  state.audio.results = [];
  dom.audioOutputPreview.removeAttribute("src");
  dom.audioOutputPreview.load();
  dom.audioDownloadBtn.disabled = true;
  renderAudioResults();
  setAudioProgress(0, "audio_phase_done");
}

async function addAudioFiles(fileList) {
  const incoming = Array.from(fileList || []);
  if (!incoming.length) return;

  const supported = [];
  const rejected = [];
  incoming.forEach((file) => {
    if (isSupportedAudioFile(file)) supported.push(file);
    else rejected.push(file.name);
  });

  if (rejected.length) {
    setAudioStatus("audio_status_unsupported", {}, true);
  }
  if (!supported.length) {
    return;
  }

  state.audio.files = dedupeAudioFiles([...state.audio.files, ...supported]);
  state.audio.firstMeta = null;
  clearAudioOutputsOnly();

  const firstFile = state.audio.files[0];
  if (firstFile) {
    if (state.audio.originalUrl) {
      URL.revokeObjectURL(state.audio.originalUrl);
    }
    state.audio.originalUrl = URL.createObjectURL(firstFile);
    dom.audioOriginalPreview.src = state.audio.originalUrl;
    dom.audioStartInput.value = "0";
    dom.audioEndInput.value = "";
  }

  dom.audioInput.value = "";
  updateAudioSelectedSummary();
  setAudioStatus("audio_status_loading");

  try {
    await loadFirstAudioMeta();
    updateAudioSelectedSummary();
    setAudioStatus("audio_status_loaded");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setAudioStatus("audio_status_error", { message }, true);
  }
}

async function loadFirstAudioMeta() {
  const firstFile = state.audio.files[0];
  if (!firstFile) {
    state.audio.firstMeta = null;
    return;
  }
  const audioContext = getSharedAudioContext();
  const sourceBuffer = await firstFile.arrayBuffer();
  const decoded = await audioContext.decodeAudioData(sourceBuffer.slice(0));
  state.audio.firstMeta = {
    duration: decoded.duration,
    sampleRate: decoded.sampleRate,
    channels: decoded.numberOfChannels,
  };
}

function getAudioProcessingOptions() {
  return {
    outputFormat: dom.audioOutputFormatSelect.value,
    bitrate: dom.audioBitrateSelect.value,
    rateMode: dom.audioRateModeSelect.value,
    vbrQuality: dom.audioVbrQualitySelect.value,
    aacProfile: dom.audioAacProfileSelect.value,
    sampleRate: dom.audioSampleRateSelect.value,
    channels: dom.audioChannelSelect.value,
    trimStart: readNumberInput(dom.audioStartInput.value, 0),
    trimEnd: readNumberInput(dom.audioEndInput.value, NaN),
    volumeDb: readNumberInput(dom.audioVolumeInput.value, 0),
    fadeInSec: Math.max(0, readNumberInput(dom.audioFadeInInput.value, 0)),
    fadeOutSec: Math.max(0, readNumberInput(dom.audioFadeOutInput.value, 0)),
    normalize: dom.audioNormalizeInput.checked,
  };
}

async function processAudio() {
  if (!state.audio.files.length) {
    setAudioStatus("audio_status_no_file", {}, true);
    return;
  }

  clearAudioOutputsOnly();
  const options = getAudioProcessingOptions();
  const total = state.audio.files.length;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < total; i += 1) {
    const file = state.audio.files[i];
    setAudioStatus("audio_status_processing_file", {
      index: i + 1,
      total,
      name: file.name,
    });

    try {
      const result = await processSingleAudioFile(file, options, i, total);
      state.audio.results.push(result);
      successCount += 1;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      state.audio.results.push({
        name: buildProcessedAudioName(file.name, options.outputFormat || "wav"),
        format: options.outputFormat || "wav",
        error: message,
      });
      failCount += 1;
    }

    renderAudioResults();
  }

  const firstSuccess = state.audio.results.find((item) => item.blob);
  if (firstSuccess) {
    state.audio.outputBlob = firstSuccess.blob;
    state.audio.outputExt = firstSuccess.format;
    if (state.audio.outputUrl) {
      URL.revokeObjectURL(state.audio.outputUrl);
    }
    state.audio.outputUrl = URL.createObjectURL(firstSuccess.blob);
    dom.audioOutputPreview.src = state.audio.outputUrl;
    dom.audioDownloadBtn.disabled = false;
  }

  setAudioProgress(100, "audio_phase_done");
  if (failCount > 0) {
    setAudioStatus(
      "audio_status_batch_done",
      { done: successCount, failed: failCount },
      failCount > 0 && successCount === 0,
    );
  } else {
    setAudioStatus("audio_status_batch_done", { done: successCount, failed: failCount });
  }
}

async function processSingleAudioFile(file, options, fileIndex, totalFiles) {
  const updateProgress = (phaseKey, ratioWithinFile) => {
    const overallRatio = (fileIndex + ratioWithinFile) / totalFiles;
    setAudioProgress(overallRatio * 100, phaseKey);
  };

  updateProgress("audio_phase_decode", 0.05);
  const audioContext = getSharedAudioContext();
  const sourceBuffer = await file.arrayBuffer();
  const decoded = await audioContext.decodeAudioData(sourceBuffer.slice(0));

  const duration = decoded.duration;
  const startSec = clamp(options.trimStart, 0, duration);
  const endRaw = Number.isFinite(options.trimEnd) ? options.trimEnd : duration;
  const endSec = clamp(endRaw, 0, duration);
  if (endSec <= startSec) {
    throw new Error(translate("audio_status_invalid_trim"));
  }

  const targetSampleRate =
    options.sampleRate === "keep"
      ? decoded.sampleRate
      : Math.max(8000, Math.floor(readNumberInput(options.sampleRate, decoded.sampleRate)));
  const targetChannels =
    options.channels === "keep" ? decoded.numberOfChannels : options.channels === "mono" ? 1 : 2;

  updateProgress("audio_phase_render", 0.2);
  const rendered = await renderAudioSegment(decoded, {
    startSec,
    endSec,
    targetSampleRate,
    targetChannels,
    volumeDb: options.volumeDb,
    fadeInSec: options.fadeInSec,
    fadeOutSec: options.fadeOutSec,
  });

  const processedBuffer = options.normalize ? normalizeAudioBuffer(rendered, 0.98) : rendered;
  let blob;
  let outputExt = options.outputFormat || "wav";

  if (outputExt === "wav") {
    blob = audioBufferToWavBlob(processedBuffer);
  } else {
    updateProgress("audio_phase_encode", 0.7);
    setAudioStatus("audio_status_ffmpeg_loading");
    await ensureFfmpegReady();
    setAudioStatus("audio_status_ffmpeg_ready");
    blob = await transcodeAudioBufferWithFfmpeg(processedBuffer, options);
  }

  updateProgress("audio_phase_done", 1);
  return {
    name: buildProcessedAudioName(file.name, outputExt),
    format: outputExt,
    size: blob.size,
    blob,
  };
}

async function renderAudioSegment(source, options) {
  const processDuration = options.endSec - options.startSec;
  const volumeGain = Math.pow(10, options.volumeDb / 20);
  const OfflineCtor = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  if (!OfflineCtor) {
    throw new Error("OfflineAudioContext is not supported in this browser");
  }

  const frameLength = Math.max(1, Math.ceil(processDuration * options.targetSampleRate));
  const offline = new OfflineCtor(options.targetChannels, frameLength, options.targetSampleRate);
  const bufferSource = offline.createBufferSource();
  bufferSource.buffer = source;

  const gainNode = offline.createGain();
  gainNode.gain.setValueAtTime(volumeGain, 0);

  if (options.fadeInSec > 0) {
    const fadeInEnd = Math.min(options.fadeInSec, processDuration);
    gainNode.gain.setValueAtTime(0, 0);
    gainNode.gain.linearRampToValueAtTime(volumeGain, fadeInEnd);
  }

  if (options.fadeOutSec > 0) {
    const fadeOutStart = Math.max(0, processDuration - options.fadeOutSec);
    gainNode.gain.setValueAtTime(volumeGain, fadeOutStart);
    gainNode.gain.linearRampToValueAtTime(0, processDuration);
  }

  bufferSource.connect(gainNode);
  gainNode.connect(offline.destination);
  bufferSource.start(0, options.startSec, processDuration);
  return offline.startRendering();
}

function buildProcessedAudioName(originalName, extension) {
  const dotIndex = originalName.lastIndexOf(".");
  const baseName = dotIndex > 0 ? originalName.slice(0, dotIndex) : originalName;
  return `${baseName}_processed.${extension}`;
}

async function ensureFfmpegReady() {
  if (ffmpegInstance) {
    return ffmpegInstance;
  }

  if (ffmpegLoadPromise) {
    return ffmpegLoadPromise;
  }

  ffmpegLoadPromise = (async () => {
    const ffmpegApi = window.FFmpegWASM;
    const utilApi = window.FFmpegUtil;
    if (!ffmpegApi || !utilApi) {
      throw new Error("FFmpeg script is not loaded");
    }

    const { FFmpeg } = ffmpegApi;
    const { toBlobURL } = utilApi;
    const ffmpeg = new FFmpeg();
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
    const coreURL = await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript");
    const wasmURL = await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm");
    const workerURL = await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, "text/javascript");

    await ffmpeg.load({ coreURL, wasmURL, workerURL });
    ffmpegInstance = ffmpeg;
    return ffmpeg;
  })();

  try {
    return await ffmpegLoadPromise;
  } catch (error) {
    ffmpegLoadPromise = null;
    throw error;
  }
}

async function transcodeAudioBufferWithFfmpeg(audioBuffer, options) {
  const ffmpeg = await ensureFfmpegReady();
  const outputFormat = options.outputFormat === "m4a" ? "m4a" : "mp3";
  const inputName = `input_${Date.now()}_${Math.random().toString(36).slice(2)}.wav`;
  const outputName = `output_${Date.now()}_${Math.random().toString(36).slice(2)}.${outputFormat}`;
  const wavBlob = audioBufferToWavBlob(audioBuffer);
  const wavData = new Uint8Array(await wavBlob.arrayBuffer());

  await ffmpeg.writeFile(inputName, wavData);
  const args = ["-i", inputName, "-vn"];

  if (outputFormat === "m4a") {
    args.push("-c:a", "aac", "-profile:a", options.aacProfile || "aac_low");
    args.push("-b:a", options.bitrate || "192k");
    args.push("-movflags", "+faststart", outputName);
  } else {
    if (options.rateMode === "vbr") {
      args.push("-q:a", options.vbrQuality || "4", outputName);
    } else {
      args.push("-b:a", options.bitrate || "192k", outputName);
    }
  }

  await ffmpeg.exec(args);
  const outputData = await ffmpeg.readFile(outputName);
  await ffmpeg.deleteFile(inputName).catch(() => {});
  await ffmpeg.deleteFile(outputName).catch(() => {});

  const mime = outputFormat === "m4a" ? "audio/mp4" : "audio/mpeg";
  return new Blob([outputData], { type: mime });
}

function getVideoProcessingOptions() {
  return {
    outputFormat: dom.videoOutputFormatSelect.value,
    bitrate: dom.videoBitrateSelect.value,
    preset: dom.videoPresetSelect.value,
    fps: dom.videoFpsSelect.value,
    startSec: readNumberInput(dom.videoStartInput.value, 0),
    endSec: readNumberInput(dom.videoEndInput.value, NaN),
    width: normalizeDimension(dom.videoWidthInput.value),
    height: normalizeDimension(dom.videoHeightInput.value),
    keepRatio: dom.videoKeepRatioInput.checked,
    mute: dom.videoMuteInput.checked,
  };
}

function buildVideoFilter(options) {
  const filters = [];
  const width = options.width;
  const height = options.height;

  if (width || height) {
    if (options.keepRatio) {
      if (width && height) {
        filters.push(`scale=${width}:${height}:force_original_aspect_ratio=decrease`);
      } else if (width) {
        filters.push(`scale=${width}:-2`);
      } else if (height) {
        filters.push(`scale=-2:${height}`);
      }
    } else {
      const targetW = width || -2;
      const targetH = height || -2;
      filters.push(`scale=${targetW}:${targetH}`);
    }
  }

  if (options.fps !== "keep") {
    filters.push(`fps=${options.fps}`);
  }

  return filters.join(",");
}

async function processVideo() {
  if (!state.video.files.length) {
    setVideoStatus("video_status_no_file", {}, true);
    return;
  }
  if (state.video.processing) return;

  const options = getVideoProcessingOptions();
  if (Number.isFinite(options.endSec) && options.endSec <= Math.max(0, options.startSec)) {
    setVideoStatus("video_status_invalid_trim", {}, true);
    return;
  }
  clearVideoOutputsOnly();
  state.video.processing = true;
  state.video.cancelRequested = false;
  dom.videoCancelBtn.disabled = false;

  const total = state.video.files.length;
  let successCount = 0;
  let failCount = 0;
  let canceled = false;

  try {
    setVideoStatus("video_status_ffmpeg_loading");
    await ensureFfmpegReady();
    setVideoStatus("video_status_ffmpeg_ready");
  } catch (error) {
    state.video.processing = false;
    dom.videoCancelBtn.disabled = true;
    const message = buildVideoErrorMessage(error);
    setVideoStatus("video_status_error", { message }, true);
    setVideoProgress(0, "video_phase_done");
    return;
  }

  for (let i = 0; i < total; i += 1) {
    if (state.video.cancelRequested) {
      canceled = true;
      break;
    }

    const file = state.video.files[i];
    updateVideoQueueItemStatus(i, "processing");
    setVideoStatus("video_status_processing_file", {
      index: i + 1,
      total,
      name: file.name,
    });

    try {
      const result = await processSingleVideoFile(file, options, i, total);
      state.video.results.push(result);
      successCount += 1;
      updateVideoQueueItemStatus(i, "done");
    } catch (error) {
      const message = buildVideoErrorMessage(error);
      state.video.results.push({
        name: buildProcessedVideoName(file.name, options.outputFormat || "mp4"),
        format: options.outputFormat || "mp4",
        error: message,
      });
      failCount += 1;
      updateVideoQueueItemStatus(i, "failed", message);
    }

    renderVideoResults();
  }

  if (canceled) {
    state.video.queue.forEach((entry, index) => {
      if (entry.status === "queued" && index < total) {
        updateVideoQueueItemStatus(index, "canceled");
      }
    });
  }

  const firstSuccess = state.video.results.find((item) => item.blob);
  if (firstSuccess) {
    state.video.outputBlob = firstSuccess.blob;
    state.video.outputExt = firstSuccess.format;
    if (state.video.outputUrl) {
      URL.revokeObjectURL(state.video.outputUrl);
    }
    state.video.outputUrl = URL.createObjectURL(firstSuccess.blob);
    dom.videoOutputPreview.src = state.video.outputUrl;
    dom.videoDownloadBtn.disabled = false;
  } else {
    dom.videoDownloadBtn.disabled = true;
  }

  state.video.processing = false;
  dom.videoCancelBtn.disabled = true;
  setVideoProgress(100, "video_phase_done");

  if (canceled) {
    setVideoStatus(
      "video_status_batch_canceled",
      { done: successCount, failed: failCount },
      successCount === 0,
    );
  } else {
    setVideoStatus(
      "video_status_batch_done",
      { done: successCount, failed: failCount },
      successCount === 0 && failCount > 0,
    );
  }
}

async function transcodeVideoWithFfmpeg(file, options) {
  const ffmpeg = await ensureFfmpegReady();
  const inputExt = getFileExtension(file.name) || "mp4";
  const inputName = `video_input_${Date.now()}_${Math.random().toString(36).slice(2)}.${inputExt}`;
  const outputExt = options.outputFormat === "webm" ? "webm" : "mp4";
  const outputName = `video_output_${Date.now()}_${Math.random().toString(36).slice(2)}.${outputExt}`;

  const inputData = new Uint8Array(await file.arrayBuffer());
  await ffmpeg.writeFile(inputName, inputData);

  try {
    const args = [];
    if (options.startSec > 0) {
      args.push("-ss", options.startSec.toString());
    }
    args.push("-i", inputName);
    const trimDuration = options.endSec - options.startSec;
    if (trimDuration > 0 && Number.isFinite(trimDuration)) {
      args.push("-t", trimDuration.toString());
    }

    const vf = buildVideoFilter(options);
    if (vf) {
      args.push("-vf", vf);
    }

    if (outputExt === "mp4") {
      args.push("-c:v", "libx264", "-preset", options.preset, "-b:v", options.bitrate);
      if (options.mute) {
        args.push("-an");
      } else {
        args.push("-c:a", "aac", "-b:a", "128k");
      }
      args.push("-movflags", "+faststart");
    } else {
      args.push("-c:v", "libvpx-vp9", "-b:v", options.bitrate);
      if (options.mute) {
        args.push("-an");
      } else {
        args.push("-c:a", "libopus", "-b:a", "96k");
      }
    }

    args.push(outputName);
    await ffmpeg.exec(args);
    const outputData = await ffmpeg.readFile(outputName);
    const mime = outputExt === "webm" ? "video/webm" : "video/mp4";
    return new Blob([outputData], { type: mime });
  } finally {
    await ffmpeg.deleteFile(inputName).catch(() => {});
    await ffmpeg.deleteFile(outputName).catch(() => {});
  }
}

async function processSingleVideoFile(file, options, fileIndex, totalFiles) {
  const updateProgress = (phaseKey, ratioWithinFile) => {
    const overallRatio = (fileIndex + ratioWithinFile) / totalFiles;
    setVideoProgress(overallRatio * 100, phaseKey);
  };

  updateProgress("video_phase_decode", 0.08);
  const meta = await readVideoMeta(file);
  const duration = meta.duration > 0 ? meta.duration : NaN;
  const startSec = Number.isFinite(duration) ? clamp(options.startSec, 0, duration) : Math.max(0, options.startSec);
  const endRaw = Number.isFinite(options.endSec) ? options.endSec : duration;
  const endSec = Number.isFinite(duration) ? clamp(endRaw, 0, duration) : endRaw;
  if (Number.isFinite(endSec) && endSec <= startSec) {
    throw new Error(translate("video_status_invalid_trim"));
  }

  updateProgress("video_phase_encode", 0.35);
  const outputFormat = options.outputFormat || "mp4";
  const blob = await transcodeVideoWithFfmpeg(file, {
    ...options,
    outputFormat,
    startSec,
    endSec,
  });

  updateProgress("video_phase_done", 1);
  return {
    name: buildProcessedVideoName(file.name, outputFormat),
    format: outputFormat,
    size: blob.size,
    blob,
  };
}

async function extractVideoThumbnail() {
  if (!state.video.files.length) {
    setVideoStatus("video_status_no_file", {}, true);
    return;
  }
  if (state.video.processing) {
    setVideoStatus("video_status_processing", {}, true);
    return;
  }

  const sourceFile = state.video.files[0];
  let sourceMeta = state.video.firstMeta;
  if (!sourceMeta) {
    sourceMeta = await readVideoMeta(sourceFile);
    state.video.firstMeta = sourceMeta;
    updateVideoSelectedSummary();
  }

  setVideoStatus("video_status_thumbnail");
  setVideoProgress(20, "video_phase_thumb");

  try {
    const ffmpeg = await ensureFfmpegReady();
    const inputExt = getFileExtension(sourceFile.name) || "mp4";
    const inputName = `video_thumb_input_${Date.now()}_${Math.random().toString(36).slice(2)}.${inputExt}`;
    const outputName = `video_thumb_output_${Date.now()}_${Math.random().toString(36).slice(2)}.jpg`;
    const inputData = new Uint8Array(await sourceFile.arrayBuffer());
    await ffmpeg.writeFile(inputName, inputData);

    try {
      const start = clamp(readNumberInput(dom.videoStartInput.value, 0), 0, sourceMeta.duration);
      const timePoint = Math.min(Math.max(0, start + 0.1), Math.max(0, sourceMeta.duration - 0.1));
      const args = ["-ss", Math.max(0, timePoint).toString(), "-i", inputName, "-frames:v", "1", "-q:v", "2", outputName];
      await ffmpeg.exec(args);
      const thumbData = await ffmpeg.readFile(outputName);

      if (state.video.thumbnailUrl) {
        URL.revokeObjectURL(state.video.thumbnailUrl);
      }
      state.video.thumbnailBlob = new Blob([thumbData], { type: "image/jpeg" });
      state.video.thumbnailUrl = URL.createObjectURL(state.video.thumbnailBlob);
      dom.videoThumbnailPreview.src = state.video.thumbnailUrl;
      dom.videoThumbnailPreview.classList.remove("is-hidden");
      dom.videoThumbDownloadBtn.disabled = false;
      setVideoProgress(100, "video_phase_done");
      setVideoStatus("video_status_thumb_done");
    } finally {
      await ffmpeg.deleteFile(inputName).catch(() => {});
      await ffmpeg.deleteFile(outputName).catch(() => {});
    }
  } catch (error) {
    const message = buildVideoErrorMessage(error);
    setVideoStatus("video_status_error", { message }, true);
    setVideoProgress(0, "video_phase_done");
  }
}

function clearVideoState() {
  if (state.video.processing) {
    cancelVideoProcessing();
    return;
  }
  revokeVideoUrls();
  state.video.files = [];
  state.video.firstMeta = null;
  state.video.outputBlob = null;
  state.video.outputExt = "mp4";
  state.video.thumbnailBlob = null;
  state.video.queue = [];
  state.video.results = [];
  state.video.cancelRequested = false;
  state.video.processing = false;
  dom.videoInput.value = "";
  dom.videoOutputFormatSelect.value = "mp4";
  dom.videoBitrateSelect.value = "2000k";
  dom.videoPresetSelect.value = "medium";
  dom.videoFpsSelect.value = "keep";
  dom.videoStartInput.value = "0";
  dom.videoEndInput.value = "";
  dom.videoWidthInput.value = "";
  dom.videoHeightInput.value = "";
  dom.videoKeepRatioInput.checked = true;
  dom.videoMuteInput.checked = false;
  dom.videoOriginalPreview.removeAttribute("src");
  dom.videoOriginalPreview.load();
  dom.videoOutputPreview.removeAttribute("src");
  dom.videoOutputPreview.load();
  dom.videoThumbnailPreview.removeAttribute("src");
  dom.videoThumbnailPreview.classList.add("is-hidden");
  dom.videoDownloadBtn.disabled = true;
  dom.videoCancelBtn.disabled = true;
  dom.videoThumbDownloadBtn.disabled = true;
  updateVideoSelectedSummary();
  renderVideoQueue();
  renderVideoResults();
  setVideoProgress(0, "video_phase_done");
  setVideoStatus("video_status_ready");
}

function downloadProcessedVideo() {
  if (!state.video.files.length) {
    setVideoStatus("video_status_no_file", {}, true);
    return;
  }

  const downloadable = state.video.results.filter((item) => item.blob);
  if (!downloadable.length) {
    setVideoStatus("video_status_no_output", {}, true);
    return;
  }

  downloadable.forEach((entry, idx) => {
    window.setTimeout(() => downloadBlob(entry.blob, entry.name), idx * 150);
  });
  setVideoStatus("video_status_batch_done", {
    done: downloadable.length,
    failed: state.video.results.length - downloadable.length,
  });
}

function downloadVideoThumbnail() {
  if (!state.video.files.length) {
    setVideoStatus("video_status_no_file", {}, true);
    return;
  }
  if (!state.video.thumbnailBlob) {
    setVideoStatus("video_status_no_output", {}, true);
    return;
  }

  const firstFile = state.video.files[0];
  const dotIndex = firstFile.name.lastIndexOf(".");
  const baseName = dotIndex > 0 ? firstFile.name.slice(0, dotIndex) : firstFile.name;
  const fileName = `${baseName}_thumbnail.jpg`;
  downloadBlob(state.video.thumbnailBlob, fileName);
  setVideoStatus("video_status_thumb_done");
}

function buildProcessedVideoName(originalName, extension) {
  const dotIndex = originalName.lastIndexOf(".");
  const baseName = dotIndex > 0 ? originalName.slice(0, dotIndex) : originalName;
  return `${baseName}_processed.${extension}`;
}

function cancelVideoProcessing() {
  if (!state.video.processing || state.video.cancelRequested) {
    return;
  }
  state.video.cancelRequested = true;
  dom.videoCancelBtn.disabled = true;
  setVideoStatus("video_status_cancel_requested", {}, true);
}

function inferVideoErrorHintKey(message) {
  const lowered = String(message || "").toLowerCase();
  if (
    lowered.includes("memory") ||
    lowered.includes("allocation") ||
    lowered.includes("out of bounds") ||
    lowered.includes("abort")
  ) {
    return "video_error_hint_memory";
  }
  if (
    lowered.includes("codec") ||
    lowered.includes("unsupported") ||
    lowered.includes("invalid data") ||
    lowered.includes("could not")
  ) {
    return "video_error_hint_codec";
  }
  if (lowered.includes("script is not loaded") || lowered.includes("network") || lowered.includes("fetch")) {
    return "video_error_hint_network";
  }
  return "video_error_hint_default";
}

function buildVideoErrorMessage(error) {
  const raw = error instanceof Error ? error.message : String(error);
  if (!raw) return translate("video_error_hint_default");
  if (raw === translate("video_status_invalid_trim")) return raw;
  const hint = translate(inferVideoErrorHintKey(raw));
  const separator = raw.endsWith(".") ? " " : ". ";
  return `${raw}${separator}${hint}`;
}

function audioBufferToWavBlob(audioBuffer) {
  const channels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const frames = audioBuffer.length;
  const bytesPerSample = 2;
  const blockAlign = channels * bytesPerSample;
  const dataSize = frames * blockAlign;
  const totalSize = 44 + dataSize;
  const buffer = new ArrayBuffer(totalSize);
  const view = new DataView(buffer);

  writeWavString(view, 0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeWavString(view, 8, "WAVE");
  writeWavString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeWavString(view, 36, "data");
  view.setUint32(40, dataSize, true);

  const channelData = [];
  for (let ch = 0; ch < channels; ch += 1) {
    channelData.push(audioBuffer.getChannelData(ch));
  }

  let offset = 44;
  for (let frame = 0; frame < frames; frame += 1) {
    for (let ch = 0; ch < channels; ch += 1) {
      const sample = Math.max(-1, Math.min(1, channelData[ch][frame]));
      const int16 = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
      view.setInt16(offset, int16, true);
      offset += 2;
    }
  }

  return new Blob([buffer], { type: "audio/wav" });
}

function writeWavString(view, offset, text) {
  for (let i = 0; i < text.length; i += 1) {
    view.setUint8(offset + i, text.charCodeAt(i));
  }
}

function normalizeAudioBuffer(audioBuffer, targetPeak = 0.98) {
  let peak = 0;
  for (let ch = 0; ch < audioBuffer.numberOfChannels; ch += 1) {
    const data = audioBuffer.getChannelData(ch);
    for (let i = 0; i < data.length; i += 1) {
      const abs = Math.abs(data[i]);
      if (abs > peak) peak = abs;
    }
  }

  if (peak <= 0 || peak <= targetPeak) {
    return audioBuffer;
  }

  const scale = targetPeak / peak;
  for (let ch = 0; ch < audioBuffer.numberOfChannels; ch += 1) {
    const data = audioBuffer.getChannelData(ch);
    for (let i = 0; i < data.length; i += 1) {
      data[i] *= scale;
    }
  }

  return audioBuffer;
}

function readNumberInput(rawValue, defaultValue) {
  const parsed = Number(rawValue);
  return Number.isFinite(parsed) ? parsed : defaultValue;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function clearAudioState() {
  revokeAudioUrls();
  state.audio.files = [];
  state.audio.firstMeta = null;
  state.audio.outputBlob = null;
  state.audio.outputExt = "wav";
  state.audio.results = [];
  dom.audioInput.value = "";
  dom.audioStartInput.value = "0";
  dom.audioEndInput.value = "";
  dom.audioOutputFormatSelect.value = "wav";
  dom.audioBitrateSelect.value = "192k";
  dom.audioRateModeSelect.value = "cbr";
  dom.audioVbrQualitySelect.value = "4";
  dom.audioAacProfileSelect.value = "aac_low";
  dom.audioSampleRateSelect.value = "keep";
  dom.audioChannelSelect.value = "keep";
  dom.audioFadeInInput.value = "0";
  dom.audioFadeOutInput.value = "0";
  dom.audioNormalizeInput.checked = true;
  dom.audioVolumeInput.value = "0";
  syncAudioVolumeLabel();
  syncAudioOutputControls();
  dom.audioOriginalPreview.removeAttribute("src");
  dom.audioOriginalPreview.load();
  dom.audioOutputPreview.removeAttribute("src");
  dom.audioOutputPreview.load();
  dom.audioDownloadBtn.disabled = true;
  updateAudioSelectedSummary();
  renderAudioResults();
  setAudioProgress(0, "audio_phase_done");
  setAudioStatus("audio_status_ready");
}

function downloadProcessedAudio() {
  if (!state.audio.files.length) {
    setAudioStatus("audio_status_no_file", {}, true);
    return;
  }

  const downloadable = state.audio.results.filter((item) => item.blob);
  if (!downloadable.length) {
    setAudioStatus("audio_status_no_output", {}, true);
    return;
  }

  downloadable.forEach((entry, idx) => {
    window.setTimeout(() => downloadBlob(entry.blob, entry.name), idx * 150);
  });
  setAudioStatus("audio_status_done");
}

function setTextStatus(key, params = {}, isWarn = false) {
  state.textStatus = { key, params, isWarn };
  renderTextStatus();
}

function renderTextStatus() {
  dom.textStatus.textContent = translate(state.textStatus.key, state.textStatus.params);
  dom.textStatus.style.color = state.textStatus.isWarn ? "#b54708" : "";
}

function convertText() {
  const input = dom.textInput.value;
  const toolId = dom.textToolSelect.value;

  if (!input.trim()) {
    setTextStatus("text_status_empty", {}, true);
    return;
  }

  try {
    let output = "";
    switch (toolId) {
      case "json_pretty":
        output = JSON.stringify(JSON.parse(input), null, 2);
        break;
      case "json_minify":
        output = JSON.stringify(JSON.parse(input));
        break;
      case "json_validate":
        JSON.parse(input);
        output = input;
        break;
      case "csv_to_tsv":
        output = stringifyDelimited(parseDelimited(input, ","), "\t");
        break;
      case "tsv_to_csv":
        output = stringifyDelimited(parseDelimited(input, "\t"), ",");
        break;
      case "txt_to_md":
        output = textToMarkdown(input);
        break;
      case "md_to_txt":
        output = markdownToText(input);
        break;
      case "md_to_html":
        output = markdownToHtml(input);
        break;
      case "html_to_md":
        output = htmlToMarkdown(input);
        break;
      case "txt_to_html":
        output = textToHtml(input);
        break;
      case "html_to_txt":
        output = htmlToText(input);
        break;
      default:
        throw new Error("Unsupported conversion");
    }

    dom.textOutput.value = output;
    if (toolId === "json_validate") {
      setTextStatus("text_status_json_valid");
    } else {
      setTextStatus("text_status_done");
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setTextStatus("text_status_error", { message }, true);
  }
}

function swapTextInputOutput() {
  const temp = dom.textInput.value;
  dom.textInput.value = dom.textOutput.value;
  dom.textOutput.value = temp;
  setTextStatus("text_status_ready");
}

function clearTextFields() {
  dom.textInput.value = "";
  dom.textOutput.value = "";
  setTextStatus("text_status_ready");
}

async function copyTextOutput() {
  if (!dom.textOutput.value.trim()) {
    setTextStatus("text_status_empty", {}, true);
    return;
  }

  try {
    await navigator.clipboard.writeText(dom.textOutput.value);
    setTextStatus("text_status_copied");
  } catch (_error) {
    const textarea = document.createElement("textarea");
    textarea.value = dom.textOutput.value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const copied = document.execCommand("copy");
      setTextStatus(copied ? "text_status_copied" : "text_status_copy_failed", {}, !copied);
    } catch (_fallbackError) {
      setTextStatus("text_status_copy_failed", {}, true);
    } finally {
      textarea.remove();
    }
  }
}

function downloadTextOutput() {
  if (!dom.textOutput.value.trim()) {
    setTextStatus("text_status_empty", {}, true);
    return;
  }

  const extension = getTextOutputExtension(dom.textToolSelect.value);
  const fileName = `localconvert_text_output.${extension}`;
  const blob = new Blob([dom.textOutput.value], { type: "text/plain;charset=utf-8" });
  downloadBlob(blob, fileName);
  setTextStatus("text_status_downloaded");
}

function getTextOutputExtension(toolId) {
  if (toolId === "json_pretty" || toolId === "json_minify" || toolId === "json_validate") return "json";
  if (toolId === "csv_to_tsv") return "tsv";
  if (toolId === "tsv_to_csv") return "csv";
  if (toolId === "md_to_html" || toolId === "txt_to_html") return "html";
  if (toolId === "txt_to_md" || toolId === "html_to_md") return "md";
  return "txt";
}

function parseDelimited(input, delimiter) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;

  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];
    const next = input[i + 1];

    if (inQuotes) {
      if (ch === '"') {
        if (next === '"') {
          value += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        value += ch;
      }
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
      continue;
    }

    if (ch === delimiter) {
      row.push(value);
      value = "";
      continue;
    }

    if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && next === "\n") i += 1;
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
      continue;
    }

    value += ch;
  }

  row.push(value);
  rows.push(row);

  if ((input.endsWith("\n") || input.endsWith("\r")) && rows.length > 1) {
    const last = rows[rows.length - 1];
    if (last.length === 1 && last[0] === "") {
      rows.pop();
    }
  }

  if (rows.length === 1 && rows[0].length === 1 && rows[0][0] === "") {
    return [];
  }

  return rows;
}

function stringifyDelimited(rows, delimiter) {
  return rows
    .map((row) => row.map((cell) => quoteCell(String(cell), delimiter)).join(delimiter))
    .join("\n");
}

function quoteCell(value, delimiter) {
  if (!/["\n\r]/.test(value) && !value.includes(delimiter)) return value;
  return `"${value.replace(/"/g, '""')}"`;
}

function textToMarkdown(input) {
  return input
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .trim();
}

function markdownToText(input) {
  return input
    .replace(/```[\s\S]*?```/g, (block) => block.replace(/```/g, ""))
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s+/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[*_~]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function textToHtml(input) {
  const lines = input.replace(/\r\n/g, "\n").split("\n");
  const chunks = [];
  let buffer = [];

  const flush = () => {
    if (!buffer.length) return;
    chunks.push(`<p>${escapeHtml(buffer.join(" "))}</p>`);
    buffer = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flush();
    } else {
      buffer.push(trimmed);
    }
  });

  flush();
  return chunks.join("\n");
}

function htmlToText(input) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, "text/html");
  return (doc.body.textContent || "").replace(/\s+\n/g, "\n").trim();
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let listType = null;
  let listItems = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdownToHtml(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listType || !listItems.length) return;
    const items = listItems.map((item) => `<li>${inlineMarkdownToHtml(item)}</li>`).join("");
    html.push(`<${listType}>${items}</${listType}>`);
    listType = null;
    listItems = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineMarkdownToHtml(heading[2])}</h${level}>`);
      return;
    }

    const unordered = trimmed.match(/^[-*+]\s+(.+)$/);
    if (unordered) {
      flushParagraph();
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      listItems.push(unordered[1]);
      return;
    }

    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      flushParagraph();
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      listItems.push(ordered[1]);
      return;
    }

    flushList();
    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();

  return html.join("\n");
}

function inlineMarkdownToHtml(text) {
  let output = escapeHtml(text);
  output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return output;
}

function htmlToMarkdown(htmlText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, "text/html");
  const result = Array.from(doc.body.childNodes)
    .map((node) => nodeToMarkdown(node).trimEnd())
    .filter(Boolean)
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n");
  return result.trim();
}

function nodeToMarkdown(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent?.replace(/\s+/g, " ") || "";
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }

  const tag = node.tagName.toLowerCase();
  const children = () => Array.from(node.childNodes).map((child) => nodeToMarkdown(child)).join("");

  if (/^h[1-6]$/.test(tag)) {
    const level = Number(tag.slice(1));
    return `${"#".repeat(level)} ${children().trim()}`;
  }

  if (tag === "p") return children().trim();
  if (tag === "strong" || tag === "b") return `**${children().trim()}**`;
  if (tag === "em" || tag === "i") return `*${children().trim()}*`;
  if (tag === "code") return `\`${children().trim()}\``;
  if (tag === "pre") return `\`\`\`\n${node.textContent?.trim() || ""}\n\`\`\``;
  if (tag === "br") return "  \n";

  if (tag === "a") {
    const href = node.getAttribute("href") || "";
    const label = children().trim() || href;
    return `[${label}](${href})`;
  }

  if (tag === "ul") {
    const items = Array.from(node.children)
      .filter((child) => child.tagName.toLowerCase() === "li")
      .map((li) => `- ${nodeToMarkdown(li).trim()}`);
    return items.join("\n");
  }

  if (tag === "ol") {
    const items = Array.from(node.children)
      .filter((child) => child.tagName.toLowerCase() === "li")
      .map((li, index) => `${index + 1}. ${nodeToMarkdown(li).trim()}`);
    return items.join("\n");
  }

  if (tag === "li") {
    return children().trim();
  }

  return children();
}

function escapeHtml(input) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "-";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}
