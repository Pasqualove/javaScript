const carros = [
    {nome: "Gol", ano: 2012},
    {nome: "Jetta", ano: 2013},
    {nome: "Audi a3", ano: 2008},
    {nome: "Bmw 320", ano: 2010}
]

function ordena(){
    const select = document.getElementById("sort")
    if (select.options[select.selectedIndex].value == 1) {
        carros.sort(function(a,b){return a.nome.localeCompare(b.nome)})
    }else if(select.options[select.selectedIndex].value == 2){
        carros.sort(function(a,b){return b.nome.localeCompare(a.nome)})
    }else if(select.options[select.selectedIndex].value == 3){
        carros.sort(function(a,b){return a.ano - b.ano})
    }else{
        carros.sort(function(a,b){return b.ano - a.ano})
    }
    let texto = ""
        carros.forEach(function(x){
            texto += x.nome + ", " + x.ano + "<br>" 
        })
    document.getElementById("teste").innerHTML = texto
}

function adicionaCarros() {
    const carro = document.getElementById("carroNovo").value
    const ano = document.getElementById("anoNovo").value
    if(carro && ano){
        carros.push({nome: carro, ano: ano})
    }else{
        alert("Por favor, preencha os dados corretamente")
    }
    document.getElementById("carroNovo").value = ""
    document.getElementById("anoNovo").value = ""
    
}