// Practical Closures

// Writing a function that generates unique id's. Using a closure to keep track 
function uniqueId() {
    let uniqueId = Math.floor(Math.random()*10);

    function generateUniqueId() {
        uniqueId++;
    }

    function lastUniqueId() {
        console.log(uniqueId);
    }

    generateUniqueId();

    return lastUniqueId;

}

const UniqueId = uniqueId();

UniqueId();


// Creating a closure that captures username and return greet function
function captureUsersName() {

    function greet(usersName) {
        console.log(`Hey, ${this.usersName = usersName}!`);
    }

    return greet;

}

const getUsersName = captureUsersName();

getUsersName("Rohan");
getUsersName("Rahul");
getUsersName("Rishi");
