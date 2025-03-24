const carros = {
    bmw: "2.0",
    audi: "2.0T",
    volkswagen: "1.0"
}

const ford = new carros("ford", "")

text = ""

for(let [name,engine] of Object.entries(carros)){
    text += name + ": " + engine + "<br>";
}

let string = JSON.stringify(carros)

document.getElementById("teste").innerHTML = text

document.getElementById("teste2").innerHTML = string