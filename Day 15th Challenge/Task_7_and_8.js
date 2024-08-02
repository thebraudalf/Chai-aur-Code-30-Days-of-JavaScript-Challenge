// Memoization

// Writing a function that memoizes the result of another function
function funcMemo(fn) {
    const cache = {};

    return function (x1, x2) {
        // checking if the result is already in the cache
        if (cache[x1, x2] !== undefined) { return cache[x1, x2] }

        // computing the result 
        let res = fn(x1, x2);
        cache[x1, x2] = res; // stores the result in the cache 
        return res;

    }
}

function mul(val1, val2) { return val1 * val2; }

const FuncMemo = funcMemo(mul);

console.log(FuncMemo(3, 2));


// Creating a memoized function that calculates the factorial of number
function factMemo(fn) {
    const cache = {};

    return function (x) {
        // checking if result is already in the cache
        if (cache[x] !== undefined) { return cache[x]; }

        // computing the result 
        const res = fn(x);
        cache[x] = res; // stores the result in the cache
        return res;

    }


}

function fact(num) {
    factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    
    return factorial;
}

const FactMemo = factMemo(fact);

console.log(FactMemo(6));
