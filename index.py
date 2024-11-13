from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para permitir solicitudes desde otros orígenes

# Variable para verificar si es el primer mensaje
first_message = True

# Ruta de bienvenida con método GET
@app.route('/chatbot/welcome', methods=['GET'])
def welcome():
    return jsonify({"response": "¡Hola! Bienvenido al chatbot. ¿En qué puedo ayudarte?"})

# Lógica básica para responder a los mensajes del chatbot
@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    global first_message
    user_input = request.json.get('message')
    
    if first_message:
        # Enviar mensaje de bienvenida solo en el primer mensaje
        response = {"response": "¡Hola! Bienvenido al chatbot. ¿En qué puedo ayudarte?"}
        first_message = False  # Marcar que el mensaje de bienvenida ya fue enviado
    else:
        # Aquí puedes agregar la lógica para responder a otros mensajes
        response = {"response": f"Recibí tu mensaje: {user_input}. ¿Algo más en lo que te pueda ayudar?"}

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)

