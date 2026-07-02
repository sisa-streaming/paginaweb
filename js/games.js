// ============================================
// VIDEOJUEGOS Y RECARGAS DE SISA STREAMING
// ============================================

const GAMES = {
    freefire: {
        nombre: "Free Fire",
        descripcion: "Diamantes y tarjetas para el battle royale más popular en móviles.",
        imagen: "freefire.png",
        categoria: "Battle Royale",
        productos: [
            { nombre: "100 + 10 Diamantes", precio: "1.50" },
            { nombre: "310 + 31 Diamantes", precio: "3.25" },
            { nombre: "520 + 52 Diamantes", precio: "5.50" },
            { nombre: "1060 + 106 Diamantes", precio: "10.00" },
            { nombre: "2180 + 218 Diamantes", precio: "19.00" },
            { nombre: "5600 + 560 Diamantes", precio: "45.00" },
            { nombre: "Tarjeta Semanal", precio: "2.50" },
            { nombre: "Tarjeta Mensual", precio: "10.00" }
        ]
    },
    roblox: {
        nombre: "Roblox",
        descripcion: "Robux para la plataforma de juegos más grande del mundo.",
        imagen: "roblox.png",
        categoria: "Plataforma",
        productos: [
            { nombre: "300 Robux", precio: "4.50" },
            { nombre: "465 Robux", precio: "6.50" },
            { nombre: "500 Robux", precio: "7.50" },
            { nombre: "1000 Robux", precio: "13.50" },
            { nombre: "2000 Robux", precio: "26.00" },
            { nombre: "5250 Robux", precio: "59.00" },
            { nombre: "11000 Robux", precio: "115.00" },
            { nombre: "24000 Robux", precio: "225.00" }
        ]
    },
    itunes: {
        nombre: "iTunes / Apple",
        descripcion: "Tarjetas de regalo para la App Store y servicios Apple.",
        imagen: "itunes.png",
        categoria: "Tarjetas",
        productos: [
            { nombre: "Tarjeta $5", precio: "7.00" },
            { nombre: "Tarjeta $10", precio: "12.50" },
            { nombre: "Tarjeta $20", precio: "24.50" },
            { nombre: "Tarjeta $50", precio: "57.00" },
            { nombre: "Tarjeta $100", precio: "110.00" }
        ]
    },
    playstation: {
        nombre: "PlayStation",
        descripcion: "Tarjetas PSN para la tienda de PlayStation.",
        imagen: "playstation.png",
        categoria: "Tarjetas",
        productos: [
            { nombre: "Tarjeta $10", precio: "12.00" },
            { nombre: "Tarjeta $20", precio: "23.50" },
            { nombre: "Tarjeta $40 (Solo PSN)", precio: "45.50" },
            { nombre: "Tarjeta $50", precio: "56.00" },
            { nombre: "Tarjeta $100", precio: "109.00" }
        ]
    },
    xbox: {
        nombre: "Xbox",
        descripcion: "Tarjetas para la tienda Xbox y Game Pass.",
        imagen: "xbox.png",
        categoria: "Tarjetas",
        productos: [
            { nombre: "Tarjeta $10", precio: "12.00" },
            { nombre: "Tarjeta $20", precio: "23.50" },
            { nombre: "Tarjeta $50", precio: "56.00" },
            { nombre: "Tarjeta $100", precio: "109.00" }
        ]
    },
    nintendo: {
        nombre: "Nintendo eShop",
        descripcion: "Tarjetas para la tienda digital de Nintendo Switch.",
        imagen: "nintendo.png",
        categoria: "Tarjetas",
        productos: [
            { nombre: "Tarjeta $20", precio: "23.50" },
            { nombre: "Tarjeta $50", precio: "56.00" }
        ]
    },
    steam: {
        nombre: "Steam Wallet",
        descripcion: "Crédito para la tienda de juegos Steam.",
        imagen: "steam.png",
        categoria: "Tarjetas",
        productos: [
            { nombre: "Tarjeta $5", precio: "8.00" },
            { nombre: "Tarjeta $10", precio: "14.50" },
            { nombre: "Tarjeta $20", precio: "27.50" }
        ]
    },
    bloodstrike: {
        nombre: "Blood Strike X ID",
        descripcion: "Oro y diamantes para este shooter de alta intensidad.",
        imagen: "bloodstrike.png",
        categoria: "Shooter",
        productos: [
            { nombre: "100 + 11 Oro", precio: "1.50" },
            { nombre: "300 + 52 Oro", precio: "3.75" },
            { nombre: "500 + 92 Oro", precio: "6.00" },
            { nombre: "1000 + 210 Oro", precio: "12.00" },
            { nombre: "2000 + 486 Oro", precio: "23.00" },
            { nombre: "5000 + 1380 Oro", precio: "56.00" }
        ]
    },
    mobilelegends: {
        nombre: "Mobile Legends X ID",
        descripcion: "Diamantes y pases para el MOBA más popular en móviles.",
        imagen: "mobilelegends.png",
        categoria: "MOBA",
        productos: [
            { nombre: "78 + 8 Diamantes", precio: "2.00" },
            { nombre: "156 + 16 Diamantes", precio: "3.50" },
            { nombre: "234 + 23 Diamantes", precio: "5.00" },
            { nombre: "625 + 81 Diamantes", precio: "12.00" },
            { nombre: "1860 + 335 Diamantes", precio: "33.00" },
            { nombre: "3099 + 589 Diamantes", precio: "55.00" },
            { nombre: "4649 + 883 Diamantes", precio: "77.00" },
            { nombre: "7740 + 1548 Diamantes", precio: "128.00" },
            { nombre: "Pase Crepúsculo", precio: "10.00" },
            { nombre: "Pase Semanal", precio: "2.50" }
        ]
    }
};