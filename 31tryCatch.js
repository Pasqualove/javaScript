function calcula(){
    try {
        let dividendo = parseFloat(document.getElementById("numero1").value)
        let divisor = parseFloat(document.getElementById("numero2").value)
        let resultado = dividendo/divisor

        if (divisor === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        if (isNaN(dividendo) || isNaN(divisor)) {
            throw new Error("Insira valores válidos");
        }

        document.getElementById("exibe").innerHTML = resultado
    } catch (error) {
        document.getElementById("exibe").innerHTML = error.message
        console.log(error.name)
        console.log(error.stack)
        
    }finally{
        document.getElementById("numero1").value = ""
        document.getElementById("numero2").value = ""
    }
}