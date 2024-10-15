from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Função para verificar as credenciais no banco de dados
def validate_login(username, password):
    # Conectar ao banco de dados SQLite
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    # Verificar se o usuário e senha correspondem
    cursor.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
    result = cursor.fetchone()
    conn.close()

    if result:
        return True
    else:
        return False

# Rota de login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()  # Capturar dados enviados pelo front-end
    username = data.get('username')
    password = data.get('password')

    if validate_login(username, password):
        return jsonify({"success": True, "message": "Login bem-sucedido!"})
    else:
        return jsonify({"success": False, "message": "Credenciais incorretas!"})

if __name__ == '__main__':
    app.run(debug=True)
