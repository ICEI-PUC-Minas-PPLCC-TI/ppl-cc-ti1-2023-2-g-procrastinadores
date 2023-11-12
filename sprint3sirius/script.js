function carregarPreview() {
  fetch(`https://jsonserver.siriusvictor.repl.co/artigos`)
    .then(function (response) {
      return response.json();
    })
    .then(function (db) {
      let textoHTML = "";

      for (i = 0; i < db.length; i++) {
        let artigos = db[i];
        textoHTML += `
        <a class="article-box" href="artigos.html#${artigos.id}">
        <br>
        <img class="imagem" src="${artigos.imagem}">
        <br><br>
          <div class = "txt-box">
            <div class = "up">
              <h2 class="titulo">${artigos.titulo}</h2>
              <p class="categoria">${artigos.categoria}</p>
            </div>
            <br>
              <p class="resumo">${artigos.resumo}</p>
          </div>
        </a>
        <br>
        `;
      }
      document.getElementById("content").innerHTML = textoHTML;
    });
}
function carregarArtigo(id) {
  /*let id = window.location.hash.substring(1);
  console.log(id);*/
  fetch(`https://jsonserver.siriusvictor.repl.co/artigos/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (db) {
      let txtNav = ``;

      for (i = 0; i < db.item.length; i++) {
        txtNav += `
        <div class = "article-nav-item">
          <div class = "item">${db.item[i].nome}</div>`;

        for (j = 0; j < db.item[i].subitens.length; j++) {
          txtNav += `<div class = "subitem">${db.item[i].subitens[j]}</div>`;
        }

        txtNav += `</div>`;
      }

      let txtArtigo = `
      <h2 class="title">${db.titulo}</h2>
      <div class="content">
        <nav class="article-nav">${txtNav}</nav>
        <div class="txt-box">
          <div class="txt">${db.texto}</div>
        </div>
      </div>
    `;

      document.getElementById("article").innerHTML = txtArtigo;
    });
}

function passarProx() {
  hashAtual = window.location.hash.substring(1);
  proxHash = parseInt(hashAtual,10)+1;
  window.location.hash = "#"+proxHash;
  console.log("hash trocado para:" + proxHash);
  carregarArtigo(proxHash);
}

function passarAnt() {

  hashAtual = window.location.hash.substring(1);
  if (hashAtual > 0) {
    proxHash = parseInt(hashAtual,10)-1;
    window.location.hash = "#"+proxHash;
    console.log("hash trocado para:" + proxHash);
    carregarArtigo(proxHash);
  }
}

/*
  let id = window.location.hash.substring(1);
  fetch(`https://jsonserver.siriusvictor.repl.co/artigos`)
    .then(function (response) {
      return response.json();
    })
    .then(function (db) {
      console.log(id);
      if (id > 0) {
        id -= 1;
        console.log("ant ok");
      }
    });*/
