from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)

# 🔥 habilitar CORS BIEN
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def home():
    return "Microservicio de división activo 🚀"

# 👇 IMPORTANTE: incluir OPTIONS para preflight
@app.route('/dividir', methods=['POST', 'OPTIONS'])
def dividir():
    if request.method == 'OPTIONS':
        return '', 200  # responde preflight

    try:
        data = request.get_json()

        num1 = float(data['num1'])
        num2 = float(data['num2'])

        if num2 == 0:
            return jsonify({"error": "No se puede dividir por cero"}), 400

        resultado = num1 / num2

        return jsonify({"resultado": resultado})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 3000)))
