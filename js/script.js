// ============================================
// SISA STREAMING - FUNCIONALIDADES PRINCIPALES
// ============================================

// ===== CONTADOR DE VISITAS =====
function updateVisitorCount() {
    let count = localStorage.getItem('sisaVisits');
    if (count === null) {
        count = 1000;
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('sisaVisits', count);
    
    // Actualizar en la sección de estadísticas
    const visitorElement = document.getElementById('visitorCount');
    if (visitorElement) {
        visitorElement.textContent = count.toLocaleString();
    }
    
    // Actualizar en el footer
    const footerVisitor = document.getElementById('footerVisitorCount');
    if (footerVisitor) {
        footerVisitor.textContent = count.toLocaleString();
    }
}

// ===== MENÚ MÓVIL =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
});

// ===== HEADER SCROLL =====
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Botón volver arriba
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Volver arriba
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// ===== CONTADORES ANIMADOS =====
document.addEventListener('DOMContentLoaded', function() {
    const stats = document.querySelectorAll('.stat-number:not(#visitorCount)');
    let animated = false;
    
    const animateStats = () => {
        if (animated) return;
        const statsSection = document.querySelector('.stats');
        if (!statsSection) return;
        
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            animated = true;
            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                let current = 0;
                const increment = target / 60;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = target;
                    }
                };
                updateCounter();
            });
        }
    };
    
    window.addEventListener('scroll', animateStats);
    animateStats();
});

// ===== AÑO EN FOOTER =====
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('footerYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// ===== RENDERIZAR PLATAFORMAS =====
document.addEventListener('DOMContentLoaded', function() {
    renderApps('all');
    renderGames();
    renderInstalacion();
    renderTutoriales();
    renderPromociones();
    renderFAQ();
    renderReferencias(1);
    setupFilters();
    setupSearch();
    updateVisitorCount();
});

// ===== FILTROS =====
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderApps(this.getAttribute('data-filter'));
        });
    });
}

// ===== BUSCADOR =====
function setupSearch() {
    const searchApps = document.getElementById('searchApps');
    if (searchApps) {
        searchApps.addEventListener('input', function() {
            renderApps('all', this.value.toLowerCase());
        });
    }
    
    const searchGames = document.getElementById('searchGames');
    if (searchGames) {
        searchGames.addEventListener('input', function() {
            renderGames(this.value.toLowerCase());
        });
    }
    
    const searchReferencias = document.getElementById('searchReferencias');
    if (searchReferencias) {
        searchReferencias.addEventListener('input', function() {
            renderReferencias(1, this.value.toLowerCase());
        });
    }
}

// ===== RENDER APPS =====
function renderApps(categoria, busqueda = '') {
    const grid = document.getElementById('appsGrid');
    if (!grid) return;
    
    let apps = Object.keys(APPS).map(key => ({
        key: key,
        ...APPS[key]
    }));
    
    if (categoria !== 'all') {
        apps = apps.filter(app => app.categoria === categoria);
    }
    
    if (busqueda) {
        apps = apps.filter(app => 
            app.nombre.toLowerCase().includes(busqueda) ||
            app.descripcion.toLowerCase().includes(busqueda)
        );
    }
    
    if (apps.length === 0) {
        grid.innerHTML = `<p style="text-align:center;color:var(--gray-dark);grid-column:1/-1;padding:40px 0;">No se encontraron resultados</p>`;
        return;
    }
    
    grid.innerHTML = apps.map(app => `
        <div class="app-card" data-categoria="${app.categoria}">
            <img src="img/apps/${app.imagen || 'default.png'}" alt="${app.nombre}" class="app-card-img" loading="lazy">
            <div class="app-card-body">
                <h3>${app.nombre}</h3>
                <div class="app-category">${app.categoria}</div>
                <p>${app.descripcion.substring(0, 80)}${app.descripcion.length > 80 ? '...' : ''}</p>
                <div class="app-tags">
                    ${app.etiquetas ? app.etiquetas.map(tag => `<span class="app-tag ${tag.toLowerCase()}">${tag}</span>`).join('') : ''}
                </div>
                <button class="app-card-btn" onclick="openModal('${app.key}')">
                    <i class="fas fa-tag"></i> Ver Planes
                </button>
            </div>
        </div>
    `).join('');
}

// ===== RENDER GAMES =====
function renderGames(busqueda = '') {
    const grid = document.getElementById('gamesGrid');
    if (!grid) return;
    
    let games = Object.keys(GAMES).map(key => ({
        key: key,
        ...GAMES[key]
    }));
    
    if (busqueda) {
        games = games.filter(game => 
            game.nombre.toLowerCase().includes(busqueda)
        );
    }
    
    if (games.length === 0) {
        grid.innerHTML = `<p style="text-align:center;color:var(--gray-dark);grid-column:1/-1;padding:40px 0;">No se encontraron resultados</p>`;
        return;
    }
    
    grid.innerHTML = games.map(game => `
        <div class="game-card">
            <img src="img/apps/${game.imagen || 'default.png'}" alt="${game.nombre}" class="game-card-img" loading="lazy">
            <div class="game-card-body">
                <h3>${game.nombre}</h3>
                <div class="game-category">${game.categoria || 'Recarga'}</div>
                <p>${game.descripcion || ''}</p>
                <div class="game-products">
                    ${game.productos ? game.productos.slice(0, 4).map(p => 
                        `<span class="game-product">${p.nombre} <span class="price">$${p.precio}</span></span>`
                    ).join('') : ''}
                    ${game.productos && game.productos.length > 4 ? `<span class="game-product">+${game.productos.length - 4} más</span>` : ''}
                </div>
                <button class="game-card-btn" onclick="comprarGame('${game.key}')">
                    <i class="fab fa-whatsapp"></i> Comprar
                </button>
            </div>
        </div>
    `).join('');
}

// ===== RENDER INSTALACIÓN =====
function renderInstalacion() {
    const grid = document.getElementById('instalacionGrid');
    if (!grid || !INSTALACION) return;
    
    const keys = Object.keys(INSTALACION);
    if (keys.length === 0) {
        grid.innerHTML = `<p style="text-align:center;color:var(--gray-dark);grid-column:1/-1;padding:40px 0;">Próximamente más guías de instalación</p>`;
        return;
    }
    
    grid.innerHTML = keys.map(key => {
        const item = INSTALACION[key];
        return `
            <div class="instalacion-card">
                <h4>${item.nombre}</h4>
                ${Object.keys(item.dispositivos).map(tipo => `
                    <div class="dispositivo">
                        <strong>${tipo}</strong>
                        ${item.dispositivos[tipo].map(d => `
                            ${d.enlace ? `<a href="${d.enlace}" target="_blank">${d.texto}</a>` : `<span style="color:var(--gray-dark);">${d.texto}</span>`}
                            ${d.codigo ? `<span class="codigo">Código: ${d.codigo}</span>` : ''}
                        `).join('')}
                    </div>
                `).join('')}
                ${item.nota ? `<div class="nota">📌 ${item.nota}</div>` : ''}
            </div>
        `;
    }).join('');
}

// ===== RENDER TUTORIALES =====
function renderTutoriales() {
    const grid = document.getElementById('tutorialesGrid');
    if (!grid || !TUTORIALES) return;
    
    const keys = Object.keys(TUTORIALES);
    if (keys.length === 0) {
        grid.innerHTML = `<p style="text-align:center;color:var(--gray-dark);grid-column:1/-1;padding:40px 0;">Próximamente más tutoriales</p>`;
        return;
    }
    
    grid.innerHTML = keys.map(key => {
        const t = TUTORIALES[key];
        return `
            <div class="tutorial-card" onclick="openTutorial('${key}')">
                <h4>${t.titulo}</h4>
                <p>${t.descripcion || ''}</p>
                <ul class="tutorial-pasos">
                    ${t.pasos ? t.pasos.map(p => `<li>${p}</li>`).join('') : ''}
                </ul>
            </div>
        `;
    }).join('');
}

// ===== RENDER PROMOCIONES =====
function renderPromociones() {
    const grid = document.getElementById('promocionesGrid');
    if (!grid) return;
    
    // Verificar si existe PROMOCIONES y filtrar activas
    const promocionesActivas = PROMOCIONES ? PROMOCIONES.filter(p => p.activa === true) : [];
    
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
            ${promo.icono ? `<div class="promo-icon"><i class="${promo.icono}"></i></div>` : ''}
            <h4>${promo.titulo}</h4>
            <p>${promo.descripcion}</p>
            ${promo.fecha ? `<div class="promo-fecha">📅 ${promo.fecha}</div>` : ''}
            <span class="promo-badge activa">🔥 Activa</span>
        </div>
    `).join('');
}

// ===== RENDER FAQ =====
function renderFAQ() {
    const container = document.getElementById('faqContainer');
    if (!container || !FAQ) return;
    
    container.innerHTML = FAQ.map((item, index) => `
        <div class="faq-item">
            <button class="faq-question" onclick="toggleFAQ(this)">
                ${item.pregunta}
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
                <p>${item.respuesta}</p>
            </div>
        </div>
    `).join('');
}

// ===== TOGGLE FAQ =====
function toggleFAQ(btn) {
    const item = btn.closest('.faq-item');
    const isActive = item.classList.contains('active');
    
    // Cerrar todos
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
    
    if (!isActive) {
        item.classList.add('active');
    }
}

// ===== RENDER REFERENCIAS =====
let currentReferenciasPage = 1;
const referenciasPorPagina = 24;

function renderReferencias(page, busqueda = '') {
    const grid = document.getElementById('referenciasGrid');
    const pagination = document.getElementById('referenciasPagination');
    if (!grid || !REFERENCIAS) return;
    
    let referencias = REFERENCIAS;
    
    if (busqueda) {
        referencias = referencias.filter(ref => ref.toLowerCase().includes(busqueda));
    }
    
    const total = referencias.length;
    const totalPages = Math.ceil(total / referenciasPorPagina) || 1;
    currentReferenciasPage = Math.min(page, totalPages);
    
    const start = (currentReferenciasPage - 1) * referenciasPorPagina;
    const end = start + referenciasPorPagina;
    const pageRefs = referencias.slice(start, end);
    
    if (pageRefs.length === 0) {
        grid.innerHTML = `<p style="text-align:center;color:var(--gray-dark);grid-column:1/-1;padding:40px 0;">No se encontraron referencias</p>`;
        pagination.innerHTML = '';
        return;
    }
    
    grid.innerHTML = pageRefs.map(ref => `
        <div class="referencia-item">
            <img src="referencias/${ref}" alt="Referencia ${ref}" loading="lazy">
        </div>
    `).join('');
    
    // Paginación
    let pagHTML = '';
    if (totalPages > 1) {
        pagHTML += `<button onclick="renderReferencias(1)" ${currentReferenciasPage === 1 ? 'disabled' : ''}><i class="fas fa-chevron-left"></i></button>`;
        
        for (let i = 1; i <= Math.min(totalPages, 5); i++) {
            pagHTML += `<button onclick="renderReferencias(${i})" class="${i === currentReferenciasPage ? 'active' : ''}">${i}</button>`;
        }
        
        if (totalPages > 5) {
            pagHTML += `<span>...</span>`;
            pagHTML += `<button onclick="renderReferencias(${totalPages})">${totalPages}</button>`;
        }
        
        pagHTML += `<button onclick="renderReferencias(${currentReferenciasPage + 1})" ${currentReferenciasPage === totalPages ? 'disabled' : ''}><i class="fas fa-chevron-right"></i></button>`;
    }
    pagination.innerHTML = pagHTML;
}

// ===== OPEN MODAL =====
function openModal(appKey) {
    const modal = document.getElementById('planModal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;
    
    const app = APPS[appKey];
    const precios = PRECIOS[appKey];
    if (!app || !precios) return;
    
    let html = `
        <h3>${app.nombre}</h3>
        <p class="modal-sub">${app.descripcion}</p>
        <div style="margin:20px 0;padding:15px;background:var(--black);border-radius:8px;border:1px solid rgba(212,175,55,0.1);">
            <p style="color:var(--gray-dark);font-size:13px;margin:3px 0;"><strong>Dispositivos:</strong> ${app.dispositivos || 'N/A'}</p>
            <p style="color:var(--gray-dark);font-size:13px;margin:3px 0;"><strong>Incluye:</strong> ${app.incluye || 'N/A'}</p>
            <p style="color:var(--gray-dark);font-size:13px;margin:3px 0;"><strong>Calidad:</strong> ${app.calidad || 'N/A'}</p>
            <p style="color:var(--gray-dark);font-size:13px;margin:3px 0;"><strong>Compatibilidad:</strong> ${app.compatibilidad || 'N/A'}</p>
        </div>
        <h4 style="color:var(--gold);font-size:16px;margin:15px 0 10px;">📋 Planes disponibles:</h4>
    `;
    
    // Generar planes desde precios.js
    const tipos = Object.keys(precios);
    tipos.forEach(tipo => {
        if (tipo === 'nota') {
            html += `<p style="color:var(--gray-dark);font-size:13px;margin-top:10px;padding:10px;background:rgba(212,175,55,0.05);border-radius:8px;">📌 ${precios[tipo]}</p>`;
            return;
        }
        
        const plan = precios[tipo];
        if (typeof plan === 'object' && plan !== null) {
            const subTipos = Object.keys(plan);
            subTipos.forEach(sub => {
                const detalles = plan[sub];
                if (typeof detalles === 'object' && detalles !== null) {
                    const items = Object.keys(detalles);
                    items.forEach(item => {
                        if (item === 'garantia' || item === 'incluye' || item === 'nota') {
                            html += `<div style="padding:8px 12px;background:rgba(212,175,55,0.05);border-radius:6px;margin-bottom:8px;font-size:13px;color:var(--gray-dark);">
                                <span style="color:var(--gray);">${item}:</span> ${detalles[item]}
                            </div>`;
                        } else if (item !== 'renovable') {
                            const esRenovable = detalles.renovable || plan.renovable || false;
                            const garantia = detalles.garantia || 'Todo el plan';
                            html += `
                                <div class="modal-plan">
                                    <div>
                                        <span class="plan-name">${sub} - ${item}</span>
                                        ${esRenovable ? '<span class="plan-tag">🔄 Renovable</span>' : ''}
                                        <span style="font-size:11px;color:var(--gray-dark);display:block;">Garantía: ${garantia}</span>
                                    </div>
                                    <span class="plan-price">$${detalles[item]}</span>
                                </div>
                            `;
                        }
                    });
                } else if (typeof detalles === 'string' || typeof detalles === 'number') {
                    const esRenovable = plan.renovable || false;
                    html += `
                        <div class="modal-plan">
                            <div>
                                <span class="plan-name">${sub}</span>
                                ${esRenovable ? '<span class="plan-tag">🔄 Renovable</span>' : ''}
                            </div>
                            <span class="plan-price">$${detalles}</span>
                        </div>
                    `;
                }
            });
        }
    });
    
    // Botón WhatsApp
    const mensaje = encodeURIComponent(`Hola, quiero información sobre ${app.nombre}`);
    html += `
        <a href="https://wa.me/593967869653?text=${mensaje}" target="_blank" class="modal-whatsapp">
            <i class="fab fa-whatsapp"></i> Pedir por WhatsApp
        </a>
    `;
    
    body.innerHTML = html;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// ===== CLOSE MODAL =====
function closeModal() {
    const modal = document.getElementById('planModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Cerrar modal con Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// Cerrar modal click fuera
document.addEventListener('click', function(e) {
    const modal = document.getElementById('planModal');
    if (modal && e.target === modal) closeModal();
});

// ===== COMPRAR GAME =====
function comprarGame(gameKey) {
    const game = GAMES[gameKey];
    if (!game) return;
    const mensaje = encodeURIComponent(`Hola, quiero comprar ${game.nombre}`);
    window.open(`https://wa.me/593967869653?text=${mensaje}`, '_blank');
}

// ===== ABRIR TUTORIAL =====
function openTutorial(key) {
    const tutorial = TUTORIALES[key];
    if (!tutorial) return;
    const mensaje = encodeURIComponent(`Hola, necesito ayuda con ${tutorial.titulo}`);
    window.open(`https://wa.me/593967869653?text=${mensaje}`, '_blank');
}

// ===== FORMULARIO CONTACTO =====
function sendWhatsApp(event) {
    event.preventDefault();
    const name = document.getElementById('contactName')?.value || '';
    const message = document.getElementById('contactMessage')?.value || '';
    const texto = encodeURIComponent(`Hola, soy ${name}. ${message}`);
    window.open(`https://wa.me/593967869653?text=${texto}`, '_blank');
}

// ===== CONSOLA =====
console.log('🟡 SISA STREAMING cargado exitosamente');
console.log('📱 Contacto: 0967869653');
console.log('💻 Visita: https://sisa-streaming.github.io/paginaweb/');