// ============================================
// PROMOCIONES.JS - Promociones y novedades
// SISA STREAMING
// ============================================



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

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', renderPromociones);