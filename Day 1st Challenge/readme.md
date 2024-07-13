# Day: 1 Variables and Data Types 

### It is a part of 30 days of javascript challenge by chai aur code

<br>

## Activity 1: Declaration of variable

### Using var keyword
```js
// Declaration of var 
var testVar = 24;
console.log(testVar); //24
```

### Using let keyword 
```js
// Declaration of let
let testLet = "This is the test of let keyword";
console.log(testLet); //This is the test of let keyword
```

## [Code of Activity 1](Task_1_and_2.js)

<br>

## Activity 2: Declaration of constant 
### Using const keyword
```js
// Declaration of const
// Assigning true
const testConst1 = true;
console.log(testConst1); //true

// Assigning false
const testConst2 = false;
console.log(testConst2); //false 
```

## [Code of Activity 2](Task_3.js)

<br>

## Activity 3: Creation of variables of different data types 
- At first, we create variables of different data types.
- At last, we logs both the value and type of each variable to the console through typeof operator.

## [Code of Activity 3](Task_4.js)

<br>

## Activity 4: Reassignment of let keyword  
```js
// Assignment of let variable
let testLet = 1;
console.log(`Assigned value: ${testLet}`); //Assigned value: 1

// Reassignment of let variable
testLet = 3;
console.log(`Reassigned Value: ${testLet}`); //Reassigned Value: 3
```
- Ressignment can be done successfully in let variable. 

## [Code of Activity 4](Task_5.js)

<br>

## Activity 5: Reassignment of const keyword 
```js
// Assignment of constant variable
const testConst = 1;
console.log(`Assigned value: ${testConst}`); //Assigned value: 1

// Reassignment of constant variable
testConst = 3;
console.log(`Reassigned value: ${testConst}`); //TypeError: Assignment to constant variable.
```
- Reassignment can't be done in constant variable.  
- Because constant means which we can't change. Thus, we cannot reassign const variable.
- If we try to reassign constant variable the console will show us "TypeError: Assignment to constant variable."

## [Code of Activity 5](Task_6.js)


<br>
<br>

## Challenged by [Chai aur Code](https://github.com/hiteshchoudhary)<br> <br>Completed by [Nehal Jain](https://github.com/thebraudalf)