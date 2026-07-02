// ============================================
// REFERENCIAS DE CLIENTES - SISA STREAMING
// ============================================

const REFERENCIAS = [];

// Generar automáticamente del 001 al 250
for (let i = 1; i <= 250; i++) {
    const numero = String(i).padStart(3, '0');
    REFERENCIAS.push(`${numero}.jpg`);
}