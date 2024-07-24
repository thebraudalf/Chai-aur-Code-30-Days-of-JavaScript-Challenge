// Concurrent Promises

const prom1 = new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000))
const prom2 = new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000))
const prom3 = new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
const prom4 = new Promise((resolve, reject) => setTimeout(() => resolve(4), 2000))

// Using promise.all to wait for multiple promises to resolve 
Promise.all([prom1, prom2, prom3, prom4]).then((value) => console.log(value));

// Using promise.race to log the value of the first promise 
Promise.race([prom1, prom2, prom3, prom4]).then((value) => console.log(value));
