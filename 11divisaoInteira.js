let x = 1.343241

document.getElementById("ajeitaX").innerHTML = x.toFixed(2)

let y = new Date("2000-08-24")

document.getElementById("data").innerHTML = y

function input1() {
    return document.getElementById("usuarioInput1").value
}

function input2() {
    return document.getElementById("usuarioInput2").value
}



function divide(){
    let resultado = (input1()/input2())
    document.getElementById("Resultado").innerHTML = "O resultado é: " + resultado
    if (Number.isSafeInteger(resultado) == true) {
        document.getElementById("testeInt").innerHTML = "O resultado é inteiro."
    }
    else{
        document.getElementById("testeInt").innerHTML = "O resultado não é inteiro."
    }
}