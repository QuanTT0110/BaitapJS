/*
## Move Capital Letters to the Front

Create a function that moves all capital letters to the front of a word.

Examples

```
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"
```

Notes: Keep the original relative order of the upper and lower case letters the same.


*/
function capToFront(str) {
  let upper = "";
  let lower = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      upper = upper + str.charAt(i);
    } else {
      lower = lower + str.charAt(i);
    }
  }
  return upper + lower;
}
function capToFront2(str) {
  let upper = [];
  let lower = [];
  let strArray = str.split("");
  strArray.forEach((item) => {
    if (item == String(item).toUpperCase()) {
      upper.push(item);
    } else {
      lower.push(item);
    }
  });
  return [...upper, ...lower].join("");
}
//A - Z= 65 - 90
//a - z= 97 - 122
console.log(capToFront2("moveMENT"));
