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
  autor.push(Author);
  title.push(Title);
  year.push(Year);
  language.push(Language);
}
function searchAuthorBook(Author) {
  let bookAuthor = [];

  autor.forEach(searchBook);

  function searchBook(item, index) {
    if (item == Author) {
      bookAuthor.push(title[index]);
    }
  }
  return alert(`Livros de ${Author}: ${bookAuthor}`);
}
function searchYearBook(Year) {
  let yearBook = [];

  year.forEach(searchYear);

  function searchYear(item, index) {
    if (item == Year) {
      yearBook.push(title[index]);
    }
  }
  return alert(`Livros do ano ${Year}: ${yearBook}`);
}
function authorBooksFromAGivenYear(AuthorName, Year) {
  let bookYearAuthor = [];

  year.forEach(AddBooksByXYear);

  function AddBooksByXYear(item, index) {
    if (item >= Year) {
      bookYearAuthor.push(title[index]);
    }
  }

  return alert(
    `Os Livros do Autor ${AuthorName} a partir do Ano ${Year} são: ${bookYearAuthor}`
  );
}
function bookLanguage(BookName) {
  let languageArray = [];

  BookName.forEach(searchLanguage);

  function searchLanguage(item, index) {
    if (item == BookName) {
      languageArray.push(language[index]);
    }
  }
  return alert(`Livro ${BookName} \nIdiomas: ${languageArray}`);
}
function certainLanguage(Language) {
  let idioma = [];

  language.forEach(FilterBooksByLanguage);

  function FilterBooksByLanguage(item, index) {
    if (item == Language) {
      idioma.push(title[index]);
    }
  }

  return alert(`Os Livros listados no idioma ${Language} são: ${idioma}`);
}
function sortByYear() {
  let booksName = [];
  for (let i = 0; i < year.length + 1; i++) {
    if (year[i] > year[i + 1]) {
      booksName.unshift(title[i + 1]);
      booksName.push(title[i]);
      booksName.pop();
    }

    if (year[i] < year[i + 1]) {
      booksName.unshift(title[i]);
      booksName.push(title[i + 1]);
    }
  }

  let sortBook = year;
  sortBook = sortBooks.sort();

  return alert(`{${sortBooks}} {${booksName}}`);
}
