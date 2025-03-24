const nome = ["augusto", "guilherme", "pasqualotto"]

// document.getElementById("teste1").innerHTML = nome[0]

document.getElementById("teste1").innerHTML = nome.toString()

document.getElementById("teste2").innerHTML = nome.length

let ultimo = nome[nome.length - 1] //ACESSA O ULTIMO VALOR

document.getElementById("teste3").innerHTML = ultimo

const objeto = {
    nome: "augusto",
    idade: 24,
    linguagens: [
        {nome: "cpp", afinidade: "alta"},
        {nome: "py", afinidade: "media"},
        {nome: "java", afinidade: "baixa"}
    ]
}

let string = ""

let text = "";

text += objeto.nome + "<br>"

objeto.linguagens.forEach(function(x){
    text += x.nome + " Afinidade: " + x.afinidade + "<br>"
})

document.getElementById("teste4").innerHTML = text

