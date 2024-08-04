// Recursion with Arrays

// Writing a recursive function to find the sum of all elements in an array
function sumOfArray(array) {

    // base case : if array is empty then return 0
    if (array.length === 0) { return 0; }

    // recursive case : add 0th element to no. of elements
    return array[0] + sumOfArray(array.slice(1));
}

console.log(sumOfArray([]));
console.log(sumOfArray([1, 3, 4]));


// Writing a recursive function to find the maximum no. in an array
function maxNoInArray(array) {

    // base case : if array is empty then return array first element
    if (array.length === 1) { return array[0]; }

    // recursive case : compare the 0th element to no. of the elements
    const maxNo = maxNoInArray(array.slice(1));

    if (array[0] > maxNo) { return array[0]; }

    else { return maxNo; }

}

console.log(maxNoInArray([10]));
console.log(maxNoInArray([1, 3, 5, 7, 4, 2]));
