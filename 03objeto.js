//const teste = {} ABRE UM OBJETO VAZIO
const pessoa = {
    nome: "augusto",
    idade: 24,
    emprego: "estagiario",
    carros: {
        carro1: "bmw",
        carro2: "volvo"
    }
}

function exibe(teste){
    console.log(teste.nome + " " + teste.idade + " " + pessoa.carros.carro1)
} 

pessoa.nome = 'claudio'

// delete pessoa.nome

exibe(pessoa)



