function weeklySalary(arr) {
  const totalSalary = arr.reduce((total, hour, index) => {
    if (index < 5) {
      if (hour > 8) {
        total += 10 * 8 + (hour - 8) * 15;
        return total;
      } else {
        total += hour * 10;
        return total;
      }
    } else {
      if (hour > 8) {
        total += 20 * 8 + (hour - 8) * 30;
        return total;
      } else {
        total += hour * 20;
        return total;
      }
    }
  }, 0);
  return totalSalary;
}

console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]));
