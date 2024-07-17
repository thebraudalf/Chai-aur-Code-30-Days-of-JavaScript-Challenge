// Performing declaration of function

// Using function keyword.

// Function to check number is even or odd 
function checkEveOdd(num){
    if (num%2===0) {console.log(`${num} is a even number.`);} 
    else {console.log(`${num} is a odd number.`);}
}

checkEveOdd(24);

// Function to calculate square
function calcSqr(num){
    if(num<0) {console.log("The number is non positive.");}
    else{
        let sqr = num * num;
        console.log(`Square of ${num} is ${sqr}.`);
    }
}

calcSqr(15);
