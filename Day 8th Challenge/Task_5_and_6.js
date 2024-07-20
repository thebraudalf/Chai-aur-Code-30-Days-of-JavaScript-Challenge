// Performing operation with spread and rest operators

// Using "..." sign or spread operator to create a new array 
const arr = [1, 2, 3, 4, 5];

console.log(`Old array : ${arr}`);

const newArr = [...arr, 6, 7, 8, 9, 10];

console.log(`New array : ${newArr}`);

// Using "..." sign or rest operator in function 
function sum(...args){
    return args.reduce((total, currentValue) => total + currentValue, 0);
}

console.log(sum(5,3,2));
