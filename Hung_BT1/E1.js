// ## Array of Multiples
function arrayOfMultiples(num , ls){
    let a = [];
    for(let i =1;i<=ls;i++){
        a[i-1] = num*i;
    }
    return a;
}

console.log(arrayOfMultiples(12, 10))






