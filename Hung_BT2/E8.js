function mapLetters(str){
    let newStr = str.split("")
    let result = {}
    for(let i=0;i<newStr.length;i++){
        let c= [];
        for(let j=0;j<newStr.length;j++)
            {
                if(newStr[i] === newStr[j]){
                c.push(j);
                result[newStr[i]] = c;
                }
            }
    }   
    return result;
}


console.log(mapLetters("grapesqwesaqweqwasdwqewq"));