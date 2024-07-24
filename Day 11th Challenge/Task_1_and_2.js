// Understanding Promises

// Creating a promise that resolves with a message
let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Promise fulfilled!") }, 2000);

}).then((resolve) => { console.log(resolve) });


// Creating a promise that reject with an error message 
let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => { reject("Promise Rejected!") }, 2000);

}).catch((reject) => { console.log(reject) });
 