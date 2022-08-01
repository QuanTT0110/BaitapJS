//## Any Prime Number in Range

function primeInRange(a,b){
    for(let i=a; i<=b;i++){
        if(checkPrime(i)){
            return true;
        }
    }
    return false;
}

function checkPrime(c){
    if(c<2){
        return false;
    }
    for(let i =2 ; i<c/2;i++){
        if(c%i==0){
            return false;
        }
    }
    return true;
}


console.log(primeInRange(2, 9));