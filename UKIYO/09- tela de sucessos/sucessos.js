let completedCount = 0;
let todoCount = 0;
let notDoneCount = 0;

function updateCounters() {
    document.getElementById('completedCount').innerText = completedCount;
    document.getElementById('todoCount').innerText = todoCount;
    document.getElementById('notDoneCount').innerText = notDoneCount;
    document.getElementById('contador').innerText = contador;
}


function addTodo() {
    todoCount++;
    updateCounters();
}

function completeActivity() {
    completedCount++;
    todoCount--;
    updateCounters();
}

function markNotDone() {
    notDoneCount++;
    todoCount--;
    updateCounters();
    
}

function countTaf() {

}

var imagens = [
    "imgs/Parte1.png",
    "imgs/Parte2.png",
    "imgs/Parte3.png",
    "imgs/Parte4.png",
    "imgs/Parte5.png",
    "imgs/Parte6.png"
  ];

  // Índice da imagem atual
  var indiceAtual = 0;

  // Função para atualizar a imagem
  function atualizarImagem() {
    // Obtenha a referência da imagem pelo ID
    var imagem = document.getElementById("imagem");

    // Atualize o atributo src para a próxima URL da imagem
    imagem.src = imagens[indiceAtual];

    // Avance para a próxima imagem no array (ciclo circular)
    indiceAtual = (indiceAtual + 1) % imagens.length;
  }

 