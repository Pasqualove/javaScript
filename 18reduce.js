const array = [23,5,1,235,86,31,80,52]

const soma = array.reduce((acumulador,currentValue) => acumulador + currentValue, 0)
//soma todos os valores e salva na variavel soma
console.log(soma)

const maior = array.reduce
    ((acumulador,currentValue) => acumulador > currentValue ? acumulador : currentValue)
console.log(maior)

const teste = array.every((value) => value > 10)
console.log(teste)

function testaNegativo(){
    const valorInput = document.getElementById("valorIgual").value
    const testeNegativo = array.some((value) => value === parseInt(valorInput));
    if (testeNegativo == false) {
        document.getElementById("retorno").textContent = "Número não encontrado"
    }
    else{
        document.getElementById("retorno").textContent = "Número encontrado!"; 
    }
}

