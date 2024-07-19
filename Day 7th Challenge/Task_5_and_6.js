// Performing operation with nested objects

// Using "{}" curly brackets to create an object of library 
const library = {
    name: "bookLib",
    books: [
        { title: "title1", author: "author1", year: "2001" },
        { title: "title2", author: "author2", year: "2002" },
        { title: "title3", author: "author3", year: "2003" },
        { title: "title4", author: "author4", year: "2004" },
    ]
}

// Access the name of the library and titles of all the books

console.log(library.name);

console.table(library.books.map( book => book.title));
