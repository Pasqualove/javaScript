"use strict"
const pessoas = []

function addPessoa(){
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value

    if (!nome|| !idade) {
        alert("Preencha corretamente os valores")
        return
    }

    const pessoa = {
        nome : nome,
        idade : idade,
        maior : function() {
            if (this.idade >= 18) {
                return this.nome + ", " + this.idade + " anos, maior de idade"
            }else{
                return this.nome + ", " + this.idade + " anos, menor de idade"
            }
        }

    }
    pessoas.push(pessoa)
    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
    exibe()
}

function exibe(){
    let resultado = document.getElementById("lista")
    resultado.innerHTML = ""
    pessoas.forEach(function(pessoa){
        resultado.innerHTML += pessoa.maior() + "<br>"
    })
}