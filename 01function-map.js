function teste(aux){
    for (const n of aux) {
        console.log(n+3);
    }
}

function dobra(numero) {
    return numero*2
}

numeros = [1,2,3,4,5]

const numeros2 = numeros.map((num) => `${num}^2 = ${num * num}`)

console.log(numeros)

console.log(numeros2)

teste(numeros)

console.log(' ')

const numerosDobrados = numeros.map(dobra)

for (let n = 0; n < numerosDobrados.length; n++) {
    console.log(numerosDobrados[n])    
}