## Array of Multiples

Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

Examples

```
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
```

Notes: Notice that num is also included in the returned array.

---

## Return the Objects Keys and Values

Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

Examples

```
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
```

Notes: Remember to sort the keys.

---

## Integer Digits Count

Create a function that counts the integer's number of digits.

Examples

```
count(318) ➞ 3

count(-92563) ➞ 5

count(4666) ➞ 4

count(-314890) ➞ 6

count(654321) ➞ 6

count(638476) ➞ 6
```

Notes:

- For an added challenge, try to solve this without using strings.
- Alternatively, you can solve this via a recursive approach.

---

## Find the Second Largest Number

Create a function that takes an array of numbers and returns the second largest number.

Examples

```
secondLargest([10, 40, 30, 20, 50]) ➞ 40

secondLargest([25, 143, 89, 13, 105]) ➞ 105

secondLargest([54, 23, 11, 17, 10]) ➞ 23
```

Notes: There will be at least 3 numbers in the array.

---

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

## Move Capital Letters to the Front

Create a function that moves all capital letters to the front of a word.

Examples

```
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"
```

Notes: Keep the original relative order of the upper and lower case letters the same.

---

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

## How Many Days Between Two Dates

Create a function that takes two dates and returns the number of days between the first and second date.

Examples

```
getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) ➞ 6


getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) ➞ 3
// Dates may not all be in the same month/year.


getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) ➞ 10
```
