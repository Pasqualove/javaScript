lista = []
function criaLista() {
    lista = []
    let qttNumeros = parseInt(document.getElementById("qttNumeros").value)
    while(lista.length < qttNumeros){
        let aux
        aux = Math.floor(Math.random()* 10)+1
        if(!lista.includes(aux)){
            lista.push(aux)
        }
    }
    const soma = lista.reduce(function(acc,valorAtual){
        return 
    })
    exibeLista()
}

function exibeLista(){
    let text = "<ul>"
    lista.forEach(function(x) {
        text += "<li>" + x + "</li>"
    })
    text += "</ul>"
    document.getElementById("lista").innerHTML = text
}

