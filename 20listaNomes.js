const nomes = [
    {nome: "augusto", nota: 10},
    {nome: "fabio", nota: 9},
    {nome: "cleber", nota: 7}
]

function adiciona(){
    const nome = document.getElementById("name").value
    const nota = document.getElementById("nota").value
    if (nome && nota){
        nomes.push({nome: nome, nota: nota})
        alert("Aluno adicionado!")
    }else{
        alert("Erro, insira corretamente os dados.")
    }
}
function procura(){
    const buscaNome = document.getElementById("name").value
    let nomeEncontrado = nomes.some(function (item){
        return item.nome.toLowerCase() === buscaNome.toLowerCase()
    })
    if (nomeEncontrado) {
        document.getElementById("teste").innerHTML = "Nome Encontrado na Lista"
    }else{
        document.getElementById("teste").innerHTML = "Nome Não Encontrado na Lista"
    }
}
function exibe() {
    let text = ""
    nomes.forEach(function(x){
        text += x.nome + " " + x.nota + "<br>"
    })
    document.getElementById("exibe").innerHTML = text
}