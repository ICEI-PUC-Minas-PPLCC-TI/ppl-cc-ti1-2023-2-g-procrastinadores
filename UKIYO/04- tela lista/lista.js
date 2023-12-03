const url = 'https://json-server-web-api--arthura7.repl.co/tarefas';

document.addEventListener("DOMContentLoaded", function () {
    carregarTarefas();
});

function carregarTarefas() {
    fetch(url)
        .then(response => response.json())
        .then(tarefas => {
            const listaTarefas = document.getElementById('lista-tarefas');

            tarefas.forEach(tarefa => {
                const li = document.createElement('li');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'checkbox';
                checkbox.addEventListener('click', () => handleChecked(checkbox, tarefa));
                li.appendChild(checkbox);

                const nomeTarefa = tarefa.tarefa || tarefa.nome || 'Tarefa sem nome';
                const dataEntrega = tarefa.entrega || 'Data não definida'; // Adicionamos a data da tarefa
                li.innerHTML += `<span>${nomeTarefa} - ${dataEntrega}</span>`;
                listaTarefas.appendChild(li);

                checkbox.checked = tarefa.status;
                tarefa.status = false;

                // Mantém a confirmação da checkbox
                handleChecked(checkbox, tarefa);
            });

            document.querySelectorAll('.Lista input[type="checkbox"]').forEach(function (checkbox) {
                checkbox.addEventListener('click', handleChecked);
            });

            // Verifica se todas as checkboxes estão marcadas
            const todasMarcadas = Array.from(document.querySelectorAll('.checkbox')).every(b => b.checked);
            if (todasMarcadas) {
                mostrarTelaParabens();
            }
        })
        .catch(error => console.error('Erro:', error));
}

function handleChecked(checkbox, tarefa) {
    checkbox.checked = !checkbox.checked;
    const checkBoxList = document.querySelectorAll('.checkbox');
    const todasMarcadas = Array.from(checkBoxList).every(b => b.checked);

    if (todasMarcadas) {
        mostrarTelaParabens();
    } else {
        console.log('deu');
    }
}

function mostrarTelaParabens() {
    // Redirecionar para a tela de "Parabéns"
    window.location.href = '/05- tela parabens/parabens.html';
}
