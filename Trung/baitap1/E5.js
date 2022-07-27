/*
## Square Every Digit

Create a function that squares every digit of a number.

Examples

```
squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649

squareDigits(3212) ➞ 9414

```

Notes: The function receives an integer and must return an integer.

---

*/
function squareDigits(num) {
  let rs = "";
  while (num >= 1) {
    let square = Math.pow(num % 10, 2);
    rs = String(square) + rs;
    num = Math.floor(num / 10);
  }
  return parseInt(rs);
}
console.log(typeof squareDigits(3212), squareDigits(3212));
