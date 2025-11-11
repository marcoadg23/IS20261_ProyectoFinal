// -------------------------------
// Cambio de pestañas
// -------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Quitar clases activas
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // Activar la pestaña seleccionada
            btn.classList.add('active');
            const target = document.getElementById(btn.dataset.tab);
            if (target) target.classList.add('active');
        });
    });

    // -------------------------------
    // Función para iniciar los relojes
    // -------------------------------
    function iniciarCuentaRegresiva(fechaObjetivo, idElemento) {
        const elemento = document.getElementById(idElemento);
        if (!elemento) return;

        const fecha = new Date(fechaObjetivo).getTime();

        function actualizar() {
            const ahora = new Date().getTime();
            const diferencia = fecha - ahora;

            if (diferencia <= 0) {
                elemento.textContent = "⏰ ¡Tiempo terminado!";
                clearInterval(intervalo);
                return;
            }

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            elemento.textContent = `Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }

        actualizar(); // Primera ejecución inmediata
        const intervalo = setInterval(actualizar, 1000);
    }

    // -------------------------------
    // Inicializar relojes
    // -------------------------------
    iniciarCuentaRegresiva("December 2, 2025 14:59:00", "count-expo");
    iniciarCuentaRegresiva("December 6, 2025 23:59:00", "count-written");
});

