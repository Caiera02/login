document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    //Dados fictícios para o login (em um sistema real, você consultaria um banco de dados)
    const validUsername = 'admin';
    const validPassword = '123';

    //Capturando o que o usuário digitou
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Limpa a mensagem de erro antes de uma nova tentativa de login
    const errorMsg = document.getElementById('error-msg');
    errorMsg.textContent = '';

    //Percorre a lista e verifica se o nome está na lista 

    // for ( let i= 0; i < validUsername.length; i++)
    //     {
            
    // }

    // Verifica se o nome de usuário e a senha estão corretos
    if (username == validUsername && password == validPassword) {
        // Exibe uma mensagem de sucesso ou redireciona para outra página
        alert('Login bem-sucedido!');
        // Aqui você poderia redirecionar o usuário
        window.location.href = "live.html";
    } else {
        // Exibe uma mensagem de erro
        errorMsg.textContent = 'Usuario ou senha incorreta';
    }
});
