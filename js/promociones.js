// ============================================
// PROMOCIONES.JS - Promociones de Aniversario
// SISA STREAMING - 2 AÑOS
// ============================================

const PROMOCIONES = [
    // ==========================================
    // PROMOCIÓN 1: 15% OFF EXCLUSIVO PARA CLIENTES
    // ==========================================
    {
        id: 1,
        titulo: "🎉 15% OFF - Exclusivo para Clientes",
        descripcion: "Celebramos 2 AÑOS JUNTO A TI. Descuento especial para nuestros clientes.",
        fecha: "📅 Válido 4 y 5 de agosto",
        activa: true,
        icono: "fa-solid fa-gift",
        tipo: "descuento",
        destacado: true,
        beneficios: [
            "⚡ Entrega Inmediata",
            "🛡️ Servicio Garantizado",
            "🎧 Soporte 24/7",
            "👥 +200 Referencias Reales"
        ],
        restricciones: [
            "No acumulable con otras promociones.",
            "No aplica para Netflix ni para la promoción 'Max gratis'."
        ],
        botonTexto: "Aprovechar 15% OFF",
        color: "#D4AF37"
    },

    // ==========================================
    // PROMOCIÓN 2: COMPRA UNA, LLÉVATE HBO MAX GRATIS
    // ==========================================
    {
        id: 2,
        titulo: "🎁 Compra Una, Llévate HBO Max Gratis 15 Días",
        descripcion: "Del 3 al 5 de agosto. Compra una plataforma y llévate HBO Max gratis por 15 días.",
        fecha: "📅 Del 3 al 5 de agosto",
        activa: true,
        icono: "fa-solid fa-film",
        tipo: "bonificacion",
        destacado: true,
        beneficios: [
            "Disney+ $4,00 + HBO Max Gratis 15 Días",
            "Prime Video $2,50 + HBO Max Gratis 15 Días",
            "Paramount+ $3,50 + HBO Max Gratis 15 Días",
            "Spotify $3,50 + HBO Max Gratis 15 Días",
            "YouTube Premium $3,50 + HBO Max Gratis 15 Días"
        ],
        restricciones: [],
        botonTexto: "Aprovechar Oferta",
        color: "#8B5CF6"
    },

    // ==========================================
    // PROMOCIÓN 3: COMBOS DE ANIVERSARIO
    // ==========================================
    {
        id: 3,
        titulo: "🔥 Combos de Aniversario",
        descripcion: "Combos especiales con precios de aniversario. ¡Válido 6 y 7 de agosto!",
        fecha: "📅 Válido 6 y 7 de agosto",
        activa: true,
        icono: "fa-solid fa-star",
        tipo: "combo",
        destacado: true,
        combos: [
            { servicios: "Disney+ + YouTube Premium", normal: "7.50", oferta: "6.25" },
            { servicios: "Prime Video + Max", normal: "5.00", oferta: "4.50" },
            { servicios: "Paramount+ + Crunchyroll", normal: "5.50", oferta: "5.00" },
            { servicios: "IPTV Smarters + Disney+", normal: "9.00", oferta: "8.00" },
            { servicios: "ChatGPT + Canva", normal: "10.00", oferta: "9.00" },
            { servicios: "Stella TV + Spotify", normal: "8.50", oferta: "7.50" }
        ],
        restricciones: [],
        botonTexto: "Ver Combos",
        color: "#F59E0B"
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
    
    grid.innerHTML = promocionesActivas.map(promo => {
        let contenidoExtra = '';
        
        // === PROMOCIÓN 1: 15% OFF ===
        if (promo.tipo === 'descuento') {
            contenidoExtra = `
                <div class="promo-beneficios">
                    ${promo.beneficios.map(b => `<span class="promo-beneficio"><i class="fas fa-check-circle"></i> ${b}</span>`).join('')}
                </div>
                ${promo.restricciones.length > 0 ? `
                    <div class="promo-restricciones">
                        <i class="fas fa-exclamation-triangle"></i>
                        ${promo.restricciones.map(r => `<span>${r}</span>`).join('')}
                    </div>
                ` : ''}
            `;
        }
        
        // === PROMOCIÓN 2: HBO MAX GRATIS ===
        if (promo.tipo === 'bonificacion') {
            contenidoExtra = `
                <div class="promo-beneficios">
                    ${promo.beneficios.map(b => `<span class="promo-beneficio"><i class="fas fa-gift"></i> ${b}</span>`).join('')}
                </div>
            `;
        }
        
        // === PROMOCIÓN 3: COMBOS ===
        if (promo.tipo === 'combo') {
            contenidoExtra = `
                <div class="promo-combos">
                    ${promo.combos.map(combo => `
                        <div class="promo-combo-item">
                            <span class="combo-servicios">${combo.servicios}</span>
                            <div class="combo-precios">
                                <span class="combo-normal">$${combo.normal}</span>
                                <span class="combo-oferta">$${combo.oferta}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        return `
            <div class="promocion-card" style="border-color: ${promo.color};">
                <div class="promo-icon"><i class="${promo.icono || 'fa-solid fa-tag'}"></i></div>
                <h4>${promo.titulo}</h4>
                <p class="promo-descripcion">${promo.descripcion}</p>
                <div class="promo-fecha">${promo.fecha || ''}</div>
                <span class="promo-badge activa">🔥 Activa</span>
                ${contenidoExtra}
                <a href="https://wa.me/593967869653?text=Hola,%20quiero%20aprovechar%20la%20promoción:%20${encodeURIComponent(promo.titulo)}" 
                   target="_blank" class="promo-btn">
                    <i class="fab fa-whatsapp"></i> ${promo.botonTexto || 'Aprovechar'}
                </a>
            </div>
        `;
    }).join('');
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', renderPromociones);