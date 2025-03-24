const jogadores = []

function addLista(){
    let nome = document.getElementById("nome").value
    let pontos = document.getElementById("pontos").value

    if (!nome || !pontos) {
        alert("Insira corretamente os dados")
        return
    }

    const jogador = {
        name: nome,
        points: pontos
    }
    jogadores.push(jogador)
    document.getElementById("nome").value = ""
    document.getElementById("pontos").value = ""
}

function ordena() {
    jogadores.sort((a,b) => b.points - a.points)
    let text = "<ol>"
    jogadores.forEach(function(jogador){
        text += "<li> Nome: " + jogador.name + " Pontos: " + jogador.points
    })
    text += "</ol>"
    document.getElementById("lista").innerHTML = text 
}