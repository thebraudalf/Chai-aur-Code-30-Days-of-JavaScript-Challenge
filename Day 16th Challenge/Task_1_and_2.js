// Basic Recursion

// Writing a recursive function to calculate the factorial of a number
function factorial(num) {

    // base case : if num is lesser than 1 return 1
    if (num <= 1) { return 1; }

    // recursive case : multiply num with their smaller no.
    return (num * factorial(num - 1)); 
}

console.log(factorial(6));


// Writing a recursive function to calculate the nth fibonacci number
const fibonacci = (num) => {
    
    // base case : if num is lesser than 1 return num
    if (num <= 1) { return num; }

    // recursive case : less num with 1 and less num with 2 and then add both 
    return (fibonacci(num - 1) + fibonacci(num - 2));
}

console.log(fibonacci(8));
