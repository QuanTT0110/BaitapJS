// ## Multiplication Table

// Create a function that takes an integer n and returns multiplication table of 1 to n numbers up to nth multiple.

// Examples

// ```
// multTable(2) ➞ [
//   [1, 2],
//   [2, 4]
// ]

// multTable(3) ➞ [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9]
// ]

// multTable(5) ➞ [
//   [1, 2, 3, 4, 5],
//   [2, 4, 6, 8, 10],
//   [3, 6, 9, 12, 15],
//   [4, 8, 12, 16, 20],
//   [5, 10, 15, 20, 25]
// ]

function multTable(n) {
    let arr = []
    for ( let i=1; i<=n;i++) {
        let arr2 = []
        for (let j=1; j<=n; j++) {
            arr2.push(i*j)
        }
        arr.push(arr2)
    }
    return arr;
}
console.log(multTable(5));