// Graceful Error Handling in Fetch

// Using the fetch API to request data from an invalid URL
const url = "https://api.github.com /users/theBraudalf";

const prom1 = new Promise((resolve, reject) => { 
    
    setTimeout(() => {
        resolve(fetch(url));
    }, 2000);

})
.then((response) => response.json())
.then((data) => console.log(data.name))
.catch((reject) => console.log(reject.message))


// Using the fetch API to request data from an invalid API within an async function
async function prom2() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(fetch(url));
        }, 2000);
     })
}

async function fetchData() {
    try {
        const response = await prom2();
        const data = await response.json();
        console.log(data.name);

    } catch (reject) {
        console.log(reject.message);
    }
}

fetchData();
