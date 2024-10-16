// script.js
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Dados fictícios para o login (em um sistema real, você consultaria um banco de dados)
    const validUsername = 'admin';
    const validPassword = '123'

    // Capturando o que o usuário digitou
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Limpa a mensagem de erro antes de uma nova tentativa de login
    const errorMsg = document.getElementById('error-msg');
    errorMsg.textContent = '';

    // Verifica se o nome de usuário e a senha estão corretos
    if (username === validUsername && password === validPassword) {
        // Exibe uma mensagem de sucesso ou redireciona para outra página
        alert('Login bem-sucedido!');
        // loginMsg.textContent = 'Login bem-sucedido!';
        // alert(' Seja Bem vindo a mais uma assembleia');

        // Aqui você poderia redirecionar o usuário
        window.location.href = "live.html";
    } else {
        // Exibe uma mensagem de erro
        errorMsg.textContent = 'Usuario ou senha incorreta';
    }
});
