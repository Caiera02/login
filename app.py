from flask import Flask, request, jsonify
import sqlite3
from flask_cors import CORS

app = Flask(__name__)

# Função para conectar ao banco de dados SQLite
def conectar_banco():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row  # Para retornar dicionários em vez de tuplas
    return conn

# Rota para autenticar o login
@app.route('/login', methods=['POST'])
def login():
    # Receber os dados do login (enviado via JSON)
    dados = request.json
    email = dados.get('username')
    senha = dados.get('password')
    
    if not email or not senha:
        return jsonify({'mensagem': 'Email e senha são obrigatórios!', 'status': 'falha'}), 400

    # Conectar ao banco de dados e verificar as credenciais
    conn = conectar_banco()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password))
    usuario = cursor.fetchone()
    conn.close()

    # Verificar se o usuário foi encontrado
    if usuario:
        return jsonify({'mensagem': 'Login bem-sucedido!', 'status': 'sucesso'})
    else:
        return jsonify({'mensagem': 'Email ou senha incorretos!', 'status': 'falha'}), 401

# Iniciar o servidor
if __name__ == '__main__':
    app.run(debug=True)
