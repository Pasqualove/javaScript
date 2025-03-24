text = document.getElementById("teste")

test = document.getElementById("teste2")

function att(){
    
    // text.innerHTML = x
    // x = x*2
    // test.innerHTML = x  

    try {
        let num = document.getElementById("number").value
        if(num != ""){
            x = `O ultimo numero digitado foi: ${num}`
            text.innerHTML = x
        }else {
            throw new Error("Empty box");
        }
    } catch (error) {
        test.innerHTML = error.message
    } finally{
        document.getElementById("number").value = ""
    }
}

var x = 0;

