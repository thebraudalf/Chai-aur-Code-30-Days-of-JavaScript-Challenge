// String Manipulation with Recursion

// Writing a recursive function to reverse a string
function reverseStr(str) {

    // base case : if string is empty return empty string
    if (str === "") { return str; }

    // recursive case : add string parts to full string 
    let fullString = reverseStr(str.substring(0, str.length - 1));

    let reverseString = str[str.length - 1] + fullString ;
    
    return reverseString;
}

console.log(reverseStr("Hey User how are you?"));


// Writing a recursive function to check if a string is a palindrome
function palindromeStr(str) {
    
    // base case : if string has 0 or 1 characters, it's palindrome
    if (str.length <= 1) { return true; }

    // recursive case : compare the first and last character of the string
    if (str[0] !== str[str.length - 1]) { return false; }

    return palindromeStr(str.substring(1, str.length - 1)); 
}

function checkPalindrome(fn) {

    if (fn) { return`String is palindrome.`; }

    else { return`String is not a palindrome.`; }

}

console.log(checkPalindrome(palindromeStr("madam")));
console.log(checkPalindrome(palindromeStr("palindrome")));
