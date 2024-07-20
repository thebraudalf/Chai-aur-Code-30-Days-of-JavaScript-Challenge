// Peforming operation with enhanced object literals

/// Using enhanced object literals to create an object 

// object with variable properties
const title = "titleOfBook";
const author = "authorOfBook";
const year = "yearOfBook";

// object with variable methods
const returnTiAu = () => `The title of book is ${book1.title} and author of book is ${book1.author}`;

// object of shorthand properties and methods
const book1 = { title, author, year, returnTiAu };

console.log(book1);


/// Using computed property names to create an object
const bookAuthor = "author";
const bookPublishYear = "year";

const book2 = {
    title : "Harry Potter",
    [bookAuthor] : "J. K. Rowling",
    [bookPublishYear] : 2000
} 

console.log(book2);
