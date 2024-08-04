// Recursive Search

// Writing a recursive function to perform a binary search on a sorted array
function binarySearch(arr, targetElement, start = 0, end = arr.length - 1) {

    // base case : check if start element is greater than end, target not found
    if (start > end) { return -1; }

    const mid  = Math.floor((start + end) / 2);

    // recursive case : compare, lesser than, greater than mid element to target element 
    if (arr[mid] === targetElement) { return mid; }
    
    else if (arr[mid] < targetElement) {
        return binarySearch(arr, targetElement, mid + 1, end);
    }
    
    else { return binarySearch(arr, targetElement, mid - 1); }
}

const sortedArray = [1, 3, 5, 8, 10, 14, 17];

console.log(binarySearch(sortedArray, 14));
console.log(binarySearch(sortedArray, 8));


// Writing a recursive function to count the occurences of a target element in an array
function countOccur(arr, targetElement, index = 0) {
    
    // base case : check if index is equals to array length, return 0
    if (index === arr.length) { return 0; }

    // recursive case : compare first element with target element and start add with 1st index 
    const sameElement = arr[index] === targetElement ? 1 : 0; 

    return sameElement + countOccur(arr, targetElement, index + 1);

}

const arr1 = [1, 3, 4, 3, 1, 3, 3];

console.log(countOccur(arr1, 3));
console.log(countOccur(arr1, 4));
