function reverseOdd(strs){
    if(checkSpace(strs) === true){
        let newStrs = strs.split(" ");
        for(let i =0;i<newStrs.length;i++){
            if(checkLength(newStrs[i]) === true){
                newStrs[i] = reverseString(newStrs[i]);
            }
        }
        return newStrs.join(" ");
    }
    else {
        if(checkLength(strs)===true){return reverseString(strs);}
            else {return strs}
    }
}

function checkSpace(s){
    return s.indexOf(' ') >= 0;
}

function reverseString(s){
    let newS = s.split("")
    newS.reverse();
    return newS.join("");
}

function checkLength(s){
    if(s.length%2!==0){
        return true;
    }
    return false;
}

console.log(reverseOdd("enO owt eerht four five six seven qweqwe rdasd"))