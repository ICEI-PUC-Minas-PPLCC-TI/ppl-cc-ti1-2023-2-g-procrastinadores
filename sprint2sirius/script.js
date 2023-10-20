function carregarItens () {
    fetch('https://jsonserver.SiriusVictor.repl.co/artigos')
        .then(function (response) { return response.json() })
        .then(function(db) {
            let textoHTML = ''
            for (i=0; i < db.length; i++) {
                let alimento = db[i]
                textoHTML += `<li>${alimento.nome} | ${alimento.grupo_alimentar} </li>`
            }
            document.getElementById('listaAlimentos').innerHTML = textoHTML
        })
}
// duvidas: 
// o que é repl.co, como usar e colocar no ar
// como colocar o js no lugar do texto (meu)
// alguém falou alguma coisa sobre json schema nas aulas?
document.getElementById()