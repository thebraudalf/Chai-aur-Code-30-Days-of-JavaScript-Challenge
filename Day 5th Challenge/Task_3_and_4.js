// Performing operations with function expression

// Using function keyword

// Function expression to find the maximum of two numbers
const maxNum = function (num1, num2) {
    if (num1 > num2) {console.log(`${num1} is the maximum number.`);}
    else {console.log(`${num2} is the maximum number.`);}
}

maxNum(3,2);

// Function expression to concatenate two strings
const concatStr = function (str1, str2) {
   let strConcat = str1 + str2;
    console.log(strConcat);
}

concatStr("Hii, ", "User");
