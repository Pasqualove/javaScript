const numbers = [45, 4, 9, 16, 25];
txt = ""
numbers.sort(function(a,b){return a - b})
function imprime(){
  numbers.forEach(escreve) //CHAMA A FUNÇÃO UMA VEZ PARA CADA ELEMENTO NO ARRAY
  function escreve(value,index,array){
    let ind = index+1
    txt += "valor " + ind + ": " + value + "<br>"
  }
  document.getElementById("teste").innerHTML = txt
}

const array2 = numbers.map(dobra); //CRIA UM SEGUNDO ARRAY SEGUINDO A FUNÇÃO DOBRA
function dobra(value,index,array){
  return value*2
}
document.getElementById("teste2").innerHTML = array2.sort(function(a,b){return b - a})

const pares = numbers.filter(par) //FILTRA O ARRAY
function par(value,index,array) {
  if (value % 2 == 0) { //FUNÇÃO PARA O FILTRO RETORNAR SOMENTE OS PARES
    return value;
  }
}
document.getElementById("teste3").innerHTML = pares