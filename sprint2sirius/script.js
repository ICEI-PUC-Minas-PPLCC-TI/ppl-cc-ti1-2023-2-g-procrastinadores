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
              <div class = "up">
                <h2 class="titulo">${artigos.titulo}</h2>
                <p class="categoria">${artigos.categoria}</p>
              </div>
                <p class="resumo">${artigos.resumo}</p>
          </a>
          <br>
        `;
      }
      document.getElementById("content").innerHTML = textoHTML;
    });
} // separar arquivos

function carregarArtigo() {
  let id = window.location.hash.substring(1);

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
      <h2 class = "title">${db.titulo}</h2>

      <div class="content">
					<nav class = "article-nav">
						${txtNav}
					</nav>

					<div class = "txt">
						${db.texto}
					</div>
				</div>
    `;

      document.getElementById("article").innerHTML = txtArtigo;
    });
}
