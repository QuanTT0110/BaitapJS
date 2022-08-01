const prompt = require("prompt-sync")();

const deck = ["1-s", "2-s", "3-s", "4-s", "5-s", "6-s", "7-s", "8-s", "9-s", "10-s", "J-s", "Q-s", "K-s",
    "1-d", "2-d", "3-d", "4-d", "5-d", "6-d", "7-d", "8-d", "9-d", "10-d", "J-d", "Q-d", "K-d",
    "1-c", "2-c", "3-c", "4-c", "5-c", "6-c", "7-c", "8-c", "9-c", "10-c", "J-c", "Q-c", "K-c",
    "1-h", "2-h", "3-h", "4-h", "5-h", "6-h", "7-h", "8-h", "9-h", "10-h", "J-h", "Q-h", "K-h",]


function shuffleCard(cards) {
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    console.log(cards);
    return cards
}


function dealCard() {   
    let shuffledCard = shuffleCard(deck)
    console.log("xao bai")
    console.log(shuffledCard)
    let players=[];
    let numberOfPlayer = parseInt(prompt("Please enter number of player(max is 17):"))
    if (numberOfPlayer > 17) numberOfPlayer = parseInt(prompt("Maximum player is 17, please enter number of player again:"))
    for(let i=1;i<=numberOfPlayer;i++){
        let card = []
        for(let j=1;j<=3;j++){
            card.push(shuffledCard.pop());
        }
        players.push(card);
    }
    return calculatePoint(players);
}


function check(cards) {
    let result = []
    for(let i=0 ; i<cards.length;i++){
        let splitCard =  cards[i].split("-");
        result.push(splitCard[0]);
    }
    if(result[0] === result[1] === result[2]){
        return 1;
    }else if ((result[0] === "J" || result[0]==="Q" || result[0]==="K") && (result[1] === "J" || result[1]==="Q" || result[1]==="K") && (result[2] === "J" || result[2]==="Q" || result[2]==="K"))
    {
        return 2;
    }
}


function calculatePoint(cards) {
    console.log(cards)
    const rs = []
    let point = 0;
    for (let i=0;i<cards.length;i++) {
        if (check(cards[i])===1) {
            rs.push(10)
        }else if (check(cards[i])===2) {
            rs.push(11)
        }else {
            for(let j=0;j<cards[i].length;j++){
                let card = cards[i][j].split("-");
                if(card[0] === "J" || card[0]==="Q" || card[0]==="K"){
                    point+=10;
                }else {
                    point+= parseInt(card[0]);
                }
            }
            rs.push(point%10);
        }
    }
    console.log(rs);
    return rs;
}


function result() {
    let dealed =  dealCard();
    let max =0;
    let result =0;
    for(let i =0 ; i<dealed.length;i++){
        if(dealed[i]>max){
            max = dealed[i];
            result = i;
        }
    }
    return result+1;
}


function main() {
console.log("The winner is player " + result());
}
main();



