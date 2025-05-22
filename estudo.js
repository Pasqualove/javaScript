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
nomes2 = [...nomes, "pedro", "claudio"]

console.log(nomes2);

//factory function para criar objeto 

function CriaPessoa(nome, idade){
    return{
        nome,
        idade,
        apresentar(){
            console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`)
        }
    };
}

const pessoa = CriaPessoa("Augusto", 24);

pessoa.apresentar();

//map cria um novo array de acordo com uma função

const nomesMap = nomes.map((nome) => {
    return nome + "1";
})

console.log(nomesMap); //retorna um array com os nomes seguidos de "1"

//filter cria um novo array com os valores que passaram por uma condição específica

const numeros = [1,2,3,4,5,6]

const pares = numeros.filter((num) => {
    return num % 2 == 0;
})

console.log(pares); //retorna um array apenas de números pares

//forEach executa uma função para cada item do array, sem criar um array novo

numeros.forEach(num => {
    console.log(num / 2)
});

//find retorna o primeiro item que satisfaz uma condição(ou undefined)

const find = nomes.find((n) => n.startsWith("a"));
console.log(find);

//sort Ordena os itens modificando o array original

nomes2.sort().reverse();
console.log(nomes2);

//some(algum item satisfaz a condição) / every(todos os itens satisfazem a condição)

const some = numeros.some((n) => n % 2 == 0);
console.log(some); 

const every = numeros.every((n) => n > 0);
console.log(every);

//reduce serve para reduzir o array e um único valor, usando um acumulador

const rockets = [
    {country: "Russia", launches: 32},
    {country: "US", launches: 23},
    {country: "China", launches: 16},
    {country: "Europe", launches: 7},
    {country: "India", launches: 4},
    {country: "Japan", launches: 3},
]

const total = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0)

console.log(total);