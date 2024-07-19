// Performing operation with "this" keyword

// Using "{}" curly brackets to create an object of book
const book = {
    title: "titleOfBook",
    author: "authorOfBook",
    year: "publishYearOfBook",

    returnTiYe: function (){
        return`The title of the book is ${this.title} and publish year of the book is ${this.year}.`;
    }
}

// Add method to the book object which return string of book title and year.
console.log(book.returnTiYe());
