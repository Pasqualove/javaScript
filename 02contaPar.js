function contaPar(numeros){
    let contador = 0;
    for (const key of numeros) {
        if (key % 2 == 0) {
            contador++
        }
    }
    return contador;
}

numeros = [1,4,7,3,123,41,125,451,548,24]

let contador = contaPar(numeros)

console.log(contador)