// ## Any Prime Number in Range

// Create a function that returns true if there's at least one prime number in the given range (n1 to n2 (inclusive)), false otherwise.

// Examples

// ```
// primeInRange(10, 15) ➞ true
// // Prime numbers in range: 11, 13

// primeInRange(62, 66) ➞ false
// // No prime numbers in range.

// primeInRange(3, 5) ➞ true
// // Prime numbers in range: 3, 5
// ```

// Notes:
// - n2 is always greater than n1.
// - n1 and n2 are always positive.
// - 0 and 1 aren't prime numbers.

function primeInRange(a,b) {
    let arr=[];
    if (b<a) {
        console.log("n2 is always greater than n1.")
    }
    if (a<=0 && b<=0) {
        console.log("n1 and n2 are always positive.")
    }
    for (let i=a;i<=b;i++) {
        if(i == 1 || i == 0) continue;
        for (let j=2;j<=i/2;j++) {
            if (i % j == 0) return false;
        }
        return true;
    }
}
console.log(primeInRange(62,66))