// ## Square Every Digit

// Create a function that squares every digit of a number.

// Examples

// ```
// squareDigits(9119) ➞ 811181

// squareDigits(2483) ➞ 416649

// squareDigits(3212) ➞ 9414

// ```

// Notes: The function receives an integer and must return an integer.

function squareDigits(n) {
    let num = n.toString().split('');
    return parseInt(num.map(function(a) {
        return a*a;
    }).join(''));
}

console.log(squareDigits(3212))