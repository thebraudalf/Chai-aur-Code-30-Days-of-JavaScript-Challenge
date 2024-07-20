// Performing operation with default parameters

// Write an function that takes two parameters and product them.
function prod( val1 ,val2 = 2){
    return val1 * val2;
}

console.log(prod(1,3));

console.log(prod(1,));
