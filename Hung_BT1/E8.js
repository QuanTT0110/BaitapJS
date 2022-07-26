// ## How Many Days Between Two Dates
function getDays(x,y){
    c = x-y ;
    c = c/86400000;
    return Math.abs(c);
}


console.log(getDays( new Date("June 14, 2019"),new Date("June 20, 2019")));