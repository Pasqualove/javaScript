array = []
nome = []

for(i = 0; i < 10; i++){
    let x = Math.floor(Math.random() * 10) + 1
    array.push(x)
}

function escreve(){
    let text = ""
    let name = document.getElementById("nome").value
    let letra = document.getElementById("letra").value
    const nomeArray = Array.from(name)
    for (const x of nomeArray) {
        if (x == letra) {
            continue; //PULA UMA EXECUÇÃO DO LOOP CASO A LETRA FOR A QUE QUEREMOS REMOVER
        }
        text += x + "<br>"
    }
    document.getElementById("teste").innerHTML = text
}

