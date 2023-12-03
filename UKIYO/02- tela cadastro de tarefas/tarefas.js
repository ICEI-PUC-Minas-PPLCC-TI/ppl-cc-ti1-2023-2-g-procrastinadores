
const url = 'https://json-server-web-api--arthura7.repl.co/tarefas';

document.getElementById('tarefas').addEventListener('submit', registrar)

function LerDados() {
  let strDados = fetch(url)
      .then(response => response.json())
      .catch(error => {
          console.error('Erro:', error);
      });
  return strDados;
}

function registrar(event) {
  event.preventDefault()

  // Pegando os valores dos inputs
  var tarefa = document.getElementById('tarefa').value
  let entrega = document.getElementById('entrega').value
  let alarme = document.getElementById('alarme').value



      // Ler os dados
      LerDados()
          .then((dados) => {
              // Encontrar o maior ID atual
              let maxId = 0;
              for (let i = 0; i < dados.length; i++) {
                  if (dados[i].id > maxId) {
                      maxId = dados[i].id;
                  }
              }

              // Gerando um novo ID para o usuário
              let novoId = Number(maxId) + 1;

              // Salvando o nome da tarefa
              let nometarefa = tarefa;

              // Criando um JSON com informações do usuário
              let novatarefa = {
                  "id": novoId,
                  "tarefa": nometarefa,
                  "entrega": entrega,
                  "alarme": alarme,
              };

              // Salvar os dados no localStorage
              SalvaDados(novatarefa);

              console.log('Tarefa adicionada');

              // Limpando os valores dos inputs
              document.getElementById('tarefa').value = '';
              document.getElementById('entrega').value = '';
              document.getElementById('alarme').value = '';
          })
          .catch((error) => {
              console.error('Erro:', error);
          });
  }

function SalvaDados(dados) {
  // Salvando o JSON no Storage
  sessionStorage.setItem('user', JSON.stringify(dados))
  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
  })
      .then(response => {
          if (response.ok) {
              console.log('Dados salvos com sucesso!');
          } 
      })
      .catch(error => {
          console.error('Erro na solicitação:', error);
      });
}


