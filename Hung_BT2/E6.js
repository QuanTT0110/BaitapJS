function multTable(x){
    let result = [];
    for(let i=1;i<=x;i++){
        let c = [];
        for(let j = 1;j<=x;j++){
            c.push(i*j);
        }
        result.push(c);
    }
    return result;
}

console.log(multTable(9));