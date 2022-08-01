//## Numbers in Strings
function numInStr(arr){
    let result = [];
    for(let i = 0;i<arr.length-1;i++){
        if(checkNumber(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

function checkNumber(str) {
    return /\d/.test(str);
  }
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));