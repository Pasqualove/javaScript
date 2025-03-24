const d = new Date()
const dForm = `${d.getDay()}/${d.getMonth()+1}/${d.getFullYear()}`
document.getElementById("data").innerHTML = dForm

const array = [1,14,414,652,52,64,1243,9]

const mapa = array.map((num) => `${num}^2 = ${Math.pow(num,2)}`)
const mapa2 = array.map((num) => `${num} sqrt 2 = ${Math.sqrt(num,2)} <br>`)
txt = ""
mapa.forEach((function(x){
    txt += x + "<br>"
}))
document.getElementById("mapa").innerHTML = txt
document.getElementById("mapa2").innerHTML = mapa2

const hora = d.getHours
if (hora < 12) {
    document.getElementById("hora").innerHTML = "Bom dia"
}else{
    document.getElementById("hora").innerHTML = "Boa noite"
}