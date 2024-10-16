async function autenticarUsuario(event) {
    event.preventDefault(); // Prevenir o envio padrão do formulário

    const username= "admin"
    const password= "123"

    // Capturar os valores do email e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mensagem de alerta
    if (!email || !senha) {
        alert("Preencha todos os campos burro.");
        return;
    }

    // Verifica se o nome de usuário e a senha estão corretos
    //     if (username === validUsername && password === validPassword) {
    //         // Exibe uma mensagem de sucesso ou redireciona para outra página
    //         alert('Login bem-sucedido!');
    //         // loginMsg.textContent = 'Login bem-sucedido!';
    //         // alert(' Seja Bem vindo a mais uma assembleia');

    //         // Aqui você poderia redirecionar o usuário
    //         window.location.href = "live.html";

}