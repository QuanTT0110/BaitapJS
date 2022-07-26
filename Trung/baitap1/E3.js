// Create a function that counts the integer's number of digits.

// Examples

// ```
// count(318) ➞ 3

// count(-92563) ➞ 5

// count(4666) ➞ 4

// count(-314890) ➞ 6

// count(654321) ➞ 6

// count(638476) ➞ 6
// ```

// Notes:

// - For an added challenge, try to solve this without using strings.
// - Alternatively, you can solve this via a recursive approach.

function count(num) {
  if (num < 0) num = Math.abs(num);
  if (num % 10 < 1) {
    return 0;
  } else {
    return 1 + count(Math.floor(num / 10));
  }
}

console.log(count(-92563132));
