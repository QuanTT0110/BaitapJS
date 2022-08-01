    // ## How Many Days Until 2023

    // Given a date, return how many days date is away from 2023 (end date not included). date will be in mm/dd/yyyy format.

    // Examples

    // ```
    // daysUntil2023("12/28/2022") ➞ "3 days"

    // daysUntil2023("1/1/2022") ➞ "366 days"

    // daysUntil2023("2/28/2022") ➞ "308 days"

    function daysUntil2023(date) {
        return Math.abs(new Date("01/02/2023") - new Date(date)) / (1000 * 60 * 60 * 24); 
    }
    console.log(daysUntil2023("2/28/2022"));
