 // Lista de logins (normalmente isso viria de um banco de dados)
 const logins = [
    { username: "usuario1", password: "senha1" },
    { username: "usuario2", password: "senha2" },
    { username: "usuario3", password: "senha3" }
];

// Função para validar login
function validarLogin(usernameInput, passwordInput) {
    // Percorre a lista de logins
    for (let i = 0; i < logins.length; i++) {
        const login = logins[i];

        // Verifica se o nome de usuário e a senha estão corretas
        if (login.username === usernameInput && login.password === passwordInput) {
            return true; // Login válido
        }
    }
    return false; // Login inválido
}

// Captura o formulário e adiciona um listener para o evento 'submit'
const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

  
    // Captura os valores dos inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    errorMsg.textContent = '';

    // Verifica o login
    if (validarLogin(username, password)) {
        errorMsg.textContent = "Login bem-sucedido!";
        errorMsg.style.color = "green";
        window.location.href = "live.html";
    } else {
       errorMsg.textContent = "Nome de usuário ou senha incorretos.";
        mensagem.style.color = "red";
    }
});