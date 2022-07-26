//## Square Every Digit
function squareDigits(number){
    console.log(number);
    let nums = []
    let c ;
    while(number){
        c = number%10;
        nums.push(c);
        number =  (number -(number%10))/10;
        if(number<1){
            break;
        }
    }   
    for(let i = 0 ; i<nums.length;i++){
        nums[i] = nums[i]*nums[i];
    }
    return +nums.reverse().join("");
}


console.log(squareDigits(2483));