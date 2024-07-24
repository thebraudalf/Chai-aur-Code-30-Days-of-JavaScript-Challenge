// Using Async/Await

// Writing an async function that waits for a promise to resolve 
async function promise1() {
    return new Promise((resolve, reject) => setTimeout(() => resolve("Promise 1 fulfilled!"), 2000));
}

async function test1() {
    console.log("Promise 1 Pending");
    let response = await promise1();
    console.log(response);
}

test1();


// Writing an async function that handles an rejected promise 
async function promise2() {
    return new Promise((resolve, reject) => setTimeout(() => reject("Promise 2 rejected!"), 2000)); 
}

async function test2() {
    try {
        console.log("Promise 2 Pending");
        let response = await promise2();
        console.log(response);
    }catch(error) { console.log(error) }
}

test2();
