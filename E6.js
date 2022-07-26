// ## Move Capital Letters to the Front

// Create a function that moves all capital letters to the front of a word.

// Examples

// ```
// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
// ```

// Notes: Keep the original relative order of the upper and lower case letters the same.

function capToFront(str) {
    let upperCase = "";
    let lowerCase = "";
    
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i).toUpperCase()) {
            upperCase += str.charAt(i);
        }else {
            lowerCase += str.charAt(i);
        }
    }
    return upperCase + lowerCase;
}

console.log(capToFront("hApPy"))