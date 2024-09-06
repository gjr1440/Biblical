function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};
  
function pesquisar() {
    // Obtém o elemento HTML com o ID "resultados-pesquisa"
    // Este elemento será utilizado para exibir os resultados da pesquisa
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa || campoPesquisa.trim() == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo.</p>"
        return;
    };

    campoPesquisa = removerAcentos(campoPesquisa).toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado dentro da lista de dados (array 'dados')
    for (let dado of dados) {
        titulo = removerAcentos(dado.titulo).toLowerCase();
        descricao = removerAcentos(dado.descricao).toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
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
        };
    };

    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome de algum livro bíblico ou algo relacionado.</p>"
    };

    // Substitui o conteúdo HTML do elemento "resultados-pesquisa"
    // pelos resultados formatados
    section.innerHTML = resultados;
};