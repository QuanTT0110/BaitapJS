//## How Many Days Until 2023
const s = "1/1/2023"

function daysUntil2023(str){
    let date1 = new Date(str)
    let date2 = new Date(s)
    return ((date2 - date1)/86400000).toFixed() +" days" ;
}

console.log(daysUntil2023("1/1/2022"));