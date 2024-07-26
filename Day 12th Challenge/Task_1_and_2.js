// Basic Error Handling with Try-Catch

// Writing a function that intentionally throws an error 
function errThrow() {
    try {
        throw new Error("This error was thrown intentionally");
    } catch (error) {
        console.log(`${error} was found.`);
    }
}

errThrow();


// Creating a function that divides two numbers, and throws an error
function divide(num1, num2) {
    try {

        if (num2 === 0) { throw new Error("Denominator cannot be 0"); }

        return num1/num2;
    } catch (error) { console.log(`${error} was found.`); }
}

console.log(divide(2, 0));
