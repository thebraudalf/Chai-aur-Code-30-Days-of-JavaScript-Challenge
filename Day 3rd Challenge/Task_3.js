// Performimg Nested If-else statements

num1 = 1;
num2 = 2;
num3 = 3;

// Using if, else keywords
if(num1 >= num2) {
    if(num1 >= num3) {console.log(`${num1} is the largest number`);}
    else {console.log(`${num3} is the largest number`);}
}
else {
    if(num3 >= num2) {console.log(`${num3} is the largest number`);}
    else {console.log(`${num2} is the largest number`);}
}
