// Named and Default Exports

// Creating a module that exports a multiple function using named exports
const sub = (num1, num2) => num1 - num2;

const mul = (num1, num2) => num1 * num2;

const printMyName = (name) => console.log(`Your name is ${name}`); 

export {sub, mul, printMyName}
