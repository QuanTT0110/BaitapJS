// ## Weekly Salary

// Write a function that takes a list of hours and returns the total weekly salary.

// - The input list hours is listed sequentially, ordered from Monday to Sunday.
// - A worker earns $10 an hour for the first 8 hours.
// - For every overtime hour, he earns $15.
// - On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.

// Examples

// ```
// weeklySalary([8, 8, 8, 8, 8, 0, 0]) ➞ 400

// weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410

// weeklySalary([0, 0, 0, 0, 0, 12, 0]) ➞ 280
// ```

// Notes
// - Every element in the array is greater than or equal to 0.

function weeklySalary(arr) {
    let salary = 0;
    if (arr.length > 7 || arr.length < 7) {
        console.log("One week has 7 days");
    }

    for (let i=0; i<7;i++) {
        if (i === 5 || i === 6) {
            if (arr[i] === 8) salary += (8*20)
            if (arr[i] > 8) salary += (8*20+(arr[i]-8)*30)
        }else {
            if (arr[i] === 8) salary += (8*10)
            if (arr[i] > 8) salary += (8*10+(arr[i]-8)*15)
        }
    }
    return salary;
}
console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]))