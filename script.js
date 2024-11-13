document.addEventListener("DOMContentLoaded", function() {
    mostrarMensaje("¡Hola! Bienvenido al asistente virtual. ¿En qué puedo ayudarte?", "bot");
});

function mostrarMensaje(texto, clase) {
    const chatMessages = document.getElementById("chat-messages");
    const mensaje = document.createElement("div");
    mensaje.className = clase;

    // Si el mensaje es del bot, agrega un icono SVG al mensaje
    if (clase === "bot") {
        const icono = document.createElement("span");
        icono.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.753 14a2.25 2.25 0 0 1 2.25 2.25v.904A3.75 3.75 0 0 1 18.696 20c-1.565 1.344-3.806 2-6.696 2s-5.128-.656-6.69-2a3.75 3.75 0 0 1-1.306-2.843v-.908A2.25 2.25 0 0 1 6.254 14zM11.9 2.006L12 2a.75.75 0 0 1 .743.648l.007.102l-.001.749h3.5a2.25 2.25 0 0 1 2.25 2.25v4.505a2.25 2.25 0 0 1-2.25 2.25h-8.5a2.25 2.25 0 0 1-2.25-2.25V5.75A2.25 2.25 0 0 1 7.75 3.5l3.5-.001V2.75a.75.75 0 0 1 .649-.743L12 2zM9.749 6.5a1.25 1.25 0 1 0 0 2.498a1.25 1.25 0 0 0 0-2.498m4.493 0a1.25 1.25 0 1 0 0 2.498a1.25 1.25 0 0 0 0-2.498"/>
            </svg>`;
        icono.className = "icono-bot"; // Clase para estilos del icono
        mensaje.appendChild(icono);
    }

    // Crea el contenedor del texto y lo añade al mensaje
    const textoMensaje = document.createElement("span");
    textoMensaje.innerText = texto;
    mensaje.appendChild(textoMensaje);

    // Añade el mensaje al contenedor de chat
    chatMessages.appendChild(mensaje);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Desplaza hacia abajo en cada mensaje nuevo
}

function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const userMessage = messageInput.value.trim();

    if (userMessage) {
        // Mostrar el mensaje del usuario
        mostrarMensaje(userMessage, "user");
        messageInput.value = "";

        // Respuesta automática del bot con botones
        setTimeout(() => {
            // Mensaje del bot
            mostrarMensaje("Esta es una respuesta automática del bot. Elige una opción:", "bot");

            // Crear los botones de opciones
            const botones = ["Autenticación ServiceManager", "Opción 2", "Opción 3"]; // Opciones de botones
            botones.forEach(opcion => {
                // Crear el contenedor de botones
                const botonesContainer = document.createElement("div");
                botonesContainer.className = "botones-container";

                // Crear cada botón y asignar una función de respuesta
                const boton = document.createElement("button");
                boton.innerText = opcion;
                boton.className = "boton-opcion";
                boton.onclick = () => {
                    // Llamada cuando el usuario selecciona una opción
                    mostrarMensaje(`Has seleccionado: ${opcion}`, "user");
                    // Opcional: Aquí puedes agregar más lógica para manejar las respuestas
                };
                botonesContainer.appendChild(boton);
                // Añadir los botones al contenedor de mensajes
                document.getElementById("chat-messages").appendChild(botonesContainer);
            });
        }, 1000);
    }
}



