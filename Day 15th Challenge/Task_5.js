// Closures in Loops

// Writing a loop that creates an array of functions
const functionArray = [];

for (let i = 0; i <= 3; i++) {
    functionArray[i] = (function funcIndex(i) {

        function logIndex() {
            return `Function index ${i}`;
        }

        return logIndex;
    })(i);

}

console.log(functionArray[0]());
console.log(functionArray[1]());
console.log(functionArray[3]());
