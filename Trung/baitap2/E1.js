function reverseOdd(str) {
  let arr = str.split(" ");
  const arr2 = arr.map((item) => {
    let splitItem = item.split("");
    return splitItem.length % 2 == 1
      ? splitItem.reverse().join("")
      : splitItem.join("");
  });
  return arr2.join(" ").trim();
}

console.log(reverseOdd("Bananas"));
