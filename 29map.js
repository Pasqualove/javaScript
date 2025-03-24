const nomes = [
    {nome: "augusto", idd: 24},
    {nome: "joao", idd: 21},
    {nome: "maria", idd: 18}
]

function separaIdd({idd}){
    return idd >=21 ? "maior" : "menor"
}

const result = Map.groupBy(nomes,separaIdd)

let text = "Maiores de 21: <br>"

for (let x of result.get("maior")) {
    text += x.nome + " tem " + x.idd + "<br>"
}

text += "<br>Menores de 21: <br>"

for (const x of result.get("menor")) {
    text += x.nome + " tem " + x.idd + "<br>"
}

document.getElementById("demo").innerHTML = text

