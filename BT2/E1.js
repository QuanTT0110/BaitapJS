// ## Reverse the Odd Length Words

// Given a string, reverse all the words which have odd length. The even length words are not changed.

// Examples

// ```
// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"

function reverseOdd(str) {
    let reverseStr = "";
    let arr = str.split(" ");
    for (let i=0; i < arr.length; i++) {
        if (arr[i].toString().length % 2 !== 0) {
            reverseStr += arr[i].toString().split('').reverse().join('');
            reverseStr += ' ';
        } else {
            reverseStr += arr[i].toString();
            reverseStr += ' ';
        }
    }
    return reverseStr;
}
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"))