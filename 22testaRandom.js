function testaAleatorio(){
    const aleatorio = Math.floor(Math.random() * 6) + 1
    const numDigitado = document.getElementById("numero").value 
    if (numDigitado == aleatorio) {
        alert("Você acertou!")
    }else{
        alert("Tente novamente!")
        document.getElementById("resultado").innerHTML = "O numero correto era: " +aleatorio
    }
}
