(function () {
  const LANG_STORAGE_KEY = "localconvert.lang";

  const LANGUAGES = [
    { code: "en", flag: "🇺🇸", short: "EN", name: "English" },
    { code: "es", flag: "🇪🇸", short: "ES", name: "Espanol" },
    { code: "zh", flag: "🇨🇳", short: "中文", name: "中文" },
    { code: "ko", flag: "🇰🇷", short: "KO", name: "한국어" },
    { code: "ja", flag: "🇯🇵", short: "JP", name: "日本語" },
  ];

  const COPY = {
    en: {
      labels: {
        language: "Language",
        navMain: "Main navigation",
        home: "Home",
        imageHub: "Image",
        imageExpert: "Image Expert",
        text: "Text",
        audio: "Audio",
        video: "Video",
        compress: "Compress",
        resize: "Resize",
        heic: "HEIC",
        webp: "WEBP",
        instagram: "Instagram",
      },
      homeContent: {
        heroTitle: "All Conversion Tools In One Place",
        heroDesc: "Choose the workflow that matches your task. Everything runs in your browser.",
        listTitle: "What We Provide",
        toolTitles: ["Image Tools", "Text Tools", "Audio Tools", "Video Tools"],
        toolDescs: [
          "Need-based image paths for compression, resize, HEIC, WEBP, and presets.",
          "JSON, CSV/TSV, Markdown, and HTML conversion tools.",
          "Trim, fade, normalize, and convert audio formats locally.",
          "Convert format, trim, resize, and extract thumbnails in-browser.",
        ],
        toolShortcuts: [
          [
            { title: "Image > Hub", desc: "Not sure where to start with image conversion." },
            { title: "Image > Compress", desc: "File is too large for upload limits and email forms." },
            { title: "Image > Resize", desc: "Dimensions do not match required width and height." },
            { title: "Image > HEIC to JPG", desc: "HEIC photos are not opening on your service." },
            { title: "Image > WEBP to JPG", desc: "WEBP upload is rejected by legacy platforms." },
            { title: "Image > Instagram Presets", desc: "You need feed, story, or reels dimensions quickly." },
          ],
          [
            { title: "Text > Hub", desc: "Choose a text workflow by your exact need." },
            { title: "Text > Clean", desc: "Pasted text has broken spaces and messy line breaks." },
            { title: "Text > Developer", desc: "You need JSON formatting or encode/decode utilities." },
            { title: "Text > Counter", desc: "Check characters, words, lines, and bytes in real time." },
            { title: "Text > Case", desc: "Convert uppercase, lowercase, camelCase, and more." },
            { title: "Text > Structure", desc: "Sort lines, remove duplicates, and restructure lists." },
            { title: "Text > Special", desc: "Filter emoji, numbers, Korean-only, or English-only text." },
          ],
          [{ title: "Audio > Converter", desc: "Trim, fade, normalize volume, and convert audio format." }],
          [{ title: "Video > Converter", desc: "Convert video format, trim clips, resize, and extract thumbnails." }],
        ],
        startTitle: "Recommended Start Paths",
        startList: [
          "First time user: start from Image Hub or Text Hub.",
          "Use each card submenu to jump directly to the exact feature.",
          "Audio and video each have dedicated conversion workspaces.",
        ],
      },
      pages: {
        "image-hub": {
          heroTitle: "What do you need to fix right now?",
          heroDesc: "Pick your situation and go directly to the right image workflow. Everything runs in your browser.",
          cards: [
            {
              title: "Image too large",
              desc: "Compress file size for email attachments, forms, and uploads.",
            },
            {
              title: "Wrong dimensions",
              desc: "Resize width and height, keep ratio, and fit required pixel rules.",
            },
            {
              title: "HEIC not opening",
              desc: "Convert HEIC photos to JPG for wider compatibility.",
            },
            {
              title: "WEBP rejected",
              desc: "Convert WEBP to JPG or PNG when services do not accept WEBP files.",
            },
            {
              title: "Instagram size preset",
              desc: "Use ready-made profile, feed, story, and reels dimension presets.",
            },
          ],
          whyTitle: "Why this works",
          whyList: [
            "No account required.",
            "No server storage for your files.",
            "Fast conversion with local browser processing.",
          ],
          cta: "Open image converter",
        },
        "compress-image": {
          heroTitle: "Compress images for upload limits",
          heroDesc: "When a file is too big for email or forms, compress it quickly in your browser.",
          section2Title: "Quick steps",
          section2List: [
            "Upload JPG, PNG, or WEBP files.",
            "Set quality and optional max dimensions.",
            "Download the compressed image.",
          ],
          section2Cta: "Start compressing now",
          section3Title: "Recommended defaults",
          section3List: [
            "Quality: 82 to 90 for balanced output.",
            "Keep aspect ratio enabled.",
            "Set width only when you must reduce pixels.",
          ],
          faqTitle: "FAQ",
          faqQuestions: [
            "Does compression lower image quality?",
            "Can I compress multiple files?",
            "Are files uploaded to a server?",
          ],
          faqAnswers: [
            "Some quality loss is expected for JPG compression, but moderate settings usually keep visuals acceptable.",
            "Yes. Upload multiple images and process them in one run.",
            "No. The conversion workflow is browser-based on this site.",
          ],
          relatedTitle: "Related tools",
          relatedLinks: [
            "Resize image dimensions",
            "Convert WEBP for compatibility",
            "Instagram size presets",
          ],
        },
        "resize-image": {
          heroTitle: "Resize images to the exact pixels you need",
          heroDesc: "Fix width and height mismatches before uploading to platforms with strict image requirements.",
          section2Title: "How to resize",
          section2List: [
            "Upload one or more images.",
            "Enter target width and height.",
            "Keep ratio on for safe scaling, then download.",
          ],
          section2Cta: "Open resize workflow",
          section3Title: "Common use cases",
          section3List: [
            "Website image dimensions.",
            "Marketplace and listing upload rules.",
            "Social media feed and story sizing.",
          ],
          faqTitle: "FAQ",
          faqQuestions: [
            "Will resizing change quality?",
            "Should I keep aspect ratio enabled?",
            "Can I resize transparent PNGs?",
          ],
          faqAnswers: [
            "Upscaling can reduce sharpness. Downscaling is typically cleaner and helps reduce file size.",
            "Yes for most cases. Disable it only when a platform requires exact dimensions regardless of distortion.",
            "Yes. Keep PNG output if you need transparency preserved.",
          ],
          relatedTitle: "Related tools",
          relatedLinks: [
            "Compress image size",
            "Instagram presets",
            "Convert WEBP files",
          ],
        },
        "heic-to-jpg": {
          heroTitle: "HEIC files not opening? Convert to JPG",
          heroDesc: "Turn HEIC or HEIF photos into JPG so they work in more apps, upload forms, and operating systems.",
          section2Title: "Batch conversion steps",
          section2List: [
            "Upload one or many HEIC files.",
            "Choose JPG output for broad compatibility.",
            "Convert and download the results.",
          ],
          section2Cta: "Convert HEIC to JPG",
          section3Title: "Why JPG output",
          section3List: [
            "Works across most websites and systems.",
            "Easy to share via email and chat tools.",
            "Supported by common office software.",
          ],
          faqTitle: "FAQ",
          faqQuestions: [
            "Can I keep original quality?",
            "Is HEIC better than JPG?",
            "Can I convert many files at once?",
          ],
          faqAnswers: [
            "You can choose high quality settings, but JPG is still a compressed format.",
            "HEIC can be more efficient, but JPG has wider compatibility in daily workflows.",
            "Yes. Batch processing is supported for image workflows.",
          ],
          relatedTitle: "Related tools",
          relatedLinks: [
            "Compress JPG after conversion",
            "Resize converted images",
            "Fit social media dimensions",
          ],
        },
        "webp-to-jpg": {
          heroTitle: "Convert WEBP when upload is rejected",
          heroDesc: "Some platforms still reject WEBP. Convert to JPG for compatibility, or PNG when transparency matters.",
          section2Title: "Best output choice",
          section2List: [
            "Use JPG for photos and broad compatibility.",
            "Use PNG when your WEBP image has transparent background.",
            "Compress after conversion if file size is still too large.",
          ],
          section2Cta: "Convert WEBP now",
          section3Title: "How to convert",
          section3List: [
            "Upload WEBP images.",
            "Select output format (JPG or PNG).",
            "Convert and download.",
          ],
          faqTitle: "FAQ",
          faqQuestions: [
            "Why do some tools reject WEBP?",
            "Will JPG keep transparency?",
            "Can I convert multiple WEBP files?",
          ],
          faqAnswers: [
            "Some legacy systems and upload forms only support JPG or PNG file types.",
            "No. JPG does not support transparency. Choose PNG when alpha channel is needed.",
            "Yes, batch conversion is available for image workflows.",
          ],
          relatedTitle: "Related tools",
          relatedLinks: [
            "Compress converted files",
            "Resize for upload requirements",
            "Use social presets",
          ],
        },
        "instagram-image-size": {
          heroTitle: "Instagram image dimensions that usually work",
          heroDesc: "Pick a preset and jump to the resize workflow. These are practical recommendation values.",
          cards: [
            { title: "Profile", desc: "320 x 320 px" },
            { title: "Feed square", desc: "1080 x 1080 px" },
            { title: "Feed portrait", desc: "1080 x 1350 px" },
            { title: "Story / Reels", desc: "1080 x 1920 px" },
          ],
          section3Title: "Workflow",
          section3List: [
            "Choose a preset card above.",
            "Upload your image and keep ratio when possible.",
            "Download and post.",
          ],
          faqTitle: "FAQ",
          faqQuestions: [
            "Do Instagram requirements change?",
            "Should I export as JPG or PNG?",
            "Can I optimize file size too?",
          ],
          faqAnswers: [
            "Yes. Platform guidance may evolve. Treat these as recommended working presets.",
            "JPG is usually sufficient for photos. Use PNG when transparency or graphics quality is important.",
            "Yes. After resizing, run compression for faster upload and better performance.",
          ],
          relatedTitle: "Related tools",
          relatedLinks: [
            "Custom resize workflow",
            "Compress before posting",
            "Convert WEBP if needed",
          ],
        },
      },
    },
    es: {
      labels: {
        language: "Idioma",
        navMain: "Navegacion principal",
        home: "Inicio",
        imageHub: "Imagen",
        imageExpert: "Imagen Experto",
        text: "Texto",
        audio: "Audio",
        video: "Video",
        compress: "Comprimir",
        resize: "Redimensionar",
        heic: "HEIC",
        webp: "WEBP",
        instagram: "Instagram",
      },
      homeContent: {
        heroTitle: "Todas las herramientas en un solo lugar",
        heroDesc: "Elige el flujo que coincide con tu tarea. Todo funciona en tu navegador.",
        listTitle: "Lo que ofrecemos",
        toolTitles: ["Herramientas de Imagen", "Herramientas de Texto", "Herramientas de Audio", "Herramientas de Video"],
        toolDescs: [
          "Rutas por necesidad para compresion, redimension, HEIC, WEBP y presets.",
          "Herramientas para JSON, CSV/TSV, Markdown y HTML.",
          "Recorta, aplica fade, normaliza y convierte audio en local.",
          "Convierte formato, recorta, redimensiona y extrae miniaturas en navegador.",
        ],
        toolShortcuts: [
          [
            { title: "Imagen > Hub", desc: "No sabes por donde empezar con conversion de imagen." },
            { title: "Imagen > Comprimir", desc: "El archivo es demasiado grande para limites de carga." },
            { title: "Imagen > Redimensionar", desc: "El ancho y alto no cumplen el requisito." },
            { title: "Imagen > HEIC a JPG", desc: "Tus fotos HEIC no se abren en el servicio." },
            { title: "Imagen > WEBP a JPG", desc: "La plataforma rechaza la carga de WEBP." },
            { title: "Imagen > Presets Instagram", desc: "Necesitas medidas rapidas para feed e historias." },
          ],
          [
            { title: "Texto > Hub", desc: "Elige el flujo de texto segun tu necesidad." },
            { title: "Texto > Limpiar", desc: "El texto pegado tiene espacios y saltos rotos." },
            { title: "Texto > Desarrollador", desc: "Necesitas utilidades JSON o encode/decode." },
            { title: "Texto > Contador", desc: "Revisa caracteres, palabras, lineas y bytes." },
            { title: "Texto > Mayus/Minus", desc: "Convierte mayusculas, minusculas y formatos." },
            { title: "Texto > Estructura", desc: "Ordena lineas, elimina duplicados y reestructura." },
            { title: "Texto > Especial", desc: "Filtra emoji, numeros o solo texto por idioma." },
          ],
          [{ title: "Audio > Convertidor", desc: "Recorta, aplica fade y convierte formato de audio." }],
          [{ title: "Video > Convertidor", desc: "Convierte formato, recorta, redimensiona y extrae miniatura." }],
        ],
        startTitle: "Rutas recomendadas",
        startList: [
          "Si eres nuevo, empieza en Inicio Imagen o Hub Texto.",
          "Usa el submenu de cada tarjeta para abrir la funcion exacta.",
          "Audio y video tienen espacios dedicados.",
        ],
      },
      pages: {
        "image-hub": {
          heroTitle: "Que necesitas resolver ahora?",
          heroDesc: "Elige tu situacion y ve directo al flujo correcto. Todo funciona en tu navegador.",
          cards: [
            { title: "Imagen muy grande", desc: "Comprime para adjuntos de correo, formularios y cargas." },
            { title: "Dimensiones incorrectas", desc: "Ajusta ancho y alto, manteniendo proporcion." },
            { title: "HEIC no abre", desc: "Convierte fotos HEIC a JPG para mas compatibilidad." },
            { title: "WEBP rechazado", desc: "Convierte WEBP a JPG o PNG cuando un servicio no lo acepta." },
            { title: "Presets para Instagram", desc: "Usa tamanos listos para perfil, feed, historia y reels." },
          ],
          whyTitle: "Por que funciona",
          whyList: [
            "No requiere cuenta.",
            "Sin almacenamiento en servidor.",
            "Conversion rapida en el navegador.",
          ],
          cta: "Abrir convertidor de imagen",
        },
        "compress-image": {
          heroTitle: "Comprime imagenes para limites de carga",
          heroDesc: "Si el archivo es muy grande para correo o formularios, comprimelo en el navegador.",
          section2Title: "Pasos rapidos",
          section2List: [
            "Sube archivos JPG, PNG o WEBP.",
            "Configura calidad y dimensiones maximas opcionales.",
            "Descarga la imagen comprimida.",
          ],
          section2Cta: "Comprimir ahora",
          section3Title: "Valores recomendados",
          section3List: [
            "Calidad: 82 a 90 para equilibrio.",
            "Mantener proporcion activado.",
            "Define ancho solo si debes reducir pixeles.",
          ],
          faqTitle: "FAQ",
          faqQuestions: [
            "La compresion reduce calidad?",
            "Puedo comprimir varios archivos?",
            "Se suben archivos al servidor?",
          ],
          faqAnswers: [
            "Con JPG puede haber algo de perdida, pero con ajustes medios suele verse bien.",
            "Si. Puedes subir varias imagenes y procesarlas en una ejecucion.",
            "No. El flujo de conversion funciona en el navegador.",
          ],
          relatedTitle: "Herramientas relacionadas",
          relatedLinks: [
            "Redimensionar imagen",
            "Convertir WEBP por compatibilidad",
            "Presets para Instagram",
          ],
        },
        "resize-image": {
          heroTitle: "Redimensiona imagenes a los pixeles exactos",
          heroDesc: "Corrige ancho y alto antes de subir a plataformas con reglas estrictas.",
          section2Title: "Como redimensionar",
          section2List: [
            "Sube una o varias imagenes.",
            "Ingresa ancho y alto objetivo.",
            "Activa mantener proporcion y descarga.",
          ],
          section2Cta: "Abrir flujo de redimension",
          section3Title: "Casos comunes",
          section3List: [
            "Dimensiones para sitios web.",
            "Reglas de carga en marketplaces.",
            "Tamano para feed e historias.",
          ],
          faqTitle: "FAQ",
          faqQuestions: [
            "Redimensionar cambia la calidad?",
            "Debo mantener proporcion activa?",
            "Puedo redimensionar PNG transparente?",
          ],
          faqAnswers: [
            "Escalar hacia arriba puede perder nitidez. Escalar hacia abajo suele verse mejor.",
            "Si, en la mayoria de casos. Desactivalo solo si necesitas medidas exactas.",
            "Si. Mantén salida PNG para conservar transparencia.",
          ],
          relatedTitle: "Herramientas relacionadas",
          relatedLinks: ["Comprimir imagen", "Presets de Instagram", "Convertir archivos WEBP"],
        },
        "heic-to-jpg": {
          heroTitle: "HEIC no abre? Convierte a JPG",
          heroDesc: "Convierte HEIC o HEIF a JPG para que funcione en mas apps y formularios.",
          section2Title: "Pasos para lote",
          section2List: [
            "Sube uno o varios archivos HEIC.",
            "Elige JPG para mayor compatibilidad.",
            "Convierte y descarga los resultados.",
          ],
          section2Cta: "Convertir HEIC a JPG",
          section3Title: "Por que JPG",
          section3List: [
            "Funciona en la mayoria de sistemas.",
            "Facil para correo y mensajeria.",
            "Compatible con software de oficina.",
          ],
          faqTitle: "FAQ",
          faqQuestions: [
            "Puedo mantener calidad original?",
            "HEIC es mejor que JPG?",
            "Puedo convertir muchos archivos?",
          ],
          faqAnswers: [
            "Puedes usar calidad alta, pero JPG sigue siendo formato comprimido.",
            "HEIC puede ser mas eficiente, pero JPG tiene mejor compatibilidad general.",
            "Si. El procesamiento por lotes esta disponible.",
          ],
          relatedTitle: "Herramientas relacionadas",
          relatedLinks: ["Comprimir JPG", "Redimensionar imagenes", "Ajustar tamano para redes"],
        },
        "webp-to-jpg": {
          heroTitle: "Convierte WEBP cuando una carga falla",
          heroDesc: "Algunas plataformas rechazan WEBP. Usa JPG por compatibilidad o PNG para transparencia.",
          section2Title: "Mejor salida",
          section2List: [
            "Usa JPG para fotos y compatibilidad amplia.",
            "Usa PNG si WEBP tiene fondo transparente.",
            "Comprime despues si el archivo sigue grande.",
          ],
          section2Cta: "Convertir WEBP ahora",
          section3Title: "Como convertir",
          section3List: [
            "Sube imagenes WEBP.",
            "Elige formato de salida (JPG o PNG).",
            "Convierte y descarga.",
          ],
          faqTitle: "FAQ",
          faqQuestions: [
            "Por que rechazan WEBP?",
            "JPG mantiene transparencia?",
            "Puedo convertir varios WEBP?",
          ],
          faqAnswers: [
            "Sistemas antiguos y algunos formularios solo aceptan JPG o PNG.",
            "No. JPG no soporta transparencia. Usa PNG si necesitas canal alfa.",
            "Si, hay conversion por lotes.",
          ],
          relatedTitle: "Herramientas relacionadas",
          relatedLinks: ["Comprimir archivos", "Redimensionar para carga", "Usar presets sociales"],
        },
        "instagram-image-size": {
          heroTitle: "Dimensiones de Instagram que suelen funcionar",
          heroDesc: "Elige un preset y abre el flujo de redimension con esos valores.",
          cards: [
            { title: "Perfil", desc: "320 x 320 px" },
            { title: "Feed cuadrado", desc: "1080 x 1080 px" },
            { title: "Feed vertical", desc: "1080 x 1350 px" },
            { title: "Historia / Reels", desc: "1080 x 1920 px" },
          ],
          section3Title: "Flujo",
          section3List: [
            "Elige una tarjeta de preset.",
            "Sube tu imagen y mantén proporcion cuando sea posible.",
            "Descarga y publica.",
          ],
          faqTitle: "FAQ",
          faqQuestions: [
            "Cambian los requisitos de Instagram?",
            "Debo exportar como JPG o PNG?",
            "Tambien puedo optimizar tamano?",
          ],
          faqAnswers: [
            "Si. La guia puede cambiar; usa estos valores como recomendacion practica.",
            "JPG suele bastar para fotos. Usa PNG para graficos o transparencia.",
            "Si. Despues de redimensionar, comprime para subir mas rapido.",
          ],
          relatedTitle: "Herramientas relacionadas",
          relatedLinks: ["Redimension personalizada", "Comprimir antes de publicar", "Convertir WEBP"],
        },
      },
    },
    zh: {
      labels: {
        language: "语言",
        navMain: "主导航",
        home: "首页",
        imageHub: "图片",
        imageExpert: "图片专家",
        text: "文本",
        audio: "音频",
        video: "视频",
        compress: "压缩",
        resize: "调整尺寸",
        heic: "HEIC",
        webp: "WEBP",
        instagram: "Instagram",
      },
      homeContent: {
        heroTitle: "一个页面查看全部转换功能",
        heroDesc: "按任务选择对应流程，所有处理都在浏览器内完成。",
        listTitle: "我们提供的功能",
        toolTitles: ["图片工具", "文本工具", "音频工具", "视频工具"],
        toolDescs: [
          "按场景进入压缩、改尺寸、HEIC、WEBP和预设流程。",
          "支持 JSON、CSV/TSV、Markdown、HTML 文本转换。",
          "本地完成裁剪、淡入淡出、归一化和格式转换。",
          "支持格式转换、裁剪、缩放和缩略图提取。",
        ],
        toolShortcuts: [
          [
            { title: "图片 > 主页", desc: "不确定从哪个图片功能开始时使用。" },
            { title: "图片 > 压缩", desc: "文件过大，无法通过上传限制。" },
            { title: "图片 > 调整尺寸", desc: "宽高不符合平台要求时使用。" },
            { title: "图片 > HEIC 转 JPG", desc: "HEIC 照片在当前服务无法打开。" },
            { title: "图片 > WEBP 转 JPG", desc: "旧平台不接受 WEBP 上传。" },
            { title: "图片 > Instagram 预设", desc: "你需要快速套用 feed/story/reels 尺寸。" },
          ],
          [
            { title: "文本 > 中心", desc: "按需求选择合适的文本工作流。" },
            { title: "文本 > 清理", desc: "粘贴文本出现空格和换行混乱时使用。" },
            { title: "文本 > 开发", desc: "需要 JSON 或编码解码转换时使用。" },
            { title: "文本 > 计数", desc: "实时查看字符、单词、行数和字节。" },
            { title: "文本 > 大小写", desc: "快速转换大写、小写和命名格式。" },
            { title: "文本 > 结构", desc: "排序、去重并重组列表结构。" },
            { title: "文本 > 特殊", desc: "过滤表情、数字或按语言筛选文本。" },
          ],
          [{ title: "音频 > 转换器", desc: "剪辑、淡入淡出、音量归一化和格式转换。" }],
          [{ title: "视频 > 转换器", desc: "格式转换、裁剪、缩放和缩略图提取。" }],
        ],
        startTitle: "推荐入口",
        startList: ["第一次使用建议先看图片主页或文本中心。", "每张卡片的子菜单可直接进入目标功能。", "音频和视频都提供独立工作区。"],
      },
      pages: {
        "image-hub": {
          heroTitle: "你现在要解决什么问题？",
          heroDesc: "按场景选择，直接进入对应流程。所有处理都在浏览器完成。",
          cards: [
            { title: "图片太大", desc: "用于邮件附件、表单和上传限制的压缩。" },
            { title: "尺寸不对", desc: "调整宽高并保持比例，满足像素要求。" },
            { title: "HEIC 打不开", desc: "将 HEIC 转为 JPG，提升兼容性。" },
            { title: "WEBP 被拒绝", desc: "当平台不支持 WEBP 时，转为 JPG 或 PNG。" },
            { title: "Instagram 预设", desc: "一键使用头像、动态、故事和 Reels 尺寸。" },
          ],
          whyTitle: "为什么有效",
          whyList: ["无需账号。", "不在服务器存储文件。", "浏览器本地处理，速度快。"],
          cta: "打开图片转换器",
        },
        "compress-image": {
          heroTitle: "为上传限制压缩图片",
          heroDesc: "当文件太大无法上传或发送邮件时，可在浏览器快速压缩。",
          section2Title: "快速步骤",
          section2List: ["上传 JPG、PNG 或 WEBP。", "设置质量和可选最大尺寸。", "下载压缩后的图片。"],
          section2Cta: "立即压缩",
          section3Title: "推荐默认值",
          section3List: ["质量 82 到 90 较均衡。", "保持比例建议开启。", "仅在需要时设置宽度降像素。"],
          faqTitle: "常见问题",
          faqQuestions: ["压缩会降低画质吗？", "可以批量压缩吗？", "文件会上传到服务器吗？"],
          faqAnswers: [
            "JPG 压缩会有一定损失，但中等设置通常观感仍然良好。",
            "可以。可一次上传多张图片处理。",
            "不会。本站转换流程在浏览器内完成。",
          ],
          relatedTitle: "相关工具",
          relatedLinks: ["调整图片尺寸", "WEBP 兼容转换", "Instagram 尺寸预设"],
        },
        "resize-image": {
          heroTitle: "将图片调整到精确像素",
          heroDesc: "在上传到有严格尺寸规则的平台前，先修正宽高。",
          section2Title: "如何调整",
          section2List: ["上传一张或多张图片。", "输入目标宽度和高度。", "保持比例后下载结果。"],
          section2Cta: "打开尺寸调整流程",
          section3Title: "常见场景",
          section3List: ["网站图片尺寸。", "电商平台上传规格。", "社交媒体动态和故事尺寸。"],
          faqTitle: "常见问题",
          faqQuestions: ["调整尺寸会影响质量吗？", "是否应开启保持比例？", "能调整透明 PNG 吗？"],
          faqAnswers: [
            "放大可能降低清晰度，缩小通常更清晰并且更省体积。",
            "大多数场景建议开启，仅在必须精确宽高时关闭。",
            "可以。若需透明背景请保持 PNG 输出。",
          ],
          relatedTitle: "相关工具",
          relatedLinks: ["压缩图片体积", "Instagram 预设", "转换 WEBP"],
        },
        "heic-to-jpg": {
          heroTitle: "HEIC 打不开？转成 JPG",
          heroDesc: "把 HEIC 或 HEIF 照片转为 JPG，兼容更多应用和上传表单。",
          section2Title: "批量步骤",
          section2List: ["上传一个或多个 HEIC 文件。", "选择 JPG 输出以获得更广兼容。", "转换并下载结果。"],
          section2Cta: "HEIC 转 JPG",
          section3Title: "为什么选 JPG",
          section3List: ["多数网站和系统都支持。", "便于邮件和聊天分享。", "常见办公软件兼容更好。"],
          faqTitle: "常见问题",
          faqQuestions: ["能保持原始质量吗？", "HEIC 比 JPG 更好吗？", "可以一次转换很多文件吗？"],
          faqAnswers: [
            "你可以选择高质量设置，但 JPG 仍是有损压缩格式。",
            "HEIC 效率更高，但 JPG 在日常场景兼容性更广。",
            "可以，支持批量转换流程。",
          ],
          relatedTitle: "相关工具",
          relatedLinks: ["转换后压缩 JPG", "调整转换后尺寸", "适配社交平台尺寸"],
        },
        "webp-to-jpg": {
          heroTitle: "上传被拒时转换 WEBP",
          heroDesc: "部分平台仍不支持 WEBP。可转 JPG 提高兼容，透明图建议用 PNG。",
          section2Title: "输出建议",
          section2List: ["照片优先用 JPG。", "带透明背景的 WEBP 建议用 PNG。", "若仍过大可再压缩。"],
          section2Cta: "立即转换 WEBP",
          section3Title: "转换步骤",
          section3List: ["上传 WEBP 图片。", "选择输出格式（JPG 或 PNG）。", "转换并下载。"],
          faqTitle: "常见问题",
          faqQuestions: ["为什么有些工具拒绝 WEBP？", "JPG 能保留透明吗？", "可以批量转换 WEBP 吗？"],
          faqAnswers: [
            "一些旧系统和上传表单只接受 JPG 或 PNG。",
            "不能。JPG 不支持透明，需透明请选 PNG。",
            "可以，支持批量转换。",
          ],
          relatedTitle: "相关工具",
          relatedLinks: ["压缩转换结果", "按上传要求调整尺寸", "使用社交预设"],
        },
        "instagram-image-size": {
          heroTitle: "常用 Instagram 图片尺寸",
          heroDesc: "选择预设后可直接进入尺寸调整流程。",
          cards: [
            { title: "头像", desc: "320 x 320 px" },
            { title: "方形动态", desc: "1080 x 1080 px" },
            { title: "竖版动态", desc: "1080 x 1350 px" },
            { title: "故事 / Reels", desc: "1080 x 1920 px" },
          ],
          section3Title: "流程",
          section3List: ["先选择上方预设卡片。", "上传图片并尽量保持比例。", "下载后发布。"],
          faqTitle: "常见问题",
          faqQuestions: ["Instagram 规格会变化吗？", "导出 JPG 还是 PNG？", "还能优化文件大小吗？"],
          faqAnswers: [
            "会。平台规则可能调整，这些值可作为实用推荐。",
            "照片通常用 JPG 即可，图形或透明需求可用 PNG。",
            "可以。先改尺寸，再压缩能更快上传。",
          ],
          relatedTitle: "相关工具",
          relatedLinks: ["自定义调整尺寸", "发布前压缩", "需要时转换 WEBP"],
        },
      },
    },
    ko: {
      labels: {
        language: "언어",
        navMain: "주요 내비게이션",
        home: "홈",
        imageHub: "이미지",
        imageExpert: "이미지 전문가",
        text: "텍스트",
        audio: "오디오",
        video: "비디오",
        compress: "압축",
        resize: "리사이즈",
        heic: "HEIC",
        webp: "WEBP",
        instagram: "인스타그램",
      },
      homeContent: {
        heroTitle: "모든 변환 기능을 한 곳에서",
        heroDesc: "작업에 맞는 흐름을 선택하세요. 모든 처리는 브라우저에서 실행됩니다.",
        listTitle: "제공 기능",
        toolTitles: ["이미지 도구", "텍스트 도구", "오디오 도구", "비디오 도구"],
        toolDescs: [
          "압축, 리사이즈, HEIC, WEBP, 프리셋을 상황별로 제공합니다.",
          "JSON, CSV/TSV, Markdown, HTML 텍스트 변환 도구를 제공합니다.",
          "트림, 페이드, 노멀라이즈, 포맷 변환을 로컬에서 처리합니다.",
          "포맷 변환, 트림, 크기 조절, 썸네일 추출을 지원합니다.",
        ],
        toolShortcuts: [
          [
            { title: "이미지 > 허브", desc: "어떤 이미지 기능부터 시작할지 모르겠을 때." },
            { title: "이미지 > 압축", desc: "파일이 너무 커서 업로드 제한에 걸릴 때." },
            { title: "이미지 > 리사이즈", desc: "가로/세로 픽셀 규격이 맞지 않을 때." },
            { title: "이미지 > HEIC to JPG", desc: "HEIC 파일이 열리지 않거나 업로드가 안 될 때." },
            { title: "이미지 > WEBP to JPG", desc: "WEBP 업로드가 거부되는 서비스일 때." },
            { title: "이미지 > 인스타그램", desc: "피드/스토리/릴스 규격이 바로 필요할 때." },
          ],
          [
            { title: "텍스트 > 허브", desc: "상황별 텍스트 도구를 먼저 고를 때." },
            { title: "텍스트 > 정리", desc: "복붙 텍스트 공백/줄바꿈이 깨졌을 때." },
            { title: "텍스트 > 개발", desc: "JSON 포맷이나 인코딩 변환이 필요할 때." },
            { title: "텍스트 > 카운터", desc: "글자/단어/줄 수를 실시간으로 확인할 때." },
            { title: "텍스트 > 대소문자", desc: "대문자, camelCase 등 케이스 변환이 필요할 때." },
            { title: "텍스트 > 구조", desc: "중복 제거, 정렬, 줄/쉼표 변환이 필요할 때." },
            { title: "텍스트 > 특수", desc: "이모지 제거, 숫자만/한글만 추출이 필요할 때." },
          ],
          [{ title: "오디오 > 변환기", desc: "트림, 페이드, 볼륨 정리, 포맷 변환이 필요할 때." }],
          [{ title: "비디오 > 변환기", desc: "포맷 변환, 잘라내기, 리사이즈, 썸네일 추출이 필요할 때." }],
        ],
        startTitle: "추천 시작 경로",
        startList: [
          "처음 사용하면 이미지 허브 또는 텍스트 허브부터 시작하세요.",
          "카드 하위 메뉴에서 필요한 기능으로 바로 이동하세요.",
          "오디오와 비디오는 전용 작업 공간이 제공됩니다.",
        ],
      },
      pages: {
        "image-hub": {
          heroTitle: "지금 어떤 문제를 해결해야 하나요?",
          heroDesc: "상황을 고르면 맞는 이미지 작업 흐름으로 바로 이동합니다. 모든 처리는 브라우저에서 실행됩니다.",
          cards: [
            { title: "이미지 용량이 큼", desc: "이메일 첨부, 폼 업로드 제한에 맞게 압축합니다." },
            { title: "크기 규격이 안 맞음", desc: "비율을 유지하며 가로/세로 픽셀을 맞춥니다." },
            { title: "HEIC가 안 열림", desc: "HEIC를 JPG로 바꿔 호환성을 높입니다." },
            { title: "WEBP 업로드 거부", desc: "서비스가 WEBP를 거부하면 JPG/PNG로 변환합니다." },
            { title: "인스타 규격 프리셋", desc: "프로필, 피드, 스토리, 릴스 크기를 바로 적용합니다." },
          ],
          whyTitle: "이 방식이 좋은 이유",
          whyList: ["회원가입 불필요", "서버 저장 없음", "브라우저 로컬 처리로 빠름"],
          cta: "이미지 변환기 열기",
        },
        "compress-image": {
          heroTitle: "업로드 제한에 맞게 이미지 압축",
          heroDesc: "파일이 너무 커서 메일/폼 업로드가 안 될 때 브라우저에서 바로 압축하세요.",
          section2Title: "빠른 단계",
          section2List: ["JPG, PNG, WEBP를 업로드합니다.", "품질과 필요 시 최대 크기를 설정합니다.", "압축된 이미지를 다운로드합니다."],
          section2Cta: "지금 압축하기",
          section3Title: "추천 기본값",
          section3List: ["품질 82~90이 균형적입니다.", "비율 유지는 켜두는 것을 권장합니다.", "픽셀 축소가 필요할 때만 너비를 지정하세요."],
          faqTitle: "FAQ",
          faqQuestions: ["압축하면 화질이 떨어지나요?", "여러 파일을 한 번에 압축할 수 있나요?", "파일이 서버로 업로드되나요?"],
          faqAnswers: [
            "JPG 압축은 일부 손실이 있지만 중간 설정이면 대체로 품질이 괜찮습니다.",
            "네. 여러 이미지를 한 번에 처리할 수 있습니다.",
            "아니요. 이 사이트는 브라우저 내 처리 방식입니다.",
          ],
          relatedTitle: "관련 도구",
          relatedLinks: ["이미지 크기 조절", "WEBP 호환 변환", "인스타 규격 프리셋"],
        },
        "resize-image": {
          heroTitle: "필요한 픽셀로 정확히 리사이즈",
          heroDesc: "플랫폼 업로드 규격에 맞게 가로/세로 값을 먼저 맞추세요.",
          section2Title: "리사이즈 방법",
          section2List: ["이미지 1개 이상 업로드", "목표 가로/세로 입력", "비율 유지 후 다운로드"],
          section2Cta: "리사이즈 흐름 열기",
          section3Title: "자주 쓰는 용도",
          section3List: ["웹사이트 이미지 규격", "마켓플레이스 업로드 규칙", "소셜 피드/스토리 사이즈"],
          faqTitle: "FAQ",
          faqQuestions: ["리사이즈하면 품질이 바뀌나요?", "비율 유지를 켜야 하나요?", "투명 PNG도 조절 가능한가요?"],
          faqAnswers: [
            "확대는 선명도가 떨어질 수 있고, 축소는 보통 더 깔끔합니다.",
            "대부분 켜는 것이 좋습니다. 정확한 고정 크기가 필요할 때만 끄세요.",
            "네. 투명 유지가 필요하면 PNG 출력으로 두세요.",
          ],
          relatedTitle: "관련 도구",
          relatedLinks: ["이미지 용량 압축", "인스타 프리셋", "WEBP 변환"],
        },
        "heic-to-jpg": {
          heroTitle: "HEIC가 안 열리나요? JPG로 변환",
          heroDesc: "HEIC/HEIF 사진을 JPG로 바꿔 더 많은 앱과 업로더에서 사용하세요.",
          section2Title: "배치 변환 단계",
          section2List: ["HEIC 파일 1개 이상 업로드", "호환성이 넓은 JPG 출력 선택", "변환 후 결과 다운로드"],
          section2Cta: "HEIC를 JPG로 변환",
          section3Title: "JPG를 쓰는 이유",
          section3List: ["대부분의 웹/시스템에서 동작", "메일/메신저 공유가 쉬움", "오피스 도구 호환성 우수"],
          faqTitle: "FAQ",
          faqQuestions: ["원본 품질 유지가 되나요?", "HEIC가 JPG보다 좋은가요?", "여러 파일 일괄 변환이 되나요?"],
          faqAnswers: [
            "고품질 설정은 가능하지만 JPG는 압축 포맷입니다.",
            "HEIC가 효율적일 수 있지만 JPG가 호환성은 더 넓습니다.",
            "네. 이미지 배치 변환을 지원합니다.",
          ],
          relatedTitle: "관련 도구",
          relatedLinks: ["변환 후 JPG 압축", "변환 이미지 크기 조절", "소셜 규격 맞추기"],
        },
        "webp-to-jpg": {
          heroTitle: "WEBP 업로드 실패 시 변환",
          heroDesc: "일부 플랫폼은 WEBP를 거부합니다. 호환용 JPG, 투명 필요 시 PNG를 사용하세요.",
          section2Title: "출력 선택 가이드",
          section2List: ["사진은 JPG 권장", "투명 배경 WEBP는 PNG 권장", "파일이 크면 변환 후 압축"],
          section2Cta: "WEBP 변환 시작",
          section3Title: "변환 방법",
          section3List: ["WEBP 이미지 업로드", "출력 형식 선택(JPG/PNG)", "변환 후 다운로드"],
          faqTitle: "FAQ",
          faqQuestions: ["왜 WEBP를 거부하나요?", "JPG가 투명을 유지하나요?", "WEBP 여러 개를 변환할 수 있나요?"],
          faqAnswers: [
            "구형 시스템이나 일부 업로더는 JPG/PNG만 허용합니다.",
            "아니요. JPG는 투명을 지원하지 않습니다. 투명은 PNG를 선택하세요.",
            "네. 배치 변환을 지원합니다.",
          ],
          relatedTitle: "관련 도구",
          relatedLinks: ["변환 파일 압축", "업로드 규격 리사이즈", "소셜 프리셋 사용"],
        },
        "instagram-image-size": {
          heroTitle: "실무에서 자주 쓰는 인스타 이미지 크기",
          heroDesc: "프리셋을 고르면 리사이즈 흐름으로 바로 이동합니다.",
          cards: [
            { title: "프로필", desc: "320 x 320 px" },
            { title: "피드 정사각", desc: "1080 x 1080 px" },
            { title: "피드 세로", desc: "1080 x 1350 px" },
            { title: "스토리 / 릴스", desc: "1080 x 1920 px" },
          ],
          section3Title: "사용 흐름",
          section3List: ["위 프리셋 카드 선택", "이미지 업로드 후 가능하면 비율 유지", "다운로드 후 게시"],
          faqTitle: "FAQ",
          faqQuestions: ["인스타 규격은 바뀌나요?", "JPG와 PNG 중 무엇을 써야 하나요?", "파일 용량도 최적화할 수 있나요?"],
          faqAnswers: [
            "네. 정책은 변할 수 있으니 이 값은 실용 권장값으로 보세요.",
            "사진은 JPG로 충분한 경우가 많고, 그래픽/투명은 PNG가 좋습니다.",
            "네. 리사이즈 후 압축하면 업로드가 더 빨라집니다.",
          ],
          relatedTitle: "관련 도구",
          relatedLinks: ["맞춤 리사이즈", "게시 전 압축", "필요 시 WEBP 변환"],
        },
      },
    },
    ja: {
      labels: {
        language: "言語",
        navMain: "メインナビゲーション",
        home: "ホーム",
        imageHub: "画像",
        imageExpert: "画像エキスパート",
        text: "テキスト",
        audio: "音声",
        video: "動画",
        compress: "圧縮",
        resize: "リサイズ",
        heic: "HEIC",
        webp: "WEBP",
        instagram: "Instagram",
      },
      homeContent: {
        heroTitle: "変換機能を1か所で確認",
        heroDesc: "目的に合うフローを選択してください。処理はすべてブラウザ内で完結します。",
        listTitle: "提供している機能",
        toolTitles: ["画像ツール", "テキストツール", "音声ツール", "動画ツール"],
        toolDescs: [
          "圧縮、リサイズ、HEIC、WEBP、プリセットを目的別に利用できます。",
          "JSON、CSV/TSV、Markdown、HTML の変換ツールです。",
          "トリム、フェード、正規化、形式変換をローカルで処理します。",
          "形式変換、トリム、リサイズ、サムネイル抽出に対応します。",
        ],
        toolShortcuts: [
          [
            { title: "画像 > ホーム", desc: "どの画像機能から始めるか迷うときに。" },
            { title: "画像 > 圧縮", desc: "ファイルが大きくアップロード制限にかかるとき。" },
            { title: "画像 > リサイズ", desc: "幅と高さの規格が合わないとき。" },
            { title: "画像 > HEIC から JPG", desc: "HEIC がサービスで開けないとき。" },
            { title: "画像 > WEBP から JPG", desc: "WEBP が非対応のプラットフォーム向け。" },
            { title: "画像 > Instagram プリセット", desc: "フィード/ストーリー/リールのサイズが必要なとき。" },
          ],
          [
            { title: "テキスト > ハブ", desc: "目的に合わせてテキストフローを選択。" },
            { title: "テキスト > 整形", desc: "貼り付けたテキストの空白や改行が崩れたとき。" },
            { title: "テキスト > 開発", desc: "JSON 整形やエンコード変換が必要なとき。" },
            { title: "テキスト > カウント", desc: "文字数、単語数、行数、バイト数を即確認。" },
            { title: "テキスト > ケース", desc: "大文字/小文字や命名形式を変換。" },
            { title: "テキスト > 構造", desc: "重複削除、並び替え、リスト再構成を行うとき。" },
            { title: "テキスト > 特殊", desc: "絵文字除去や数字/言語フィルタを使うとき。" },
          ],
          [{ title: "音声 > コンバーター", desc: "トリム、フェード、音量調整、形式変換。" }],
          [{ title: "動画 > コンバーター", desc: "形式変換、カット、リサイズ、サムネイル抽出。" }],
        ],
        startTitle: "おすすめの開始ルート",
        startList: [
          "初めてなら画像ホームまたはテキストハブから開始。",
          "各カードのサブメニューから目的機能へ直接移動できます。",
          "音声と動画は専用ワークスペースを用意しています。",
        ],
      },
      pages: {
        "image-hub": {
          heroTitle: "今すぐ解決したいことは？",
          heroDesc: "状況を選ぶだけで、最適な画像フローへすぐ移動できます。処理はすべてブラウザ内です。",
          cards: [
            { title: "画像サイズが大きい", desc: "メール添付やアップロード制限向けに圧縮します。" },
            { title: "サイズが合わない", desc: "縦横比を保ちながら必要なピクセルに調整します。" },
            { title: "HEIC が開けない", desc: "HEIC を JPG に変換して互換性を上げます。" },
            { title: "WEBP が拒否される", desc: "非対応サービス向けに JPG/PNG へ変換します。" },
            { title: "Instagram プリセット", desc: "プロフィール、フィード、ストーリー、リールのサイズを即適用。" },
          ],
          whyTitle: "この方法の利点",
          whyList: ["アカウント不要", "サーバー保存なし", "ブラウザ内ローカル処理で高速"],
          cta: "画像コンバーターを開く",
        },
        "compress-image": {
          heroTitle: "アップロード制限向けに画像圧縮",
          heroDesc: "メールやフォームでサイズ超過になる画像を、ブラウザで素早く圧縮します。",
          section2Title: "手順",
          section2List: ["JPG/PNG/WEBP をアップロード", "品質と必要なら最大サイズを設定", "圧縮画像をダウンロード"],
          section2Cta: "今すぐ圧縮",
          section3Title: "推奨設定",
          section3List: ["品質 82〜90 がバランス良好", "縦横比の維持はオン推奨", "ピクセル削減が必要な場合のみ幅を指定"],
          faqTitle: "FAQ",
          faqQuestions: ["圧縮で画質は下がりますか？", "複数ファイルを一度に圧縮できますか？", "ファイルはサーバーに送信されますか？"],
          faqAnswers: [
            "JPG 圧縮では多少の劣化がありますが、中程度設定なら見た目は維持しやすいです。",
            "はい。複数画像をまとめて処理できます。",
            "いいえ。変換はブラウザ内で実行されます。",
          ],
          relatedTitle: "関連ツール",
          relatedLinks: ["画像サイズを変更", "WEBP を互換変換", "Instagram サイズプリセット"],
        },
        "resize-image": {
          heroTitle: "必要なピクセルに正確にリサイズ",
          heroDesc: "厳しい投稿ルールがある前に、幅と高さを先に合わせます。",
          section2Title: "リサイズ方法",
          section2List: ["画像を1枚以上アップロード", "目標の幅と高さを入力", "縦横比を保ってダウンロード"],
          section2Cta: "リサイズフローを開く",
          section3Title: "よくある用途",
          section3List: ["Web画像の規格", "マーケットプレイスの投稿条件", "SNSフィード/ストーリー用サイズ"],
          faqTitle: "FAQ",
          faqQuestions: ["リサイズで画質は変わりますか？", "縦横比はオンがよいですか？", "透過PNGもリサイズできますか？"],
          faqAnswers: [
            "拡大はシャープさが落ちることがあり、縮小は一般的にきれいです。",
            "通常はオン推奨です。厳密な固定サイズが必要なときだけオフにしてください。",
            "はい。透過を残す場合は PNG 出力を選択してください。",
          ],
          relatedTitle: "関連ツール",
          relatedLinks: ["画像を圧縮", "Instagram プリセット", "WEBP を変換"],
        },
        "heic-to-jpg": {
          heroTitle: "HEIC が開けない？ JPG に変換",
          heroDesc: "HEIC/HEIF 写真を JPG に変換して、より多くのアプリやフォームで使えるようにします。",
          section2Title: "一括変換の手順",
          section2List: ["HEIC ファイルを1つ以上アップロード", "互換性の高い JPG を選択", "変換して結果をダウンロード"],
          section2Cta: "HEIC を JPG に変換",
          section3Title: "JPG を選ぶ理由",
          section3List: ["多くのサイト/OSで利用可能", "メールやチャット共有が簡単", "一般的な業務ツールと互換性が高い"],
          faqTitle: "FAQ",
          faqQuestions: ["元の品質は維持できますか？", "HEIC は JPG より優れていますか？", "複数ファイルを一度に変換できますか？"],
          faqAnswers: [
            "高品質設定は可能ですが、JPG は圧縮形式です。",
            "HEIC は効率が高い場合がありますが、日常利用では JPG の互換性が広いです。",
            "はい。画像の一括変換に対応しています。",
          ],
          relatedTitle: "関連ツール",
          relatedLinks: ["変換後に JPG を圧縮", "変換画像をリサイズ", "SNS向けサイズに調整"],
        },
        "webp-to-jpg": {
          heroTitle: "WEBP が拒否されるときの変換",
          heroDesc: "一部サービスはまだ WEBP 非対応です。互換重視なら JPG、透過が必要なら PNG を使います。",
          section2Title: "出力の選び方",
          section2List: ["写真は JPG が無難", "透過背景の WEBP は PNG 推奨", "サイズが大きい場合は変換後に圧縮"],
          section2Cta: "WEBP を変換",
          section3Title: "変換手順",
          section3List: ["WEBP 画像をアップロード", "出力形式を選択（JPG/PNG）", "変換してダウンロード"],
          faqTitle: "FAQ",
          faqQuestions: ["なぜ WEBP が拒否されますか？", "JPG は透過を保持できますか？", "複数 WEBP を変換できますか？"],
          faqAnswers: [
            "古いシステムや一部フォームは JPG/PNG のみ対応です。",
            "いいえ。JPG は透過非対応です。透過が必要なら PNG を選んでください。",
            "はい。一括変換に対応しています。",
          ],
          relatedTitle: "関連ツール",
          relatedLinks: ["変換ファイルを圧縮", "投稿要件に合わせてリサイズ", "SNSプリセットを使う"],
        },
        "instagram-image-size": {
          heroTitle: "実用的な Instagram 画像サイズ",
          heroDesc: "プリセットを選ぶと、そのままリサイズフローへ進めます。",
          cards: [
            { title: "プロフィール", desc: "320 x 320 px" },
            { title: "フィード正方形", desc: "1080 x 1080 px" },
            { title: "フィード縦長", desc: "1080 x 1350 px" },
            { title: "ストーリー / リール", desc: "1080 x 1920 px" },
          ],
          section3Title: "手順",
          section3List: ["上のプリセットを選択", "画像をアップロードし、可能なら縦横比を維持", "ダウンロードして投稿"],
          faqTitle: "FAQ",
          faqQuestions: ["Instagram の要件は変わりますか？", "JPG と PNG のどちらで書き出すべき？", "ファイルサイズも最適化できますか？"],
          faqAnswers: [
            "はい。仕様は変わる可能性があります。ここでは実用的な推奨値を使っています。",
            "写真は JPG が一般的です。グラフィックや透過には PNG を使ってください。",
            "はい。リサイズ後に圧縮するとアップロードが速くなります。",
          ],
          relatedTitle: "関連ツール",
          relatedLinks: ["カスタムリサイズ", "投稿前に圧縮", "必要なら WEBP 変換"],
        },
      },
    },
  };

  const state = {
    lang: "en",
  };

  const pageType = resolvePageType();
  const languageDom = ensureLanguagePicker();
  buildLanguageMenu(languageDom);
  bindLanguageEvents(languageDom);
  setLanguage(detectLanguage(), false, languageDom);

  trackEvent("view_page", { page_type: pageType });

  document.addEventListener("click", (event) => {
    const intentLink = event.target.closest("a[data-intent]");
    if (intentLink) {
      trackEvent("select_intent", {
        page_type: pageType,
        intent: intentLink.dataset.intent || "unknown",
      });
      return;
    }

    const recommendLink = event.target.closest("a[data-recommend]");
    if (recommendLink) {
      trackEvent("recommend_click", {
        page_type: pageType,
        target_page: recommendLink.dataset.recommend || "unknown",
      });
    }
  });

  function resolvePageType() {
    const path = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
    if (path === "/compress-image") return "compress-image";
    if (path === "/resize-image") return "resize-image";
    if (path === "/heic-to-jpg") return "heic-to-jpg";
    if (path === "/webp-to-jpg") return "webp-to-jpg";
    if (path === "/instagram-image-size") return "instagram-image-size";
    if (path === "/image") return "image-hub";
    return "home";
  }

  function trackEvent(eventName, payload) {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...payload });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }
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
    const next = COPY[langCode] ? langCode : "en";
    state.lang = next;
    if (persist) {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    }

    const currentLang = LANGUAGES.find((item) => item.code === next);
    if (currentLang && dom.flag && dom.label && dom.button) {
      dom.flag.textContent = currentLang.flag;
      dom.label.textContent = currentLang.short;
      dom.button.setAttribute("aria-label", getLabels().language);
    }

    document.documentElement.lang = next;
    applyCommonCopy();
    applyPageCopy();
  }

  function getCopy() {
    return COPY[state.lang] || COPY.en;
  }

  function getLabels() {
    return getCopy().labels || COPY.en.labels;
  }

  function applyCommonCopy() {
    const labels = getLabels();
    const topNav = document.querySelector(".topbar .tabs");
    if (topNav) {
      topNav.setAttribute("aria-label", labels.navMain);
    }

    document.querySelectorAll(".topbar .tabs a").forEach((link) => {
      const text = resolveLinkLabel(link.getAttribute("href"), labels);
      if (text) link.textContent = text;
    });

    document.querySelectorAll(".footer a").forEach((link) => {
      const text = resolveLinkLabel(link.getAttribute("href"), labels);
      if (text) link.textContent = text;
    });

    document.querySelectorAll(".image-subnav a").forEach((link) => {
      const text = resolveLinkLabel(link.getAttribute("href"), labels);
      if (text) link.textContent = text;
    });

    highlightActiveSubnav();
  }

  function resolveLinkLabel(href, labels) {
    if (!href) return "";
    if (href === "/") return labels.home;
    if (href === "/image/") return labels.imageHub;
    if (href === "/image-expert/") return labels.imageExpert;
    if (href === "/text/") return labels.text;
    if (href === "/audio/") return labels.audio;
    if (href === "/video/") return labels.video;
    if (href === "/#textSection") return labels.text;
    if (href === "/#audioSection") return labels.audio;
    if (href === "/#videoSection") return labels.video;
    if (href === "/compress-image/") return labels.compress;
    if (href === "/resize-image/") return labels.resize;
    if (href === "/heic-to-jpg/") return labels.heic;
    if (href === "/webp-to-jpg/") return labels.webp;
    if (href === "/instagram-image-size/") return labels.instagram;
    return "";
  }

  function highlightActiveSubnav() {
    const current = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
    document.querySelectorAll(".image-subnav .subnav-link").forEach((link) => {
      const href = (link.getAttribute("href") || "").replace(/\/+$/, "");
      const normalizedHref = href || "/";
      link.classList.toggle("is-active", normalizedHref === current);
    });
  }

  function applyPageCopy() {
    if (pageType === "home") {
      applyHomeCopy();
      return;
    }

    const pages = getCopy().pages || {};
    const page = pages[pageType] || (COPY.en.pages || {})[pageType];
    if (!page) return;

    if (pageType === "image-hub") {
      applyImageHubCopy(page);
      return;
    }

    if (pageType === "instagram-image-size") {
      applyInstagramCopy(page);
      return;
    }

    applyIntentPageCopy(page);
  }

  function applyHomeCopy() {
    const copy = getCopy().homeContent || COPY.en.homeContent;
    const fallback = COPY.en.homeContent;
    if (!copy) return;

    setText(".home-title", copy.heroTitle);
    setText(".home-desc", copy.heroDesc);
    setText(".home-list-title", copy.listTitle);

    const cards = document.querySelectorAll(".home-tool-grid .home-tool-card");
    cards.forEach((card, index) => {
      setTextNode(card.querySelector("h3"), copy.toolTitles[index]);
      setTextNode(card.querySelector("p"), copy.toolDescs[index]);

      const shortcuts = card.querySelectorAll(".home-shortcut");
      const shortcutCopy = (copy.toolShortcuts || [])[index];
      const fallbackShortcutCopy = (fallback.toolShortcuts || [])[index];
      shortcuts.forEach((link, subIndex) => {
        const strong = link.querySelector("strong");
        const desc = link.querySelector("span");
        const rawEntry = Array.isArray(shortcutCopy) ? shortcutCopy[subIndex] : undefined;
        const rawFallback = Array.isArray(fallbackShortcutCopy) ? fallbackShortcutCopy[subIndex] : undefined;
        const entry = normalizeShortcutEntry(rawEntry, rawFallback);
        if (!entry) return;
        if (strong) strong.textContent = entry.title;
        if (desc) desc.textContent = entry.desc;
      });
    });

    setText(".home-start-title", copy.startTitle);
    setListText(".home-start-list li", copy.startList);
  }

  function normalizeShortcutEntry(entry, fallback) {
    const fallbackTitle = fallback && typeof fallback.title === "string" ? fallback.title : "";
    const fallbackDesc = fallback && typeof fallback.desc === "string" ? fallback.desc : "";

    if (entry && typeof entry === "object") {
      return {
        title: typeof entry.title === "string" ? entry.title : fallbackTitle,
        desc: typeof entry.desc === "string" ? entry.desc : fallbackDesc,
      };
    }

    if (typeof entry === "string") {
      return {
        title: entry,
        desc: fallbackDesc,
      };
    }

    if (fallback && typeof fallback === "object") {
      return {
        title: fallbackTitle,
        desc: fallbackDesc,
      };
    }

    return null;
  }

  function applyImageHubCopy(page) {
    setText("main .hero h1", page.heroTitle);
    setText("main .hero p", page.heroDesc);

    const cards = document.querySelectorAll("main .link-grid .link-card");
    cards.forEach((card, index) => {
      const copy = page.cards[index];
      if (!copy) return;
      setTextNode(card.querySelector("h2"), copy.title);
      setTextNode(card.querySelector("p"), copy.desc);
    });

    setText("main > section:nth-of-type(3) h2", page.whyTitle);
    setListText("main > section:nth-of-type(3) li", page.whyList);
    setText("main > section:nth-of-type(3) .inline-cta", page.cta);
  }

  function applyIntentPageCopy(page) {
    setText("main .hero h1", page.heroTitle);
    setText("main .hero p", page.heroDesc);

    setText("main > section:nth-of-type(2) h2", page.section2Title);
    setListText("main > section:nth-of-type(2) li", page.section2List);
    setText("main > section:nth-of-type(2) .inline-cta", page.section2Cta);

    setText("main > section:nth-of-type(3) h2", page.section3Title);
    setListText("main > section:nth-of-type(3) li", page.section3List);

    setText("#faq h2", page.faqTitle);
    setListText("#faq h3", page.faqQuestions);
    setListText("#faq p", page.faqAnswers);

    setText("main > section:nth-of-type(5) h2", page.relatedTitle);
    setListText("main > section:nth-of-type(5) .related-links a", page.relatedLinks);
  }

  function applyInstagramCopy(page) {
    setText("main .hero h1", page.heroTitle);
    setText("main .hero p", page.heroDesc);

    const cards = document.querySelectorAll("main > section:nth-of-type(2) .link-card");
    cards.forEach((card, index) => {
      const copy = page.cards[index];
      if (!copy) return;
      setTextNode(card.querySelector("h2"), copy.title);
      setTextNode(card.querySelector("p"), copy.desc);
    });

    setText("main > section:nth-of-type(3) h2", page.section3Title);
    setListText("main > section:nth-of-type(3) li", page.section3List);

    setText("#faq h2", page.faqTitle);
    setListText("#faq h3", page.faqQuestions);
    setListText("#faq p", page.faqAnswers);

    setText("main > section:nth-of-type(5) h2", page.relatedTitle);
    setListText("main > section:nth-of-type(5) .related-links a", page.relatedLinks);
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

  function setListText(selector, list) {
    if (!Array.isArray(list)) return;
    const nodes = document.querySelectorAll(selector);
    nodes.forEach((node, index) => {
      if (typeof list[index] === "string") {
        node.textContent = list[index];
      }
    });
  }
})();
