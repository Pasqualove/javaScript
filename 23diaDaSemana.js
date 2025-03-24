switch (new Date().getDay) {
    case 5:
        text = "Sexta-feira"
        break;
    case 6:
    case 0:
        text = "Final de semana"
    default:
        text = "dia de semana"
        break;
}
document.getElementById("switch").innerHTML = text

function testamaior(){
    const idd = document.getElementById("number").value
    const demaior = (idd > 18)? "maior de idade":"menor de idade"

    document.getElementById("idade").innerHTML = demaior
}
