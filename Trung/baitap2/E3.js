function numInStr(arr) {
  const regex = /\d/;
  let newArr = [];
  arr.forEach((item) => {
    if (regex.test(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
