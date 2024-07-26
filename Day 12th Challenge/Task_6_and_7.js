// Error Handling in Promises

// Creating a promise that randomly resolves or rejects.
const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = Math.floor(Math.random() * 10);
        if (random <= 5) { resolve("Promise Fulfilled"); }
        else if (random >= 5 && random <= 10) { reject("Promise Rejected"); }
        else { console.log("Promise Pendiing"); }
    }, 2000);
})
.then((resolve) => console.log(resolve))
.catch((reject) => console.log(reject))


// Using try-catch within an async function to handle errors from a promise
function prom2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * 10);
            if (random <= 5) { resolve("Promise Fulfilled"); }
            else if (random >= 5 && random <= 10) { reject("Promise Rejected"); }
            else { console.log("Promise Pendiing"); }
        })
    })
}

async function msg() {
    try {
        const resolve = await prom2();
        console.log(resolve);
    }
    catch (reject) { console.log(reject); }
}

msg();
