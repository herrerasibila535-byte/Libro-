document.querySelectorAll('.sobre').forEach(sobre => {
    sobre.addEventListener('click', () => {
        const tipo = sobre.getAttribute('data-tipo');
        const mensajeID = sobre.getAttribute('data-mensaje');
        const hoy = new Date();

        if (tipo === 'fecha') {
            const fechaBloqueo = new Date(sobre.getAttribute('data-fecha'));
            
            // Si la fecha actual es menor a la fecha de desbloqueo
            if (hoy < fechaBloqueo) {
                const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
                const fechaLegible = fechaBloqueo.toLocaleDateString('es-ES', opciones);
                
                alert(`⚠️ Mensaje no disponible\n\nEste mensaje aún no está disponible. Estará disponible el ${fechaLegible}.`);
                return;
            }
        }

        // Si está disponible o la fecha ya pasó, mostramos el contenido
        abrirMensaje(mensajeID);
    });
});

function abrirMensaje(id) {
    const modal = document.getElementById('modal-mensaje');
    const texto = document.getElementById('texto-mensaje');
    
    // Aquí puedes definir los mensajes según el ID
    const mensajes = {
        "1": "Eres la persona más fuerte que conozco. Todo va a estar bien. ❤️",
        "2": "Mañana será un día mejor, descansa y no te presiones tanto.",
        "3": "¡Feliz aniversario! Gracias por cada momento a mi lado.",
        "4": "¡Feliz cumpleaños! Que hoy sea tan especial como tú."
    };

    texto.innerText = mensajes[id] || "Este es un mensaje secreto.";
    modal.style.display = "block";
}

// Cerrar el modal
document.querySelector('.cerrar').onclick = () => {
    document.getElementById('modal-mensaje').style.display = "none";
}
