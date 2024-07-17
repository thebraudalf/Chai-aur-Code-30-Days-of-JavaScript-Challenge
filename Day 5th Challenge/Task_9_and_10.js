// Peforming operation with higher-order functions

// Using function keyword

// Function that takes a function and a number
function hof(anotherFunction, num){
    for(i=1; i<num; i++){
        anotherFunction();
    }
}

function hofCheck() {
    console.log("Higher order function is working!!!");
}

hof(hofCheck, 5);


// Function that takes two function and a value
function twoFunctionsCheck(firstFunction, secondFunction, value){
    return secondFunction(firstFunction(value));
}

function addFunc(val){
    return val + val;
}

function mulFunc(val){
    return val * val;
}

const res = twoFunctionsCheck(addFunc, mulFunc, 5);
console.log(res);
