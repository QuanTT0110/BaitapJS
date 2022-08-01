function daysUntil2023(date) {
  console.log(new Date(date), new Date("1/1/2023"));
  return Math.floor(
    Math.abs(new Date(date) - new Date("1/1/2023")) / (1000 * 60 * 60 * 24)
  );
}

console.log(daysUntil2023("12/28/2022"));
