// Performing operation with array and object destructuring

// Using "[]" square brackets to destruct an array
const array =  [1, 2, 3, 4, 5];

const [One, Two] = array;

console.log(One);
console.log(Two);

// Using "{}" curly brackets to destruct an object
const book = { title : "titleOfBook", author : "authorOfBook" };

const {title : bookTitle, author : bookAuthor} = book;

console.log(bookTitle);
console.log(bookAuthor);
