// Performing operation with function parameters and default values

// Using function keyword

// Function to get product
function prod(num1, num2 = 3){
    mul = num1 * num2;
    console.log(mul);
}

prod(3); 

// Function that takes person name and age
function greetMsg(person, age=18){
    console.log(`Hey ${person}, you are ${age} now.`);
}

greetMsg("User");
