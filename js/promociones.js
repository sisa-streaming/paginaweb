// ============================================
// PROMOCIONES.JS - Promociones y novedades
// SISA STREAMING
// ============================================

const PROMOCIONES = [
    {
        id: 1,
        titulo: "🎉 Promo de Lanzamiento",
        descripcion: "2x1 en cuentas de streaming durante el primer mes. ¡Aprovecha ahora!",
        fecha: "Válido hasta el 31 de marzo",
        activa: true,
        icono: "fa-solid fa-gift"
    },
    {
        id: 2,
        titulo: "🔥 Oferta Especial",
        descripcion: "15% de descuento en tu primera compra de cuentas originales.",
        fecha: "Válido hasta agotar stock",
        activa: true,
        icono: "fa-solid fa-fire"
    },
    {
        id: 3,
        titulo: "📱 Recarga Móvil",
        descripcion: "Combo de 3 meses de Spotify + YouTube Premium por solo $15.00",
        fecha: "Promoción exclusiva",
        activa: true,
        icono: "fa-solid fa-mobile-screen"
    },
    {
        id: 4,
        titulo: "🎮 Gamer Pack",
        descripcion: "Paquete especial de diamantes para Free Fire + Robux con 20% de descuento.",
        fecha: "Válido todo el mes",
        activa: true,
        icono: "fa-solid fa-gamepad"
        
    }
];

// ===== FUNCIÓN PARA RENDERIZAR PROMOCIONES =====
function renderPromociones() {
    const grid = document.getElementById('promocionesGrid');
    if (!grid) return;
    
    const promocionesActivas = PROMOCIONES.filter(p => p.activa === true);
    
    if (promocionesActivas.length === 0) {
        grid.innerHTML = `
            <div class="promociones-mensaje">
                <i class="fas fa-gift"></i>
                <h3>¡Próximamente!</h3>
                <p>Estamos preparando promociones especiales para ti. <br>¡No te las pierdas!</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = promocionesActivas.map(promo => `
        <div class="promocion-card">
            <div class="promo-icon"><i class="${promo.icono || 'fa-solid fa-tag'}"></i></div>
            <h4>${promo.titulo}</h4>
            <p>${promo.descripcion}</p>
            <div class="promo-fecha">📅 ${promo.fecha || ''}</div>
            <span class="promo-badge activa">🔥 Activa</span>
            <a href="https://wa.me/593967869653?text=Hola,%20quiero%20aprovechar%20la%20promoción:%20${encodeURIComponent(promo.titulo)}" 
               target="_blank" class="promo-btn">
                <i class="fab fa-whatsapp"></i> Aprovechar
            </a>
        </div>
    `).join('');
}