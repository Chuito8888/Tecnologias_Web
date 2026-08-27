// Datos entregados por el Diego-Sensei
const books = [
  { title: "El Quijote", pages: 863, year: 1605, read: true },
  { title: "Clean Code", pages: 464, year: 2008, read: false },
  { title: "Fahrenheit 451", pages: 256, year: 1953, read: true },
  { title: "El Hobbit", pages: 310, year: 1937, read: false },
];

//Asigno una variable para mostrar los libros que No se han leido
const pendiente = books.filter((book) => !book.read);
//console.log(pendiente);

//Asigno una variable para mostrar los libros que SI se han leido
const leidos = books.filter((book) => book.read);
//console.log(leidos);

//Con map puedo crear un nuevo array para mostrar cada libro con solo el titulo, año y cantidad de paginas
const libros = books.map((book) => ({ title: book.title, year: book.year, pages: book.pages }));
//console.log(libros);

//Asigno una variable para mostrar el total de paginas de todos los libros
//reduce recorre todos los libros y en el acumulador va sumando la cantidad de paginas en cada libro
const total_pages = books.reduce((acc, book) => acc + book.pages, 0);
//console.log(total_pages);

//Creo una copia para no modificar el array original
//Ahora modifico el array copia y agrego una propiedad nueva a cada libro, que es el autor
let books_copia = books.map((book) => ({ ...book, author: "Autor Desconocido" }));
//console.log(books_copia);
//console.log(books); //El array original no se modifica
