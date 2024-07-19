// Performing operation with object methods 

//  Using "{}" curly brackets to create an object of book with properties like title, author, and year.

// Add a method which return string of book title and author
// Also add a method that takes parameter (year) and updates the book year

const book = {
    title: "titleOfBook",
    author: "authorOfBook",
    year: 2009,
    returnTiAu: function () {
        return `The title of this book is ${book.title} and author of this book is ${book.author}.`;
    },
    updateYear: function (year) {
        book.year = year;
        return`Updated year of book ${year}`;
    }

}

console.log(book.returnTiAu());
console.log(book.updateYear(2010));
