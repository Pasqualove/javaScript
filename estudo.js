//função anônima
//button onclick{ () => { console.log("teste") }}
//função sem nome especificado, arrow function

//if e else simplificados
let age = 10;
const a = age > 10 || "Augusto" ;
//Se for true retorna true, caso contrário retorna "Augusto"

const b = age > 10 && "Augusto";
//Se for true retorna "Augusto", caso contrário retorna false 

const nome = age > 10 ? "Augusto" : "Cleber";
//Se for true retorna "Augusto", caso contrário retorna "Cleber"

console.log(a);
console.log(b);
console.log(nome);

//criação do objeto "carro"
const carro = { 
    marca: "Toyota",
    ano: "2024",
};

//criação de mais de uma variável em uma única linha
const { marca, ano } = carro

console.log(marca);
console.log(ano);

//criação de um segundo objeto alterando apenas a marca, por exemplo

const carro2 = {...carro, marca: "Ford"}

console.log(carro2.marca);

//serve também com arrays

nomes = ["augusto", "joao", "paulo"]
nomes2 = [...nomes, "pedro"]

console.log(nomes2);

//map cria um novo array de acordo com uma função

const nomesMap = nomes.map((nome) => {
    return nome + "1";
})

console.log(nomesMap); //retorna um array com os nomes seguidos de "1"

//filter cria um novo array com os valores que passaram por uma condição específica

numeros = [1,2,3,4,5,6]

const pares = numeros.filter((num) => {
    return num % 2 == 0;
})

console.log(pares); //retorna um array apenas de números pares

