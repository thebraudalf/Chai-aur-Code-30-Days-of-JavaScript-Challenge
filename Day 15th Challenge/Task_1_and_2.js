// Understanding Closures

// Writing a function that returns another function, to access var of outer function
function outer() {
    let Var = "This is outer function";

    function inner() {
        console.log(Var);
    }

    return inner;

}

const outerFunc = outer();

outerFunc();


// Creating a closure that maintains a private counter to increment and to get value.
function counterFunc(){
    let counterVar = 0;

    function counterValue() {
        counterVar++;
    }


    function getCounterValue() {
        console.log(counterVar);
    }

    counterValue();

    return getCounterValue;

}

const countFunc = counterFunc();

countFunc();
