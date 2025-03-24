pessoa = {
    nome: "augusto",
    idade: "24",
    nome_e_idade: function exibir() {
        return pessoa.nome + " " + this.idade
    }
}
document.getElementById("teste").innerHTML = pessoa.nome_e_idade();

