const nomes = ["joao", "claudio", "maria", "silvana"];

function adiciona(){
    const novoNome = document.getElementById("addLista").value;
    if (novoNome && !nomes.includes(novoNome)) { //CHECA SE JA TEM O NOME NA LISTA
        nomes.push(novoNome);
        atualizarLista();
    }
}

function atualizarLista() {
    let texto = "<ul>";
    nomes.forEach(function(x) {
        texto += "<li>" + x + "</li>";
    });
    texto += "</ul>"
    document.getElementById("lista").innerHTML = texto;
}

// Atualiza a lista inicialmente
atualizarLista();