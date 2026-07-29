// ===== INSTALACION.JS =====
// Guías de instalación para Flujo TV, Stella TV, Tele Latino e IPTV Smarters Pro

const INSTALACIONES = [
    {
        id: 'flujo-tv',
        nombre: 'Flujo TV',
        icono: 'fa-solid fa-tv',
        descripcion: 'Aplicación IPTV con canales en vivo, películas y series.',
        categorias: [
            {
                titulo: '📱 Instalación en Celular Android',
                pasos: [
                    'Descarga la aplicación desde: <a href="https://bitcc.net/flujo-mobile-v861" target="_blank">https://bitcc.net/flujo-mobile-v861</a> o <a href="http://aftv.news/8613873" target="_blank">http://aftv.news/8613873</a>',
                    'Abre la carpeta Descargas',
                    'Pulsa sobre el archivo APK descargado',
                    'Si aparece "No se permite instalar aplicaciones desconocidas", ve a Configuración → Seguridad/Privacidad → Instalar aplicaciones desconocidas → Permitir',
                    'Regresa al APK y pulsa Instalar',
                    'Espera unos segundos y pulsa Abrir',
                    'Inicia sesión con el usuario y contraseña proporcionados'
                ]
            },
            {
                titulo: '📺 Instalación en Android TV, TV Box y Fire Stick',
                pasos: [
                    'Instala la aplicación Downloader',
                    'Abre Downloader',
                    'Escribe cualquiera de estas opciones:',
                    '• Código: <strong>5822304</strong>',
                    '• URL: <a href="http://aftv.news/5822304" target="_blank">http://aftv.news/5822304</a>',
                    '• URL: <a href="https://bitcc.net/flujo-tv-v861" target="_blank">https://bitcc.net/flujo-tv-v861</a>',
                    'Descarga el APK y selecciona Instalar',
                    'Pulsa Abrir e ingresa tus credenciales'
                ]
            }
        ]
    },
    {
        id: 'tele-latino',
        nombre: 'Tele Latino',
        icono: 'fa-solid fa-play-circle',
        descripcion: 'Aplicación IPTV con canales latinos, películas y series.',
        categorias: [
            {
                titulo: '📱 Versión 5.39.1 (Revendedores) - Android TV',
                pasos: [
                    'Descargar desde: <a href="https://bit.ly/telelatino2026" target="_blank">https://bit.ly/telelatino2026</a>',
                    'O mediante Downloader con código: <strong>8849458</strong>'
                ]
            },
            {
                titulo: '📱 Versión 5.46.7 (Con publicidad) - Android TV',
                pasos: [
                    'Descargar desde: <a href="http://aftv.news/2304825" target="_blank">http://aftv.news/2304825</a>',
                    'O mediante Downloader con código: <strong>2304825</strong>'
                ]
            },
            {
                titulo: '📱 Celulares Android',
                pasos: [
                    'Descargar desde: <a href="http://aftv.news/4208187" target="_blank">http://aftv.news/4208187</a>',
                    'Descargar el APK y abrir el archivo',
                    'Permitir aplicaciones desconocidas si es necesario',
                    'Instalar, Abrir e Iniciar sesión'
                ]
            },
            {
                titulo: '💻 PC',
                pasos: [
                    'No requiere instalación',
                    'Ingresa directamente desde: <a href="http://www.tele-latino.online" target="_blank">http://www.tele-latino.online</a>',
                    'Inicia sesión con tu cuenta'
                ]
            }
        ]
    },
    {
        id: 'stella-tv',
        nombre: 'Stella TV',
        icono: 'fa-solid fa-star',
        descripcion: 'Aplicación IPTV con contenido en vivo y bajo demanda.',
        categorias: [
            {
                titulo: '📱 Celulares Android',
                pasos: [
                    'Descarga desde: <a href="https://bit.ly/43hQCxU" target="_blank">https://bit.ly/43hQCxU</a>',
                    'Descargar el APK y abrir el archivo',
                    'Permitir aplicaciones desconocidas',
                    'Instalar, Abrir e Iniciar sesión'
                ]
            },
            {
                titulo: '📺 Android TV, TV Box, Fire TV y PC',
                pasos: [
                    'Descarga desde: <a href="https://bit.ly/stellatv0626" target="_blank">https://bit.ly/stellatv0626</a>',
                    'También puedes usar Downloader con código: <strong>2177080</strong>',
                    'Instalar Downloader y abrirlo',
                    'Escribir el código 2177080',
                    'Descargar, Instalar, Abrir e Iniciar sesión',
                    '⚠️ <strong>Importante:</strong> Antes de iniciar sesión, verifica que la fecha, la hora y la conexión a Internet del dispositivo sean correctas.'
                ]
            }
        ]
    },
    {
        id: 'iptv-smarters',
        nombre: 'IPTV Smarters Pro',
        icono: 'fa-solid fa-play',
        descripcion: 'Reproductor IPTV profesional para todos los dispositivos.',
        categorias: [
            {
                titulo: '📱 Celular Android',
                pasos: [
                    'Descargar IPTV Smarters Pro desde Play Store',
                    'Instalar la aplicación y abrirla',
                    'Aceptar los términos',
                    'Seleccionar "Xtream Codes API" o "Lista M3U"',
                    'Ingresar las credenciales proporcionadas por el proveedor',
                    'Guardar la configuración y disfrutar'
                ]
            },
            {
                titulo: '📺 Android TV, TV Box y Fire Stick',
                pasos: [
                    'Instalar IPTV Smarters Pro desde la tienda de aplicaciones',
                    'Abrir la aplicación',
                    'Seleccionar el método de acceso',
                    'Ingresar usuario, contraseña y URL del servidor',
                    'Guardar y comenzar a disfrutar del servicio'
                ]
            },
            {
                titulo: '💻 PC',
                pasos: [
                    'Descargar la versión para Windows desde el sitio oficial de IPTV Smarters Pro',
                    'Ejecutar el instalador',
                    'Instalar y abrir el programa',
                    'Iniciar sesión con las credenciales del servicio IPTV'
                ]
            }
        ]
    }
];

// Función para renderizar las instalaciones
function renderInstalacion() {
    const grid = document.getElementById('instalacionGrid');
    if (!grid) return;
    
    let html = '';
    INSTALACIONES.forEach(inst => {
        html += `
            <div class="instalacion-card">
                <div class="instalacion-header">
                    <i class="${inst.icono}"></i>
                    <h3>${inst.nombre}</h3>
                </div>
                <p class="instalacion-desc">${inst.descripcion}</p>
                <div class="instalacion-body">
        `;
        
        inst.categorias.forEach(cat => {
            html += `
                <div class="instalacion-categoria">
                    <h4>${cat.titulo}</h4>
                    <ol>
            `;
            cat.pasos.forEach(paso => {
                html += `<li>${paso}</li>`;
            });
            html += `
                    </ol>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', renderInstalacion);