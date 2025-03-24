const biblioteca = {
    livros: [
      {titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954},
      {titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997},
      {titulo: "O Código Da Vinci", autor: "Dan Brown", ano: 2003},
      {titulo: "A Garota no Trem", autor: "Paula Hawkins", ano: 2015},
      {titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943},
      {titulo: "Jogos Vorazes", autor: "Suzanne Collins", ano: 2008}
    ]
  };

biblioteca[Symbol.iterator] = function(){
    let index = 0
    const livros = this.livros
    return{
        next(){
            while(index < livros.length){
                const livro = livros[index++]
                if(livro.ano > 2010){
                    return{value: livro, done: false}
                }
            }
            return {value: undefined, done: true}
        }
    }
}

let livrosRecentes = ""
for(const livro of biblioteca){
    livrosRecentes += livro.titulo + " (" + livro.ano + ")<br>"
}

document.getElementById("demo").innerHTML = livrosRecentes

