// ## Return the Objects Keys and Values

// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples

// ```
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// ```

// Notes: Remember to sort the keys.
function keysAndValues(obj) {
  let keys = [];
  let values = [];
  for (var key in obj) {
    keys.push(key);
    values.push(obj[key]);
  }
  let n = keys.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (keys[i] > keys[j]) {
        let KEY = keys[i];
        keys[i] = keys[j];
        keys[j] = KEY;
        let VALUE = values[i];
        values[i] = values[j];
        values[j] = VALUE;
      }
    }
  }
  console.log([keys, values]);
  return [keys, values];
}
//
function keysAndValues2(obj) {
  let keys = [];
  let values = [];
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      keys.push(key);
      values.push(obj[key]);
    });
  console.log([keys, values]);

  return [keys, values];
}
keysAndValues2({ b: "Microsoft", c: "Google", a: "Apple" });
