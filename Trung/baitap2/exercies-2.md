## Reverse the Odd Length Words

Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples

```
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
```

-----------------

## Least common multiple (LCM) of Two Numbers

Write a function that returns the least common multiple (LCM) of two integers.

Examples

```
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
```

Notes:
- Both values will be positive.
- The LCM is the smallest integer that is divisible by both numbers such that the remainder is zero.

-----------------

## Numbers in Strings

Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

Examples

```
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
```

Notes:
- The strings can contain white spaces or any type of characters.
- Bonus: Try solving this without RegEx.

-----------------

## Any Prime Number in Range

Create a function that returns true if there's at least one prime number in the given range (n1 to n2 (inclusive)), false otherwise.

Examples

```
primeInRange(10, 15) ➞ true
// Prime numbers in range: 11, 13

primeInRange(62, 66) ➞ false
// No prime numbers in range.

primeInRange(3, 5) ➞ true
// Prime numbers in range: 3, 5
```

Notes:
- n2 is always greater than n1.
- n1 and n2 are always positive.
- 0 and 1 aren't prime numbers.

-----------------

## How Many Days Until 2023

Given a date, return how many days date is away from 2023 (end date not included). date will be in mm/dd/yyyy format.

Examples

```
daysUntil2023("12/28/2022") ➞ "3 days"

daysUntil2023("1/1/2022") ➞ "366 days"

daysUntil2023("2/28/2022") ➞ "308 days"
```

-----------------

## Multiplication Table

Create a function that takes an integer n and returns multiplication table of 1 to n numbers up to nth multiple.

Examples

```
multTable(2) ➞ [
  [1, 2],
  [2, 4]
]

multTable(3) ➞ [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9]
]

multTable(5) ➞ [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20],
  [5, 10, 15, 20, 25]
]
```

-----------------

## Weekly Salary

Write a function that takes a list of hours and returns the total weekly salary.

- The input list hours is listed sequentially, ordered from Monday to Sunday.
- A worker earns $10 an hour for the first 8 hours.
- For every overtime hour, he earns $15.
- On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.

Examples

```
weeklySalary([8, 8, 8, 8, 8, 0, 0]) ➞ 400

weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410

weeklySalary([0, 0, 0, 0, 0, 12, 0]) ➞ 280
```

Notes
- Every element in the array is greater than or equal to 0.

-----------------

## Map the Letters in a String

Given a word, create an object that stores the indexes of each letter in an array.

- Make sure the letters are the keys.
- Make sure the letters are symbols.
- Make sure the indexes are stored in an array and those arrays are values.

Examples

```
mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
```

Notes
- All strings given will be lowercase.
