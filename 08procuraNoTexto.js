let texto = "Clique no botão para abrir o Microsoft Teams, veja sua atividade e explore o aplicativo."
let part = texto.slice(0,6)
let isTextUpdated = false

let newtext = texto.replace("abrir","fechar")

document.getElementById("trade").innerHTML = texto

function troca() {
    document.getElementById("trade").innerHTML = newtext
    isTextUpdated = true
}

function input() {
    return document.getElementById("usuarioInput").value
}

function procura() {
    let palavra = input()
    let aux
    if (isTextUpdated == true) {
        aux = newtext.indexOf(palavra)
    }
    else{
        aux = texto.indexOf(palavra)
    }
    if (aux == -1) {
        document.getElementById("localizador").innerHTML = "Palavra não encontrada"
    }else{
        document.getElementById("localizador").innerHTML = "palavra encontrada no indice: "+aux
    }
}

// texto2 = texto.trim()     TIRA OS ESPAÇOS ANTES E DEPOIS DA STRING

