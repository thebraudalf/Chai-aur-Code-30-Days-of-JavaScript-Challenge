// Peforming operation with objects iteration


const book = {
    title: "titleOfBook",
    author: "authorOfBook",
    year: "publishYearOfBook"
}

// Using for...in loop to iterate over the properties of the book object
for (const key in book) {
    console.log(key, book[key]);
}


// Using Object.keys and Object.values methods
console.log(Object.keys(book));
console.log(Object.values(book));
