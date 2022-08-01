const prompt = require("prompt-sync")();
const delay = n => new Promise(r => setTimeout(r, n));
//game play : 3 lá, 3 tiên, đôi, lá lớn nhất + (cơ/rô/chuồn/bích)
//khởi tạo giá trị
const cards = [
    { n: 'A', v: 1, l: 1 }, { n: 'A', v: 1, l: 2 }, { n: 'A', v: 1, l: 3 }, { n: 'A', v: 1, l: 4 },
    { n: '2', v: 2, l: 1 }, { n: '2', v: 2, l: 2 }, { n: '2', v: 2, l: 3 }, { n: '2', v: 2, l: 4 },
    { n: '3', v: 3, l: 1 }, { n: '3', v: 3, l: 2 }, { n: '3', v: 3, l: 3 }, { n: '3', v: 3, l: 4 },
    { n: '4', v: 4, l: 1 }, { n: '4', v: 4, l: 2 }, { n: '4', v: 4, l: 3 }, { n: '4', v: 4, l: 4 },
    { n: '5', v: 5, l: 1 }, { n: '5', v: 5, l: 2 }, { n: '5', v: 5, l: 3 }, { n: '5', v: 5, l: 4 },
    { n: '6', v: 6, l: 1 }, { n: '6', v: 6, l: 2 }, { n: '6', v: 6, l: 3 }, { n: '6', v: 6, l: 4 },
    { n: '7', v: 7, l: 1 }, { n: '7', v: 7, l: 2 }, { n: '7', v: 7, l: 3 }, { n: '7', v: 7, l: 4 },
    { n: '8', v: 8, l: 1 }, { n: '8', v: 8, l: 2 }, { n: '8', v: 8, l: 3 }, { n: '8', v: 8, l: 4 },
    { n: '9', v: 9, l: 1 }, { n: '9', v: 9, l: 2 }, { n: '9', v: 9, l: 3 }, { n: '9', v: 9, l: 4 },
    { n: '10', v: 10, l: 1 }, { n: '10', v: 10, l: 2 }, { n: '10', v: 10, l: 1 }, { n: '10', v: 10, l: 4 },
    { n: 'J', v: 10, l: 1 }, { n: 'J', v: 10, l: 2 }, { n: 'J', v: 10, l: 3 }, { n: 'J', v: 10, l: 4 },
    { n: 'Q', v: 10, l: 1 }, { n: 'Q', v: 10, l: 2 }, { n: 'Q', v: 10, l: 3 }, { n: 'Q', v: 10, l: 4 },
    { n: 'K', v: 10, l: 1 }, { n: 'K', v: 10, l: 2 }, { n: 'K', v: 10, l: 3 }, { n: 'K', v: 10, l: 4 },
]
const regexInteger = /\d/;
function print(playerCards, points) {
    console.clear();
    if (points) {
        playerCards.forEach((cards, index) => {
            console.log(`Player ${index}: ${cards[0]?.n} ${cards[1]?.n} ${cards[2]?.n}, total ${points[index]}`);
        })
    } else {
        playerCards.forEach((cards, index) => {
            console.log(`Player ${index}: ${cards[0]?.n} ${cards[1]?.n} ${cards[2]?.n}`);
        })
    }
}
// xáo bài
function shuffle(cards) {
    console.log('Xào bài');
    let random = Math.random() * Number.MAX_VALUE;
    cards.sort(() => {
        random /= 10;
        return 0.5 - random % 10 * 0.1;
    })
}
// Tính điểm bộ bài của mỗi người 
function calculatePoint(playerCards) {
    playerPoints = playerCards.map((cards) => {
        let card10Exist = false;
        let countDuplicates = 0;
        let nameCard = cards[0].n;
        let point = cards.reduce((point, card) => {
            if (card.n == '10')
                card10Exist = true;
            if (card.n == nameCard)
                countDuplicates++;
            return point + card.v;
        }, 0)

        if (countDuplicates > 2)
            return 40;
        if (point > 29) {
            if (card10Exist)
                return 0
            return 30;
        }
        return point % 10;
    })
    return playerPoints;
}
// Tính điểm lá theo mức độ ưu tiên
function priorityPoint(card, duplicate = false) {
    let temp = 0;
    if (regexInteger.test(card.n)) {
        temp = card.v + card.l * 0.1;
    } else {
        switch (card.n) {
            case 'A':
                if (duplicate)
                    temp = card.v + card.l * 0.1;
                else
                    temp = card.v + card.l * 0.1 + 15;
                break;
            case 'K':
                temp = card.v + card.l * 0.1 + 3;
                break;
            case 'Q':
                temp = card.v + card.l * 0.1 + 2;
                break;
            case 'J':
                temp = card.v + card.l * 0.1 + 1;
                break;
            default:
                break;
        }
    }
    return temp;
}
// Tìm người thằng theo độ ưu tiên lá bài
function searchPriority(playerCards, indexsOfMax, duplicate = false) {
    const points = indexsOfMax.map((item) => {
        return playerCards[item].reduce((point, card) => {
            let temp = priorityPoint(card, duplicate);
            return temp > point ? temp : point;
        }, 0);
    });
    if (duplicate) {
        let minPoint = Math.min(...points)
        for (let i = 0; i < points.length; i++) {
            if (points[i] == minPoint)
                return indexsOfMax[i];
        }
    } else {
        let maxPoint = Math.max(...points)
        for (let i = 0; i < points.length; i++) {
            if (points[i] == maxPoint)
                return indexsOfMax[i];
        }
    }
    return indexsOfMax;
}
// tìm kiếm người chiến thắng
function searchWinners(playerCards, playerPoints) {
    const maxPoint = Math.max(...playerPoints);
    // vị trí những người cao điểm nhất
    const indexsOfMax = [];
    playerPoints.forEach((point, index) => {
        if (point == maxPoint)
            indexsOfMax.push(index)
    })
    if (indexsOfMax.length == 1)
        return indexsOfMax;
    // những ngươi chơi có 3 lá giống nhau
    if (maxPoint > 30) {
        return searchPriority(playerCards, indexsOfMax, true)
    }
    // vị trí những người có đôi trong số những người cao điểm
    const searchCouple = indexsOfMax.filter((item) => {
        for (let i = 0; i < 2; i++) {
            for (let j = i + 1; j < 3; j++) {
                if (playerCards[item][i].n == playerCards[item][j].n)
                    return true;
            }
        }
        return false;
    })
    if (searchCouple.length >= 1) {
        if (searchCouple.length == 1)
            return searchCouple;
        return searchPriority(playerCards, searchCouple);
    }
    return searchPriority(playerCards, indexsOfMax);
}
async function main() {
    //bắt đầu
    let countPlayer = parseInt(prompt("enter number of player(interger/max 17 players):")) || 3;
    countPlayer = countPlayer < 17 && countPlayer > 1 ? countPlayer : 3;
    let copyCards = [...cards];
    let playerCards = [];
    while (true) {
        let playerPoints;
        shuffle(copyCards);
        await delay(3000);
        console.log(copyCards);
        await delay(3000);
        console.clear();
        for (let i = 0; i < 3; i++) {
            for (let i = 0; i < countPlayer; i++) {
                playerCards[i] ? playerCards[i].push(copyCards.pop()) : playerCards[i] = [copyCards.pop()];
            }
            print(playerCards);
            await delay(2000);
        }
        playerPoints = calculatePoint(playerCards);
        print(playerCards, playerPoints);
        console.log('player win :' + searchWinners(playerCards, playerPoints));
        console.log('Play again ? (y/n)')
        if (prompt() != 'y')
            return;
        for (let i = 0; i < playerCards.length; i++) {
            for (let j = 0; j < 3; j++) {
                copyCards.push(playerCards[i].pop())
            }
        }
        console.clear();
    }
}
main()
