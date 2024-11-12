from flask import Flask, request, jsonify

app = Flask(__name__)

# Lógica básica para responder a los mensajes del chatbot
@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    user_input = request.json.get('message')
    
    # Aquí agregas la lógica para procesar el mensaje del usuario
    # Puedes usar técnicas sencillas o integrar un modelo de IA si prefieres
    response = {"response": f"Echo: {user_input}"}  # Respuesta de ejemplo
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
