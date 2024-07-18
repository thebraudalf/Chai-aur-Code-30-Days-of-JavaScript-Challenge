// Performing operation with array methods (Intermediate)

const array = [1, 2, 3, 4, 5];


// Using map() method to create a new array where each no. is doubled
const mapArr = array.map((e) => e * 2);
console.log(mapArr);

// Using filter() method to create a new array with only even numbers
const filterArr = array.filter((e) => e%2 === 0);
console.log(filterArr);

// Using reduce() method to calculate the sum of all numbers in the array
const reduceArr = array.reduce((e1, e2) => e1 + e2);
console.log(reduceArr);
