const nomesIdd = new Map([
    ["augusto", 24],
    ["joao", 23],
    ["maria", 20]
])

nomesIdd.set("cleber",30)

document.getElementById("teste").innerHTML = nomesIdd.get("cleber")

document.getElementById("teste2").innerHTML = nomesIdd.size

// nomesIdd.clear() LIMPA O MAPA

let text = ""

nomesIdd.forEach(function(idd,nome){
    text += nome + " tem " + idd + " anos.<br>" 
})

document.getElementById("teste3").innerHTML = text

