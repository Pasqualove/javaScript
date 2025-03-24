function carro(marca,modelo,ano,valor){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.valor = valor;
    this.carroPreco = function(){
        return this.modelo + " custa: " + this.valor
    }
}

const gol = new carro("volkswagen", "gol", "2015", 35000)

const jetta = new carro("volkswagen", "jetta", "2011", 45000)

let carros = [gol, jetta]

jetta.ano = 2012

carro.prototype.estado = "Usado"
gol.estado = "Novo"

for (const x of carros) {
    console.log(x.carroPreco() + " ano " + x.ano)
    console.log(x.estado)
}

let texto = "<ul>"
function imprime(){
    carro.forEach(function(x) {
        texto += "<li>" + x.marca + ", " + x.modelo + "</li>"
    });
    texto += "</ul>"
    document.getElementById("teste").innerHTML = texto

}
