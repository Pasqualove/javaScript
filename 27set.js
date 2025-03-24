const letras = new Set([]);
function addLetra(){
    let aux
    aux = document.getElementById("letra").value
    if (!letras.has(aux)) {
        letras.add(aux)
    }else{
        alert("Letra já adicionada")
    }
    exibeLista()
}
function exibeLista(){
    let text = "Lista <ul>"
    letras.forEach(function(x){
        text += "<li>" + x
    })
    text += "</ul>"
    document.getElementById("lista").innerHTML = text
}