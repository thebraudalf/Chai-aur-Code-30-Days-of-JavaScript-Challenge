// Chaining Promises

// Creating an sequence of promises 
let fetchData = function (url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Data =  "Data fetched from " + url;
            resolve(Data);
        }, 2000);
    });
}

fetchData("Data1").then((Data1) => {
    console.log(Data1);
    return fetchData("Data2")
})
.then((Data2)=> {
    console.log(Data2);
    return fetchData("Data3")
})
.then((Data3) => { console.log(Data3) })
.catch((error) => { console.error("Error fetching data" + error) });
