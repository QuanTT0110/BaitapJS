/*


## Mirror Array

Given an integer array, transform that array into a mirror.

Examples

```
mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
```

Notes: Do not repeat the last item of the given array.

---

*/
function mirror(arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    arr.push(arr[i]);
  }
  console.log(...arr);
  return arr;
}
function mirror2(arr) {
  let oldArr = [...arr];
  arr.reverse();
  larr.shift();
  return oldArr.concat(arr);
}
console.log(mirror([0, 2, 4, 6])); //
