// ============================================
// PLATAFORMAS DE SISA STREAMING - ACTUALIZADO
// ============================================

const APPS = {
    netflix: {
        nombre: "Netflix",
        categoria: "streaming",
        descripcion: "La plataforma de streaming más popular del mundo con series, películas y documentales.",
        dispositivos: "Hasta 4 dispositivos",
        incluye: "Series, Películas, Documentales, Estrenos",
        calidad: "4K, HDR",
        compatibilidad: "TV, PC, Móvil, Tablet, FireStick",
        imagen: "netflix.png",
        etiquetas: ["Más vendido", "Renovable"]
    },
    disneyplus: {
        nombre: "Disney+",
        categoria: "streaming",
        descripcion: "Todo el universo Disney, Marvel, Star Wars, National Geographic y más. Incluye ESPN+ con fútbol.",
        dispositivos: "Hasta 4 dispositivos",
        incluye: "Disney, Marvel, Star Wars, National Geographic, FX, ESPN+",
        calidad: "4K, Dolby Vision",
        compatibilidad: "TV, PC, Móvil, Tablet, FireStick",
        imagen: "disney.png",
        etiquetas: ["Original", "Premium"]
    },
    primevideo: {
        nombre: "Prime Video",
        categoria: "streaming",
        descripcion: "Series y películas originales de Amazon, con contenido exclusivo.",
        dispositivos: "Hasta 3 dispositivos",
        incluye: "Series Originales, Películas, Deportes",
        calidad: "4K, HDR10+",
        compatibilidad: "TV, PC, Móvil, Tablet, FireStick",
        imagen: "prime.png",
        etiquetas: ["Renovable"]
    },
    hbomax: {
        nombre: "HBO Max",
        categoria: "streaming",
        descripcion: "Lo mejor de HBO, Warner Bros, DC, Cartoon Network y más.",
        dispositivos: "Hasta 3 dispositivos",
        incluye: "HBO, Warner Bros, DC, Cartoon Network",
        calidad: "4K, Dolby Atmos",
        compatibilidad: "TV, PC, Móvil, Tablet, FireStick",
        imagen: "hbomax.png",
        etiquetas: ["Renovable"]
    },
    crunchyroll: {
        nombre: "Crunchyroll",
        categoria: "streaming",
        descripcion: "El paraíso del anime con más de 1000 series y simulcast.",
        dispositivos: "Hasta 4 dispositivos",
        incluye: "Anime, Manga, Simulcast",
        calidad: "1080p, 4K",
        compatibilidad: "TV, PC, Móvil, Tablet, FireStick",
        imagen: "crunchyroll.png",
        etiquetas: ["Original", "Más vendido"]
    },
    paramountplus: {
        nombre: "Paramount+",
        categoria: "streaming",
        descripcion: "Series y películas de Paramount, CBS, MTV, Nickelodeon y más.",
        dispositivos: "Hasta 3 dispositivos",
        incluye: "Paramount, CBS, MTV, Nickelodeon, Comedy Central",
        calidad: "4K, HDR",
        compatibilidad: "TV, PC, Móvil, Tablet, FireStick, Vizio",
        imagen: "paramountplus.png",
        etiquetas: ["Genérico", "Original"]
    },
    appletv: {
        nombre: "Apple TV+",
        categoria: "streaming",
        descripcion: "Series y películas originales de Apple con producciones de alta calidad.",
        dispositivos: "Hasta 3 dispositivos",
        incluye: "Series Originales, Películas, Documentales",
        calidad: "4K, Dolby Vision",
        compatibilidad: "TV, PC, Móvil, Tablet, Apple",
        imagen: "appletv.png",
        etiquetas: ["Renovable"]
    },
    vixplus: {
        nombre: "Vix+",
        categoria: "streaming",
        descripcion: "Contenido en español con series, películas y deportes.",
        dispositivos: "4-5 dispositivos simultáneos",
        incluye: "Series, Películas, Deportes, Novelas",
        calidad: "HD, 4K",
        compatibilidad: "TV, PC, Móvil, Tablet, FireStick",
        imagen: "vixplus.png",
        etiquetas: ["Renovable"]
    },
    telelatino: {
        nombre: "Tele Latino",
        categoria: "iptv",
        descripcion: "Canales de televisión latinoamericanos en vivo y bajo demanda.",
        dispositivos: "3 dispositivos simultáneos",
        incluye: "Canales Latinoamericanos, Deportes, Noticias",
        calidad: "HD, 4K",
        compatibilidad: "TV/Android TV, FireStick, Móvil, PC",
        imagen: "telelatino.png",
        etiquetas: ["IPTV", "Renovable"]
    },
    flujotv: {
        nombre: "Flujo TV",
        categoria: "iptv",
        descripcion: "Servicio IPTV con canales internacionales y contenido bajo demanda.",
        dispositivos: "3 dispositivos simultáneos",
        incluye: "Canales Internacionales, Deportes, Películas",
        calidad: "HD, 4K",
        compatibilidad: "TV/Android TV, FireStick, Móvil, PC",
        imagen: "flujotv.png",
        etiquetas: ["IPTV", "Más vendido"]
    },
    stellatv: {
        nombre: "Stella TV",
        categoria: "iptv",
        descripcion: "IPTV con la mejor relación calidad-precio y amplia variedad de canales.",
        dispositivos: "3 dispositivos simultáneos",
        incluye: "Canales Internacionales, Deportes, Series",
        calidad: "HD, 4K",
        compatibilidad: "TV/Android TV, FireStick, Móvil, PC",
        imagen: "stellatv.png",
        etiquetas: ["IPTV", "Renovable"]
    },
    iptvsmarters: {
        nombre: "IPTV Smarters Pro",
        categoria: "iptv",
        descripcion: "Aplicación profesional para IPTV con interfaz moderna y fácil uso.",
        dispositivos: "Multidispositivo",
        incluye: "Lista IPTV, EPG, Grabación",
        calidad: "HD, 4K",
        compatibilidad: "TV/Android TV, FireStick, Móvil, PC",
        imagen: "iptvsmarters.png",
        etiquetas: ["IPTV", "Pro"]
    },
    zappingpro: {
        nombre: "Zapping Pro",
        categoria: "iptv",
        descripcion: "Servicio IPTV con Liga Pro-EC y canales deportivos exclusivos.",
        dispositivos: "2 o 4 dispositivos según plan",
        incluye: "Liga Pro-EC, Deportes, Canales Premium",
        calidad: "HD, 4K",
        compatibilidad: "TV/Android TV, FireStick, Móvil, PC",
        imagen: "zapping.png",
        etiquetas: ["IPTV", "Liga Pro-EC"]
    },
    youtubepremium: {
        nombre: "YouTube Premium",
        categoria: "musica",
        descripcion: "YouTube sin anuncios, descargas y YouTube Music incluido.",
        dispositivos: "1 usuario",
        incluye: "Sin anuncios, YouTube Music, Descargas",
        calidad: "4K, HDR",
        compatibilidad: "PC, Móvil, Tablet",
        imagen: "youtubepremium.png",
        etiquetas: ["Música"]
    },
    spotify: {
        nombre: "Spotify",
        categoria: "musica",
        descripcion: "El servicio de música en streaming más popular del mundo.",
        dispositivos: "1 usuario",
        incluye: "Música ilimitada, Podcasts, Listas",
        calidad: "Hasta 320kbps",
        compatibilidad: "PC, Móvil, Tablet",
        imagen: "spotify.png",
        etiquetas: ["Música", "Más vendido", "Renovable"]
    },
    canvapro: {
        nombre: "Canva Pro",
        categoria: "productividad",
        descripcion: "Diseño gráfico profesional con miles de plantillas y recursos.",
        dispositivos: "1 usuario",
        incluye: "Plantillas, Fuentes, Elementos, IA",
        calidad: "Exportación en alta calidad",
        compatibilidad: "Web, Móvil, Tablet",
        imagen: "canva.png",
        etiquetas: ["Diseño", "Productividad", "Renovable"]
    },
    capcutpro: {
        nombre: "CapCut Pro",
        categoria: "productividad",
        descripcion: "Editor de video profesional para redes sociales con herramientas avanzadas.",
        dispositivos: "1 usuario",
        incluye: "Edición, Efectos, Transiciones, IA",
        calidad: "Exportación 4K",
        compatibilidad: "Móvil, PC",
        imagen: "capcut.png",
        etiquetas: ["Edición", "Video"]
    },
    chatgptplus: {
        nombre: "ChatGPT Plus",
        categoria: "ia",
        descripcion: "Modelo de IA avanzado con acceso a GPT-4 y funciones premium.",
        dispositivos: "1 usuario",
        incluye: "GPT-4, Plugins, Web Browsing",
        calidad: "IA de última generación",
        compatibilidad: "Web, Móvil",
        imagen: "chatgpt.png",
        etiquetas: ["IA", "Renovable"]
    },
    geminiaipro: {
        nombre: "Gemini AI Pro",
        categoria: "ia",
        descripcion: "Asistente de IA de Google con capacidades avanzadas de razonamiento.",
        dispositivos: "1 usuario",
        incluye: "Razonamiento Avanzado, Integración Google",
        calidad: "IA de última generación",
        compatibilidad: "Web, Móvil",
        imagen: "gemini.png",
        etiquetas: ["IA", "Renovable"]
    }
};