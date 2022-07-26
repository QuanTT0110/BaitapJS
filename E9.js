const prompt = require("prompt-sync")();
function randomPassword() {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const number = "0123456789"
    const symbol = "~!@#$%&()*+,-./"
    let randomPw =""
    let pw = ""
    let length = parseInt(prompt("Please enter length Password(interger):",20))
    let lower = String(prompt("Lowercase  ? (y/n):","y"))
    let upper = String(prompt("Uppercase  ? (y/n):","y"))
    let sym = String(prompt("Symbol  ? (y/n):","y"))
    let num = String(prompt("Number  ? (y/n):","y"))
    if (upper === "y") {
        randomPw += upperCase
    }
    if (lower === "y") {
        randomPw += lowerCase
    }
    if (num === "y") {
        randomPw += number
    }
    if (sym === "y") {
        randomPw += symbol
    }
    for ( let i=0; i<length; i++) {
        pw += randomPw[Math.floor(Math.random() * randomPw.length)]
    }
    return pw;
}
console.log(randomPassword());