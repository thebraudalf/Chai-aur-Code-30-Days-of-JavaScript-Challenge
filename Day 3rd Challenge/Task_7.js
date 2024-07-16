// Combining conditions with if-else statements

let year = 2024;

// Using if, else keywords

// the leap year is divisible of 400 and 4 but not a divisible of 100
if((year%400 === 0) || (year%100 != 0) && (year%4 == 0)) 
{console.log("This is a leap year");}

else {console.log("This is a non leap year");}
