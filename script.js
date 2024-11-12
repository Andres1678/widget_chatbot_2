async function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value;
    
    // Muestra el mensaje del usuario en el chat
    displayMessage("Usuario: " + message);
    userInput.value = '';

    // Envía el mensaje al servidor
    const response = await fetch('http://localhost:5000/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    });
    
    const data = await response.json();
    
    // Muestra la respuesta del chatbot
    displayMessage("Chatbot: " + data.response);
}

function displayMessage(text) {
    const messageContainer = document.getElementById("messages");
    const messageElement = document.createElement("p");
    messageElement.textContent = text;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
