import sqlite3

# Conectar ao banco de dados (será criado se não existir)
conn = sqlite3.connect('users.db')

# Criar tabela de usuários
conn.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);
''')

# Inserir alguns usuários de exemplo
conn.execute("INSERT INTO users (username, password) VALUES ('admin', 'admin123')")
conn.execute("INSERT INTO users (username, password) VALUES ('user1', 'password1')")

conn.commit()
conn.close()

print("Banco de dados e tabela criados com sucesso!")
