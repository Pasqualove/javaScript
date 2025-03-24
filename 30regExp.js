let text = "Use a regular expression to do a case-insensitive search for 'w3schools' in a string:"

function procura(){
    let x = document.getElementById("input").value
    let regEx = new RegExp(x, "i")
    let n = text.search(regEx) //faz a busca ser case insensitive
    if (n == -1) {
        alert("Palavra não achada no texto")
    }else{
        alert("Palavra achada no índice " + n + " do texto")
    }
}
function exibe(){
    let x = document.getElementById("inicial").value
    let regEx = new RegExp(`\\b${x}\\w+`, 'gi')
    let resultado = text.match(regEx)
    let teste = "Erro, nenhum nome encontado com essa inicial"
    resultado = resultado ?? teste //Se resultado = null exibe erro
    document.getElementById("exibir").innerText = resultado
}