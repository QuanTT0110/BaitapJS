const prompt = require('prompt-sync')();
const cards = ["A-1" , "2-1" , "3-1" , "4-1" ,"5-1" ,"6-1" ,"7-1","8-1","9-1","10-1","J-1" ,"Q-1","K-1",
"A-2" , "2-2" , "3-2" , "4-2" ,"5-2" ,"6-2" ,"7-2","8-2","9-2","10-2","J-2" ,"Q-2","K-2",
"A-3" , "2-3" , "3-3" , "4-3" ,"5-3" ,"6-3" ,"7-3","8-3","9-3","10-3","J-3" ,"Q-3","K-3",
"A-4" , "2-4" , "3-4" , "4-4" ,"5-4" ,"6-4" ,"7-4","8-4","9-4","10-4","J-4" ,"Q-4","K-4"];

function start(){
    console.log("The winner is " + printWinner());
    while(true){
        let a = prompt("Do you want play again ? y/n ")
        if(a==="y"){
            console.log("The winner is " +printWinner());
        }else if(a==="n") break;
    }
}

function chiaBai(){
    let n = prompt('How many players? ');
    if(n>17){
        return 0;
    }
    xaoBai();
    let result = [];
    for(let i=1;i<=n;i++){
        let c = []
        for(let j=1;j<=3;j++){
            c.push(randomElement());
        }
        result.push(c);
    }
    return caculatePoint(result);
}

function xaoBai() {
    for(let i = 1; i<5;i++){
        let cardss = cards.sort(() => Math.random() - 0.5)
        console.log(cardss);
    }
}

function caculatePoint(s){
    console.log(s);
    const result = [];
    for(let i =0;i<s.length;i++){
        let diem=0;
        if(check(s[i]) === 1){
           result.push(10);
        }else
        if(check(s[i]) === 2){
            result.push(11);
        }if(check(s[i]) === 3){
            for(let j=0;j<s[i].length;j++){
                let newS = s[i][j].split("-");
                if(newS[0] === "J" || newS[0]==="Q" || newS[0]==="K"){
                    diem+=10;
                }else
                if(newS[0]==="A"){
                    diem+=1;
                }
                else {
                    diem+= parseInt(newS[0]);
                }
            }
            result.push(diem%10);
        }
    }
    console.log(result);
    return result;
}

function printWinner(){
    let a =  chiaBai();
    let max =0;
    let index =0;
    for(let i =0 ; i<a.length;i++){
        if(a[i]>max){
            max = a[i];
            index = i;
        }
    }
    return index+1;
}

function check(s){
    let result = []
    for(let i=0 ; i<s.length;i++){
        let newS =  s[i].split("-");
        result.push(newS[0]);
    }
    if(result[0] === result[1] === result[2]){
        return 1;
    }else 
    if ((result[0] === "J" || result[0]==="Q" || result[0]==="K") && (result[1] === "J" || result[1]==="Q" || result[1]==="K") && (result[2] === "J" || result[2]==="Q" || result[2]==="K"))
    {
        return 2;
    }
    return 3;
}


function randomElement(){
        return cards[Math.floor(Math.random() * cards.length)];
}

start();




