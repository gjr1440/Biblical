function pesquisar() {
    // Obtém o elemento HTML com o ID "resultados-pesquisa"
    // Este elemento será utilizado para exibir os resultados da pesquisa
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada dado dentro da lista de dados (array 'dados')
    for (let dado of dados) {
        // Cria uma div para cada resultado, formatando os dados como HTML
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
        `;
    }

    // Substitui o conteúdo HTML do elemento "resultados-pesquisa"
    // pelos resultados formatados
    section.innerHTML = resultados;
}