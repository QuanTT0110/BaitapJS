function multTable(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let table = [];
    for (let j = 1; j <= n; j++) {
      table.push(i * j);
    }
    arr.push(table);
  }
  return arr;
}
