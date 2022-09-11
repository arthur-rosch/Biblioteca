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
  language = [],
  indexArray = 0;

while (choice) {
  let option = Number(
    prompt(
      "0|Cadastrar Livro \n1|Exibir livros de um Autor \n2|Exibir livros de um Ano" +
        "\n3|Exibir Livros de um Autor partir de um Ano \n4|Informações de um Livros " +
        "\n5|Livros de Certo Idioma \n6|Ordenar Livro por Ano\n7|Sair"
    )
  );
  if (option === 0) {
    let choiceCreateBook = true;
    while (choiceCreateBook) {
      const authorBook = prompt("Autor do Livro:"),
        titleBook = prompt("Titulo do Livro:"),
        yearBook = Number(prompt("Ano do Livro:")),
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
  if (option === 1) {
    const autorName = prompt("Qual Nome do Autor");
    searchAuthorBook(autorName);
  }
  if (option === 2) {
    const yearSearch = prompt("Qual Ano de Livros voce Gostaria de pesquisar");
    searchYearBook(yearSearch);
  }
  if (option === 3) {
    const autorName = prompt("Qual Nome do Autor"),
      yearSearch = Number(
        prompt("Qual ano do Livros voce Gostaria de pesquisar")
      );
    authorBooksFromAGivenYear(autorName, yearSearch);
  }
  if (option === 4) {
    const bookName = prompt(
      "Qual Nome do Livro voce quer Procurar em Diferente Linguagem"
    );
    bookLanguage(bookName);
  }
  if (option === 5) {
    const bookLanguage = prompt("Qual Idioma do Livros:");
    certainLanguage(bookLanguage);
  }
  if (option === 6) {
    sortByYear();
  }
  if (option === 7) {
    choice = false;
  }
}

function createBook(Author, Title, Year, Language) {
  autor[indexArray] = Author;
  title[indexArray] = Title;
  year[indexArray] = Year;
  language[indexArray] = Language;
  indexArray++;
}
function searchAuthorBook(AuthorName) {
  let arrayBookAuxiliar = [],
    indexBook = 0;
  for (let A = 0; A < autor.length; A++) {
    if (AuthorName === autor[A]) {
      arrayBookAuxiliar[indexBook] = title[A];
      indexBook++;
    }
  }
  for (let B = 0; B < arrayBookAuxiliar.length; B++) {
    console.log(`Livros De ${AuthorName}: ${arrayBookAuxiliar[B]}`);
  }
}
function searchYearBook(Year) {
  let yearBookAuxiliar = [],
    indexBook = 0;
  for (let A = 0; A < year.length; A++) {
    if (Year === year[A]) {
      yearBookAuxiliar[indexBook] = title[A];
      indexBook++;
    }
  }
  for (let B = 0; B < yearBookAuxiliar.length; B++) {
    console.log(`Livros De ${Year}: ${yearBookAuxiliar[B]}`);
  }
}
function authorBooksFromAGivenYear(AuthorName, Year) {
  let arrayAuxiliar = [],
    indexAuxiliar = 0;
  for (let A = 0; A < autor.length; A++) {
    if (AuthorName == autor[A] && year[A] >= Year) {
      arrayAuxiliar[indexAuxiliar] = title[A];
      indexAuxiliar++;
    }
  }
  for (let B = 0; B < arrayAuxiliar.length; B++) {
    console.log(`Livros Do Ano ${Year} Do ${AuthorName}: ${arrayAuxiliar[B]}`);
  }
}
function bookLanguage(BookName) {
  let languageAuxiliar = [],
    indexLanguage = 0;
  for (let A = 0; A < title.length; A++) {
    if (BookName === title[A]) {
      languageAuxiliar[indexLanguage] = language[A];
      indexLanguage++;
    }
  }
  for (let B = 0; B < languageAuxiliar.length; B++) {
    console.log(`Livro ${BookName} Idiomas ${languageAuxiliar[B]}`);
  }
}
function certainLanguage(Language) {
  let languageAuxiliar = [],
    index = 0;
  for (let A = 0; A < year.length; A++) {
    if (Language === language[A]) {
      languageAuxiliar[index] = title[A];
      index++;
    }
  }
  for (let B = 0; B < languageAuxiliar.length; B++) {
    console.log(`Livros Do Idioma ${Language}: ${languageAuxiliar[B]}`);
  }
}
function sortByYear() {
  let yearAuxiliar, titleAuxiliar, authorAuxiliar, languageAuxiliar;
  for (let A = 0; A < year.length; A++) {
    for (let i = 0; i < year.length - 1; i++) {
      if (year[i] < year[i + 1]) {
        yearAuxiliar = year[i];
        year[i] = year[i + 1];
        year[i + 1] = yearAuxiliar;

        titleAuxiliar = title[i];
        title[i] = title[i + 1];
        title[i + 1] = titleAuxiliar;

        authorAuxiliar = autor[i];
        autor[i] = autor[i + 1];
        autor[i + 1] = authorAuxiliar;

        languageAuxiliar = language[i];
        language[i] = language[i + 1];
        language[i + 1] = languageAuxiliar;
      }
    }
  }
  for (let index = 0; index < year.length; index++) {
    console.log(
      `Ano: ${year[index]} Titulo: ${title[index]} Autor:${autor[index]} Idioma: ${language[index]}`
    );
  }
}
