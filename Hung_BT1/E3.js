// ## Integer Digits Count

function count(num){
    if(num<0){
        num=num*(-1);
    }
    let count =0;
    while(num>1){
        num = num/10;
        count++;
    }
    return count;
}


console.log(count(-925612313))
