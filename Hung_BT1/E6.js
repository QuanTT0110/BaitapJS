function capToFront(strs){
    let newStrs = strs.split("");
    let upper = []; 
    let lower = [];
    for (let i = 0; i < newStrs.length; i++)
        {
            if (newStrs[i] == newStrs[i].toUpperCase()){              
                upper.push(newStrs[i]);
            }
            if (newStrs[i] == newStrs[i].toLowerCase()){
                lower.push(newStrs[i]);
            }
        }
    return upper.join("").concat(lower.join(""));
}


console.log(capToFront("shOrtCAKE"));

 