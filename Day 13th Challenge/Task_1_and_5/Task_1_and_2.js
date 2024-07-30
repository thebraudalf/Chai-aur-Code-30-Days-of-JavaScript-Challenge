// Creating and Exporting Modules

// Creating a module that exports a function to add two numbers
const add = (num1, num2) => num1 + num2;

export { add };


// Creating a module that exports an object representing a person
const person = {
    name: "user",
    age: 1,
    personName: function (name) {
        console.log(`Person name is ${person.name = name}.`);
    },
    personAge: function (age) { console.log(`Person age is ${this.age = age}.`) }
}

export { person };
