let x = 100+"10"

let y = "joao"

document.getElementById("numero1").innerHTML = x

document.getElementById("ehNumero").innerHTML = isNaN(x) // TESTE SE X NÃO É NUMERO(FALSE)

document.getElementById("ehNumero2").innerHTML = isNaN(y)// NÃO É NUMERO(TRUE)

let z = 2
txt = "";
while (z != Infinity) {
    z *= z
    txt = txt + z + "<br>";
}
document.getElementById("testaNum").innerHTML = txt
