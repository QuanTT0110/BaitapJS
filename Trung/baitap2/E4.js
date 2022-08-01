function isPrime(value) {
  if (value == 1 || value == 0) return false;
  if (value == 2) return true;
  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}
function primeInRange(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) arr.push(i);
  }
  return arr;
}
console.log(primeInRange(0, 97));
