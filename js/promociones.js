// ===== PROMOCIONES.JS =====
// Promociones y novedades de SISA STREAMING

const PROMOCIONES = [
    {
        id: 1,
        titulo: '🎉 Promo de Lanzamiento',
        descripcion: '2x1 en cuentas de streaming durante el primer mes. ¡Aprovecha ahora!',
        validez: '📅 Válido hasta el 31 de marzo',
        estado: '🔥 Activa',
        color: '#FFD700'
    },
    {
        id: 2,
        titulo: '🔥 Oferta Especial',
        descripcion: '15% de descuento en tu primera compra de cuentas originales.',
        validez: '📅 Válido hasta agotar stock',
        estado: '🔥 Activa',
        color: '#FF6B6B'
    },
    {
        id: 3,
        titulo: '📱 Recarga Móvil',
        descripcion: 'Combo de 3 meses de Spotify + YouTube Premium por solo $15.00',
        validez: '📅 Promoción exclusiva',
        estado: '🔥 Activa',
        color: '#4ECDC4'
    },
    {
        id: 4,
        titulo: '🎮 Gamer Pack',
        descripcion: 'Paquete especial de diamantes para Free Fire + Robux con 20% de descuento.',
        validez: '📅 Válido todo el mes',
        estado: '🔥 Activa',
        color: '#A78BFA'
    }
];

// Función para renderizar promociones
function renderPromociones() {
    const grid = document.getElementById('promocionesGrid');
    if (!grid) return;
    
    let html = '';
    PROMOCIONES.forEach(promo => {
        html += `
            <div class="promocion-card" style="border-left: 4px solid ${promo.color};">
                <div class="promocion-header">
                    <h3>${promo.titulo}</h3>
                    <span class="promocion-estado">${promo.estado}</span>
                </div>
                <p class="promocion-desc">${promo.descripcion}</p>
                <p class="promocion-validez">${promo.validez}</p>
                <a href="https://wa.me/593967869653?text=Hola,%20quiero%20aprovechar%20la%20promoción:%20${encodeURIComponent(promo.titulo)}" 
                   target="_blank" class="btn btn-primary btn-small">
                    <i class="fab fa-whatsapp"></i> Aprovechar
                </a>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', renderPromociones);