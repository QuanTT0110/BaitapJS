function lcm(a, b) {
  let max = a > b ? a : b;
  for (let i = max; i <= a * b; i++) {
    if (i % a == 0 && i % b == 0) return i;
  }
}
console.log(lcm(6, 8));
