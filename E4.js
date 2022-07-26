// ## Find the Second Largest Number

// Create a function that takes an array of numbers and returns the second largest number.

// Examples

// ```
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// secondLargest([25, 143, 89, 13, 105]) ➞ 105

// secondLargest([54, 23, 11, 17, 10]) ➞ 23
// ```

// Notes: There will be at least 3 numbers in the array.

function secondLargest(arr) {
    let sortedArr= arr.sort(function(a,b){
        return b-a;
    });
    return sortedArr[1]
}
console.log(secondLargest([10, 40, 30, 20, 50]))
