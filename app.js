// 1. Buscar e exibir os livros de um autor;
// 2. Buscar e exibir os livros de determinado ano;
// 3. Buscar e exibir os livros de um autor a partir de determinado ano;
// 4. Buscar um livro pelo nome e trazer todos as suas versões em diferentes idiomas;
// 5. Exibir os livros de determinado idioma;
// // 6. Exibir os livros ordenados pelo ano;
let choice = true,
  autor = [],
  title = [],
  year = [],
  language = [];

while (choice) {
  let option = Number(
    prompt(
      "0|Cadastrar Livro \n1|Exibir livros de um Autor \n2|Exibir livros de um Ano" +
        "\n3|Exibir Livros de um Autor partir de um Ano \n4|Informações de um Livros \n5|Livros de Certo Idioma \n6|Sair"
    )
  );
  if (option === 0) {
    let choiceCreateBook = true;
    while (choiceCreateBook) {
      let authorBook = prompt("Autor do Livro:"),
        titleBook = prompt("Titulo do Livro:"),
        yearBook = prompt("Ano do Livro:"),
        languageBook = prompt("Linguagem do Livro:");
      createBook(authorBook, titleBook, yearBook, languageBook);
      const option = Number(
        prompt("Gostaria de Cadastrar mais Livros \n1|Sim \n2|Nao")
      );
      if (option === 2) {
        choiceCreateBook = false;
      } else {
        choiceCreateBook = true;
      }
    }
  }
  if (option === 6) {
    choice = false;
  }
}

function createBook(Author, Title, Year, Language) {
  let indexArray = 0;

  autor[indexArray] = Author;
  title[indexArray] = Title;
  year[indexArray] = Year;
  language[indexArray] = Language;
  indexArray++;
}

console.log(autor, title, year, language);
