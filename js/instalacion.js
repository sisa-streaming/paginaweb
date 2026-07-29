// ============================================
// INSTALACION.JS - Guías de instalación
// SISA STREAMING
// ============================================

const INSTALACION = {
    flujotv: {
        nombre: "Flujo TV",
        icono: "fa-solid fa-tv",
        descripcion: "Aplicación IPTV con canales en vivo, películas y series. Compatible con múltiples dispositivos.",
        dispositivos: {
            "📱 Celular Android": [
                { texto: "Descarga la aplicación desde:", enlace: "https://bitcc.net/flujo-mobile-v861" },
                { texto: "o desde:", enlace: "http://aftv.news/8613873" },
                { texto: "Abre la carpeta Descargas" },
                { texto: "Pulsa sobre el archivo APK descargado" },
                { texto: "Si aparece 'No se permite instalar aplicaciones desconocidas'" },
                { texto: "Ve a Configuración → Seguridad/Privacidad → Instalar aplicaciones desconocidas → Permitir" },
                { texto: "Regresa al APK y pulsa Instalar" },
                { texto: "Espera unos segundos y pulsa Abrir" },
                { texto: "Inicia sesión con el usuario y contraseña proporcionados" }
            ],
            "📺 Android TV / TV Box / Fire Stick": [
                { texto: "Instala la aplicación Downloader" },
                { texto: "Abre Downloader" },
                { texto: "Escribe cualquiera de estas opciones:" },
                { texto: "• Código Downloader:", codigo: "5822304" },
                { texto: "• URL:", enlace: "http://aftv.news/5822304" },
                { texto: "• URL:", enlace: "https://bitcc.net/flujo-tv-v861" },
                { texto: "Descarga el APK y selecciona Instalar" },
                { texto: "Pulsa Abrir e ingresa tus credenciales" }
            ],
            "💻 PC": [
                { texto: "Usa un emulador Android como BlueStacks o Nox" },
                { texto: "Instala la app desde el APK" },
                { texto: "Inicia sesión con tus credenciales" }
            ]
        },
        nota: "3 dispositivos simultáneos"
    },

    telelatino: {
        nombre: "Tele Latino",
        icono: "fa-solid fa-play-circle",
        descripcion: "Aplicación IPTV con canales latinos, películas y series. Dos versiones disponibles.",
        dispositivos: {
            "📱 Versión 5.39.1 (Revendedores)": [
                { texto: "Descargar desde:", enlace: "https://bit.ly/telelatino2026" },
                { texto: "O mediante Downloader con código:", codigo: "8849458" },
                { texto: "Descargar el APK" },
                { texto: "Instalar y abrir la aplicación" }
            ],
            "📱 Versión 5.46.7 (Con publicidad)": [
                { texto: "Descargar desde:", enlace: "http://aftv.news/2304825" },
                { texto: "O mediante Downloader con código:", codigo: "2304825" },
                { texto: "Descargar el APK" },
                { texto: "Instalar y abrir la aplicación" }
            ],
            "📱 Celulares Android": [
                { texto: "Descargar desde:", enlace: "http://aftv.news/4208187" },
                { texto: "Descargar el APK y abrir el archivo" },
                { texto: "Permitir aplicaciones desconocidas si es necesario" },
                { texto: "Instalar, Abrir e Iniciar sesión" }
            ],
            "💻 PC": [
                { texto: "No requiere instalación" },
                { texto: "Ingresa directamente desde:", enlace: "http://www.tele-latino.online" },
                { texto: "Inicia sesión con tu cuenta" }
            ]
        },
        nota: "3 dispositivos simultáneos"
    },

    stellatv: {
        nombre: "Stella TV",
        icono: "fa-solid fa-star",
        descripcion: "Aplicación IPTV con contenido en vivo y bajo demanda. Excelente relación calidad-precio.",
        dispositivos: {
            "📱 Celulares Android": [
                { texto: "Descarga desde:", enlace: "https://bit.ly/43hQCxU" },
                { texto: "Descargar el APK y abrir el archivo" },
                { texto: "Permitir aplicaciones desconocidas" },
                { texto: "Instalar, Abrir e Iniciar sesión" }
            ],
            "📺 Android TV / TV Box / Fire TV / PC": [
                { texto: "Descarga desde:", enlace: "https://bit.ly/stellatv0626" },
                { texto: "También puedes usar Downloader con código:", codigo: "2177080" },
                { texto: "Instalar Downloader y abrirlo" },
                { texto: "Escribir el código 2177080" },
                { texto: "Descargar, Instalar, Abrir e Iniciar sesión" },
                { texto: "⚠️ IMPORTANTE: Antes de iniciar sesión, verifica que la fecha, la hora y la conexión a Internet del dispositivo sean correctas." }
            ]
        },
        nota: "3 dispositivos simultáneos"
    },

    iptvsmarters: {
        nombre: "IPTV Smarters Pro",
        icono: "fa-solid fa-play",
        descripcion: "Reproductor IPTV profesional para todos los dispositivos. Interfaz moderna y fácil de usar.",
        dispositivos: {
            "📱 Celular Android": [
                { texto: "Descargar IPTV Smarters Pro desde Play Store" },
                { texto: "Instalar la aplicación y abrirla" },
                { texto: "Aceptar los términos" },
                { texto: "Seleccionar 'Xtream Codes API' o 'Lista M3U'" },
                { texto: "Ingresar las credenciales proporcionadas por el proveedor" },
                { texto: "Guardar la configuración y disfrutar" }
            ],
            "📺 Android TV / TV Box / Fire Stick": [
                { texto: "Instalar IPTV Smarters Pro desde la tienda de aplicaciones" },
                { texto: "Abrir la aplicación" },
                { texto: "Seleccionar el método de acceso" },
                { texto: "Ingresar usuario, contraseña y URL del servidor" },
                { texto: "Guardar y comenzar a disfrutar del servicio" }
            ],
            "💻 PC": [
                { texto: "Descargar la versión para Windows desde el sitio oficial de IPTV Smarters Pro" },
                { texto: "Ejecutar el instalador" },
                { texto: "Instalar y abrir el programa" },
                { texto: "Iniciar sesión con las credenciales del servicio IPTV" }
            ]
        },
        nota: "Multidispositivo"
    }
};

// ===== FUNCIÓN PARA RENDERIZAR INSTALACIONES =====
function renderInstalacion() {
    const grid = document.getElementById('instalacionGrid');
    if (!grid) return;
    
    const keys = Object.keys(INSTALACION);
    if (keys.length === 0) {
        grid.innerHTML = `<p style="text-align:center;color:var(--gray-dark);grid-column:1/-1;padding:40px 0;">📌 Próximamente más guías de instalación</p>`;
        return;
    }
    
    grid.innerHTML = keys.map(key => {
        const item = INSTALACION[key];
        return `
            <div class="instalacion-card">
                <div class="instalacion-header">
                    <i class="${item.icono || 'fa-solid fa-download'}"></i>
                    <h3>${item.nombre}</h3>
                </div>
                <p class="instalacion-desc">${item.descripcion || ''}</p>
                <div class="instalacion-body">
                    ${Object.keys(item.dispositivos).map(tipo => `
                        <div class="instalacion-categoria">
                            <h4>${tipo}</h4>
                            <ol>
                                ${item.dispositivos[tipo].map(d => `
                                    <li>
                                        ${d.texto || ''}
                                        ${d.enlace ? ` <a href="${d.enlace}" target="_blank" class="link-download">🔗 Enlace</a>` : ''}
                                        ${d.codigo ? ` <span class="codigo-downloader">📥 Código: ${d.codigo}</span>` : ''}
                                    </li>
                                `).join('')}
                            </ol>
                        </div>
                    `).join('')}
                </div>
                ${item.nota ? `<div class="instalacion-nota">📌 ${item.nota}</div>` : ''}
            </div>
        `;
    }).join('');
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', renderInstalacion);