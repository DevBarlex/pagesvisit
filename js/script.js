
const contadorElemento = document.getElementById('contadorVisitas');
const botonReset = document.getElementById('btnReestablecer');

function obtenerContador() {
    const contador = localStorage.getItem('visitas');
    return contador ? parseInt(contador, 10) : 0;
}


// Función para incrementar el contador
function incrementarContador() {
    let contador = obtenerContador();
    contador++;
    localStorage.setItem('visitas', contador);
    return contador;
}

// Función para reestablecer el contador
function resetearContador() {
    localStorage.setItem('visitas', 0);
    actualizarContador(1); // Inicia en 1 al recargar la página
}

// Función para actualizar el contador en la página
function actualizarContador(valor) {
    contadorElemento.textContent = valor;
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const nuevoContador = incrementarContador();
    actualizarContador(nuevoContador);
});

// Evento para resetear el contador
botonReset.addEventListener('click', resetearContador);