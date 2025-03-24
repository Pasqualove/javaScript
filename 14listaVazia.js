const array = []

function adiciona() {
    const x = document.getElementById("addElemento").value
    if (x && !array.includes(x)) {
        array.push(x)
        exibir()
    }
}

function exibir() {
    let text = "<ul>"
    array.forEach(function(x){
        text += "<li>" + x + "</li>"
    })
    text += "</ul>"
    document.getElementById("lista").innerHTML = text
}

function excluir(){
    let y = array.shift()
    document.getElementById("excluido").innerHTML = y
    exibir()
}

function procura(){
    let x = array.includes(document.getElementById("procurar").value)
    if (x) {
        document.getElementById("procuraValor").textContent = "valor achado"
    }else{
        document.getElementById("procuraValor").textContent = "valor não achado"
    }
}
