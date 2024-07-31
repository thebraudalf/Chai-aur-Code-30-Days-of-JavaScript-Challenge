// *********************************Activity 1******************************************
// Class Definition

// Define a class name person with properties name and age (Task 1)
// Add a method to person class which updates age property (Task 2)
class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    greetings() {
        console.log(`Hii, ${this.name} your age is ${this.age}.`);
    }

    // Task 2
    updatedAge(age) {
        console.log(`Old age is ${this.age} and new age is ${this.age = age}`);
    }

    // Task 5
    static greet(name) {
        return`Hello, ${name}.`;
    }

}

console.log("**************Activity 1******************");

const person = new Person("User", 18);
console.log(person.name);
person.greetings();
console.log(person instanceof Person);

person.updatedAge(17);


console.log("\n");

// *********************************Activity 2******************************************
// Class Inheritance

// Defining a Student class that extents from person class (Task 3)
// Overriding greetings method in Student class (Task 4)
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        
        this.name = name,
        this.age = age,
        this.studentId = studentId

        Student.studentRecord++;
    }

    // Task 6
    static studentRecord = 0;

    returnStudentId() {
        return`Student id is ${this.studentId}`;
    }
    
    greetings() {
        return`Student id is ${this.studentId} in greeting.`;
    }

}

console.log("**************Activity 2******************");

const student = new Student("User", 18, 100);
console.log(student.age);
console.log(student.returnStudentId());
console.log(student instanceof Student);

console.log(student.greetings());


console.log("\n");

// *********************************Activity 3******************************************
// Statuc Properties and Methods

// Adding a static generic greeting method in Person class (Task 5)
// Adding a static property to keep track no. of students in Student class (Task 6)

console.log("**************Activity 3******************");

console.log(Person.greet("User")); 

const student1 = new Student("User", 17, 101);
const student2 = new Student("User", 17, 102);
const student3 = new Student("User", 17, 103);

console.log(`No. of students are ${Student.studentRecord}.`);


console.log("\n");

// *********************************Activity 4******************************************
// Getters and Setters

// Adding a getter method to person class to return the full name (Task 7)
// Adding a setter method to person class to update the name properties (Task 8)
class Person1 {
    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName;
    }
    
    get fullname(){
        return`${this.firstName} ${this.lastName}`;
    }
    
    set updateName({firstName, lastName}){
        this.firstName = firstName,
        this.lastName = lastName
    }
}

console.log("**************Activity 4******************");

const person1 = new Person1("User", "Name");

console.log(person1.fullname);
console.log(person1 instanceof Person1);

person1.updateName = {firstName : "Person", lastName : "Name"};
console.log(person1.fullname);


console.log("\n");

// *********************************Activity 5******************************************
// Private Field

// Defining a Account class with private fields for balance and a method to deposit and withdraw money (Task 9)
// Creating an instance of Account class and test the deposit and withdraw methods (Task 10)
class Account {
    #balance;
    constructor(balance){
        
        if(balance <= 0){ throw new Error("First balance cannot be empty."); }

        this.#balance = balance;
    }

    #depositMoney(amount){

        if (amount <= 0) { console.log("Money cannot be deposited.") }
        else { 
            this.#balance += amount; 
            return`Your deposited money is $${amount}.`; 
        }
    } 
    
    #withdrawMoney(amount){
        
        if(amount <= 0){ console.log("You cannot withdraw money.") }
        else {
            this.#balance -= amount;
            return`Your withdrawal money is $${amount}.`; 
        }
        
    }
    
    depositMoney(amount){ return this.#depositMoney(amount); }
    
    withdrawMoney(amount){ return this.#withdrawMoney(amount); }

    getbalance(){ return this.#balance; }

}

console.log("**************Activity 5******************");

const account = new Account(2000);
console.log(account.getbalance());

console.log(account.depositMoney(220));
console.log(account.getbalance());

console.log(account.withdrawMoney(0));
console.log(account.getbalance());


console.log("\n");
