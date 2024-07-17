// Performing operation with nested loop
let str = "";

// Using for keyword
for(let i=1; i<=5; i++){
    for(let j=0; j<i; j++){
        str += "*";
    }
    str += "\n";
}
console.log(str);
