// Performing both Comparison and Logical operations
let num1 = 8;
let num2 = 2;

// Using >, <, and && operators
if (num1>num2 && num2<num1) {
    console.log(`${num1} is greater`); //8 is greater
} else {
    console.log(`${num2} is greater`);
};

// Using >=, <=, and || operators
if (num1>=num2 || num2<=num1) {
    console.log(`${num1} is greater`); //8 is greater
} else {
    console.log(`${num2} is greater`);
};

// Using == operator
if (num1==num2) {
    console.log(true);
} else {
    console.log(false); //false
};

// Using === and ! operators
let val1 = 1;
let val2 = 1;

if (!val1===val1) {
    console.log(true);  
} else {
    console.log(false); //false (because of ! operator)
};
