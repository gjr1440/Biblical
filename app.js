function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let resultados = "";

    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        resultados += `
    <div class="item-resultado">
        <h2>
            <a href=${dado.link} target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta"><b>Autor: </b>${dado.autor}</p>
        <p class="descricao-meta"><b>Data provável: </b>${dado.dataProvavel}</p>

        <p class="descricao-meta">${dado.descricao}</p>

        <p class="descricao-meta"><b>Curiosidades</b></p>
                
        <p class="descricao-meta">${dado.curiosidades.primeira}</p>
        <p class="descricao-meta">${dado.curiosidades.segunda}</p>
    </div>
`
    };

    section.innerHTML = resultados;
}