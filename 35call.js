"use strict"
const pessoas = []

const pessoa = {
    nomeCompleto: function () {
        return this.nome + " " + this.sobrenome
    }
}


function addLista(){
    let x = document.getElementById("nome").value
    let y = document.getElementById("sobrenome").value

    if (!x || !y) {
        alert("Erro nos dados")
        return
    }
    const pessoa1 = {
        nome: x,
        sobrenome: y
    }
    pessoas.push(pessoa1)
    document.getElementById("nome").value = ""
    document.getElementById("sobrenome").value = ""
}


