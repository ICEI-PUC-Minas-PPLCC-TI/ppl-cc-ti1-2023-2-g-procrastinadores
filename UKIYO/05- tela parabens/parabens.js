document.addEventListener('DOMContentLoaded', function () {
    var backToHomeButton = document.getElementById('back-to-home');
    var backToTasksButton = document.getElementById('back-to-tasks');

    // URL do JSON
    var jsonUrl = 'https://json-server-web-api--arthura7.repl.co/tarefas';

    // Obtendo o JSON da URL fornecida
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            // Trabalhe com os dados conforme necessário
        })
        .catch(error => console.error('Erro ao obter JSON:', error));

    // Adicionando um evento de clique ao botão "Voltar para a página inicial"
    backToHomeButton.addEventListener('click', function () {
        // Redirecionando para a página inicial
        window.location.href = '/01- main/index.html';
    });

    // Adicionando um evento de clique ao botão "Voltar para o cadastro de tarefas"
    backToTasksButton.addEventListener('click', function () {
        // Redirecionando para a página de cadastro de tarefas
        window.location.href = '/02- tela cadastro de tarefas/tarefas.html';
    });
});
