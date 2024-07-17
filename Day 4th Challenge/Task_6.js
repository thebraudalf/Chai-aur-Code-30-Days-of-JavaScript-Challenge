// Performing operation with do... while loop
let n = 8;
let fact = 1;

// Using do, while keyword
let i = 1;

if(n<0){
    console.log("Factorial of negative number doesn't possible!!");
}
else{
    do{
        fact = fact * i;
        i++;
    }while(i<=n);
    console.log(fact);
}
