let txt = ""
function exibeArray(params) {
    const nome = document.getElementById("inputNome").value
    const nomeArray = Array.from(nome)
    nomeArray.forEach(function(value) {
        txt += value + "<br>"
    })
    console.log(txt)
    document.getElementById("exibe").innerHTML = txt
    txt = ""
}

