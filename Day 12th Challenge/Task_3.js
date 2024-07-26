// Finally Block

// Writing a script that includes try catch block and finally block 
function test() {
    try {
        throw new Error("This is an error message");
    }
    catch (error) { console.log(error + " was found."); }
    finally { console.log("Finally Block is working."); }
}

test();
