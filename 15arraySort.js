const array = ["augusto", "pasqualotto", "guilherme"]



function sortArray(){
    const select = document.getElementById("sort")
    const escolha = select.options[select.selectedIndex].value
    if (escolha == 1) {
        document.getElementById("teste").innerHTML = array.sort()        
    }else{
        array.sort()
        document.getElementById("teste").innerHTML = array.reverse()
    }
}

function adicionaLista(){
    const aux = document.getElementById("addLista").value
    if (!array.includes(aux) && aux!= 0) {
        array.push(aux)
    }else if(aux == 0){
        alert("Nome inválido")
    }
    else{
        alert("Já está na lista")
    }
    sortArray()
}
