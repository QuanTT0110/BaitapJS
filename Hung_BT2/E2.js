//## Least common multiple (LCM) of Two Numbers
function lcm(a,b){
    if(b%a==0){
        return b;
    }
    if(a%b==0){
        return a;
    }
    let big = Math.max(a, b);
    let small = Math.min(a, b);
    let i = big;
    while(i % small !== 0){
        i += big;
    }
  return i;
}


console.log(lcm(17, 11));