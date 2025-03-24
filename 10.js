let x = 10.5
let y = Number.isSafeInteger(x)
let txt = ""

while (y == false) {
    x +=0.1
    y = Number.isSafeInteger(x)
    txt = txt + x + "<br>"
}
document.getElementById("teste").innerHTML = txt