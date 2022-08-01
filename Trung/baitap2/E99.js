const prompt = require("prompt-sync")();

//xào bài
function shuffle(cards) {
    let random = Math.random() * Math.pow(10, 53);
    cards.sort((a, b) => {
        random /= 10;

        return 0.5 - random % 10 * 0.1;
    })
    return cards;
}
// tính điểm của 3 lá bài
function calculate(cards) {
    let point = 0;
    let tencard = true;
    cards.forEach((card) => {
        let splitCard = card.split('-');
        point += parseInt(splitCard[0])
        if (splitCard[1] == '0')
            tencard = false;
    })
    if (point == 30 && tencard) {
        return point;
    }
    else
        return point % 10;
}
// kiểm tra có đôi
function checkDuplicate(cards) {
    let names = cards.map((card) => {
        return card.split('-')[0]
    })
    for (let i = 0; i < 3; i++) {
        let value = 0;
        for (let j = 0; j < 3; j++) {
            if (names[i] == names[j])
                value++;
        }
        console.log(value)
        if (value >= 2)
            return true;
    }
    return false;
}
// tìm người chơi thắng cuộc
function playerWin(points, playerCards) {
    const maxPoint = Math.max(...points);
    let indexOfMax = [];
    points.forEach((point, index) => {
        if (point == maxPoint) {
            indexOfMax.push(index);
        }
    })
    if (indexOfMax.length == 1) {
        return indexOfMax[0];
    }
    // kiểm tra đôi
    const newIndexOfMax = indexOfMax.reduce((newIndexOfMax, index) => {
        if (checkDuplicate(playerCards[index])) {

            newIndexOfMax.push(index)
            return newIndexOfMax
        }
        return newIndexOfMax
    }, [])
    console.log(newIndexOfMax)
    // kiểm tra lá lớn nhắt
    if (newIndexOfMax.length > 0) {
        if (newIndexOfMax.length == 1)
            return newIndexOfMax[0]
    } else {

    }
    return indexOfMax;
}
const delay = n => new Promise(r => setTimeout(r, n));
async function main() {
    let countPlayer;
    countPlayer = parseInt(prompt("enter number of player(interger/max 17 players):")) || 3;
    const cards = [
        '1-1', '2-1', '3-1', '4-1', '5-1', '6-1', '7-1', '8-1', '9-1', '10-0-1', '10-1-1', '10-2-1', '10-3-1',
        '1-2', '2-2', '3-2', '4-2', '5-2', '6-2', '7-2', '8-2', '9-2', '10-0-2', '10-1-2', '10-2-2', '10-3-2',
        '1-3', '2-3', '3-3', '4-3', '5-3', '6-3', '7-3', '8-3', '9-3', '10-0-3', '10-1-3', '10-2-3', '10-3-3',
        '1-4', '2-4', '3-4', '4-4', '5-4', '6-4', '7-4', '8-4', '9-4', '10-0-4', '10-1-4', '10-2-4', '10-3-4',
    ];
    // xao bai
    const shuffleCards = [...cards];
    for (let i = 0; i < 3; i++) {
        shuffle(shuffleCards)
        console.log('xao bai')
        console.log(shuffleCards)
        await delay(10)
        console.clear()
    }
    // chia bai
    console.log(shuffleCards);
    const players = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < countPlayer; j++) {
            players[j] ? players[j].push(shuffleCards.pop()) : players[j] = [shuffleCards.pop()]
        }
        console.log(players)
        await delay(10)
        console.clear()
    }
    // tinh diem 
    const points = players.map((player) => {
        return calculate(player);
    })
    console.log(players);
    console.log(points);
    console.log('Player win is :' + playerWin(points, playerCards));
}
main();





/*function pointOfCard(card) {
    let splitCard = card.split('-');
    return splitCard[2] ? parseFloat(splitCard[0]) + parseFloat(splitCard[1]) * 0.2 + parseFloat(splitCard[2]) * 0.05 :
        parseFloat(splitCard[0]) + parseFloat(splitCard[1]) * 0.2;
}
*/

    // let card10Exist = false;
    // let countDuplicates;
    // let nameCard;
    // playerCards.forEach((cards) => {
    //     countDuplicates = 0;
    //     nameCard = cards[0].n;
    //     let point = cards.reduce((point, card) => {
    //         if (card.n == '10')
    //             card10Exist = true;
    //         if (card.n == nameCard)
    //             countDuplicates++;
    //         return point + card.v;
    //     }, 0)

    //     if (countDuplicates > 2) {
    //         playerPoints.push(40);
    //     } else {
    //         if (point == 30) {
    //             if (card10Exist)
    //                 playerPoints.push(0);
    //             else
    //                 playerPoints.push(point);
    //         } else {
    //             playerPoints.push(point % 10);
    //         }
    //     }
    //     card10Exist = false;
    // })