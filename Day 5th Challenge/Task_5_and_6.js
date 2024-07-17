// Performing operation with arrow functions

// Using "=>" arrow sign 

// Function to calculate sum of two numbers
const calcSum = (num1, num2) => num1 + num2;

console.log(calcSum(2, 4));

// Function to check if a string contain a specific character
const strCheck = (str) => {
    const charRegex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    if (charRegex.test(str)) {console.log(true);}
    else {console.log(false);}
}

strCheck("HeyUser@123#456");
