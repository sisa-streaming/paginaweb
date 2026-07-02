// ============================================
// PRECIOS DE SISA STREAMING - ACTUALIZADO
// ============================================

const PRECIOS = {
    // ========== PLATAFORMAS DE STREAMING ==========
    
    netflix: {
        generico: {
            cuenta_completa: {
                "1 mes": "15.00",
                garantia: "30 días",
                renovable: true
            },
            perfil: {
                "1 mes": "4.00",
                renovable: false,
                nota: "1 perfil = 1 dispositivo"
            }
        }
    },

    flujotv: {
        completa: {
            "1 mes": "4.00",
            "2 meses": "7.00",
            "3 meses": "11.00",
            "6 meses + 1 mes gratis": "20.00",
            "12 meses + 2 meses gratis": "45.00"
        },
        renovable: true,
        nota: "3 dispositivos simultáneos"
    },

    stellatv: {
        completa: {
            "1 mes": "5.00",
            "2 meses": "9.00",
            "3 meses": "13.50",
            "6 meses + 1 mes gratis": "27.00",
            "12 meses + 2 meses gratis": "52.00"
        },
        renovable: true,
        nota: "3 dispositivos simultáneos"
    },

    hbomax: {
        generico: {
            cuenta_completa: {
                "1 mes": "6.00"
            },
            perfil: {
                "1 mes": "2.50",
                nota: "1 perfil = 1 dispositivo"
            }
        },
        renovable: true
    },

    primevideo: {
        generico: {
            cuenta_completa: {
                "1 mes": "6.00"
            },
            renovable: true
        },
        original: {
            cuenta_completa: {
                "1 mes": "8.00"
            },
            perfil: {
                "1 mes": "2.50",
                nota: "1 perfil = 1 dispositivo"
            },
            renovable: true
        }
    },

    spotify: {
        individual: {
            "1 mes": "3.50",
            "3 meses": "7.50"
        },
        renovable: true
    },

    disneyplus: {
        generico: {
            cuenta_completa: {
                "1 mes": "13.00"
            },
            perfil: {
                "1 mes": "4.00",
                nota: "1 perfil = 1 dispositivo. Incluye ESPN y fútbol (ESPN+)"
            }
        },
        original: {
            cuenta_completa: {
                "45 dias": "20.00"
            }
        }
    },

    crunchyroll: {
        generico: {
            cuenta_completa: {
                "1 mes": "8.00"
            }
        },
        original: {
            cuenta_completa: {
                "1 mes": "10.00",
                "12 meses": "45.00"
            }
        },
        perfil: {
            "1 mes": "2.00",
            "3 meses": "5.00",
            "12 meses": "18.00",
            nota: "1 perfil = 1 dispositivo"
        },
        renovable: true
    },

    paramountplus: {
        generico: {
            cuenta_completa: {
                "1 mes": "9.00"
            },
            perfil: {
                "1 mes": "3.50",
                nota: "1 perfil = 1 dispositivo"
            }
        },
        original: {
            cuenta_completa: {
                "1 mes": "11.00"
            },
            perfil: {
                "1 mes": "5.50",
                nota: "1 perfil = 1 dispositivo. Acceso desde ciertos televisores Vizio mediante canal integrado."
            }
        }
    },

    telelatino: {
        completa: {
            "1 mes": "5.00",
            "3 meses": "13.00",
            "6 meses": "25.00",
            "12 meses": "50.00"
        },
        renovable: true,
        nota: "3 dispositivos simultáneos"
    },

    iptvsmarters: {
        completa: {
            "1 mes": "5.00",
            "2 meses": "8.00",
            "3 meses": "12.00",
            "6 meses": "22.00",
            "12 meses": "48.00"
        },
        nota: "Compatible con TV/Android TV, FireStick, celular Android y PC"
    },

    youtubepremium: {
        individual: {
            "1 mes": "3.50"
        },
        nota: "Debe pasar cuenta Gmail nueva para su activación"
    },

    appletv: {
        completa: {
            "1 mes": "3.50",
            "3 meses": "8.50"
        },
        nota: "3 dispositivos simultáneos"
    },

    vixplus: {
        cuenta_completa: {
            "1 mes": "4.00"
        },
        perfil: {
            "1 mes": "1.50",
            nota: "1 perfil = 1 dispositivo"
        },
        renovable: true,
        nota: "4-5 dispositivos simultáneos"
    },

    canvapro: {
        "1 mes": "2.50",
        "3 meses": "5.00",
        "6 meses": "10.00",
        "12 meses": "15.00",
        renovable: true
    },

    capcutpro: {
        "1 mes": "5.00"
    },

    chatgptplus: {
        "1 mes": "7.50",
        nota: "Se entrega correo y contraseña. Renovable",
        renovable: true
    },

    geminiaipro: {
        "1 mes": "5.00",
        nota: "Activación al correo del cliente. Renovable",
        renovable: true
    },

    zappingpro: {
        cuenta_completa: {
            "1 mes": "16.00",
            nota: "2 dispositivos simultáneos en distintas IPs/ubicaciones, o 4 dispositivos simultáneos en la misma ubicación/hogar"
        },
        perfil: {
            "1 mes": "9.00",
            incluye: "Liga Pro-EC"
        }
    },

    // ========== VIDEOJUEGOS ==========
    
    freefire: {
        diamantes: {
            "100 + 10": "1.50",
            "310 + 31": "3.25",
            "520 + 52": "5.50",
            "1060 + 106": "10.00",
            "2180 + 218": "19.00",
            "5600 + 560": "45.00"
        },
        tarjetas: {
            "Semanal": "2.50",
            "Mensual": "10.00"
        }
    },

    roblox: {
        "300 Robux": "4.50",
        "465 Robux": "6.50",
        "500 Robux": "7.50",
        "1000 Robux": "13.50",
        "2000 Robux": "26.00",
        "5250 Robux": "59.00",
        "11000 Robux": "115.00",
        "24000 Robux": "225.00"
    },

    itunes: {
        "$5": "7.00",
        "$10": "12.50",
        "$20": "24.50",
        "$50": "57.00",
        "$100": "110.00"
    },

    playstation: {
        "$10": "12.00",
        "$20": "23.50",
        "$40": "45.50",
        "$50": "56.00",
        "$100": "109.00"
    },

    xbox: {
        "$10": "12.00",
        "$20": "23.50",
        "$50": "56.00",
        "$100": "109.00"
    },

    nintendo: {
        "$20": "23.50",
        "$50": "56.00"
    },

    steam: {
        "$5": "8.00",
        "$10": "14.50",
        "$20": "27.50"
    },

    bloodstrike: {
        "100 + 11": "1.50",
        "300 + 52": "3.75",
        "500 + 92": "6.00",
        "1000 + 210": "12.00",
        "2000 + 486": "23.00",
        "5000 + 1380": "56.00"
    },

    mobilelegends: {
        "78 + 8": "2.00",
        "156 + 16": "3.50",
        "234 + 23": "5.00",
        "625 + 81": "12.00",
        "1860 + 335": "33.00",
        "3099 + 589": "55.00",
        "4649 + 883": "77.00",
        "7740 + 1548": "128.00",
        "Pase Crepúsculo": "10.00",
        "Pase Semanal": "2.50"
    }
};