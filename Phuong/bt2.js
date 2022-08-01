// link online https://replit.com/@PhuongNguyen124/baitap2?v=1
const reverseOdd = (string) => {
  const tempArr = string.split(" ");
  const result = tempArr.map((item) => {
    if (item.length % 2) {
      return item.split("").reverse().join("");
    }
    return item;
  });
  return result.join(" ");
};

console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
console.log("--------------reverseOdd----------------");
const lcm = (firstNumber, secondNumber) => {
  let firstNum = firstNumber;
  let secondNum = secondNumber;
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum = firstNum - secondNum;
    } else {
      secondNum = secondNum - firstNum;
    }
  }
  return (firstNumber * secondNumber) / secondNum;
};

console.log(lcm(9, 18));
console.log(lcm(8, 5));
console.log(lcm(17, 11));
console.log("---------------lcm---------------");

const numInStr = (array) => {
  return array.filter((item) => {
    return item.split("").some((char) => !isNaN(char) && char !== " ");
  });
};

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));
console.log("--------------numInStr----------------");

const primeInRange = (firstNumber, secondNumber) => {
  const resultArr = [];
  for (let i = firstNumber; i <= secondNumber; i++) {
    if (i === 1 || i === 0) return;
    let check = 1;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        check = 0;
      }
    }
    if (check) {
      resultArr.push(i);
    }
  }
  return resultArr;
};

console.log(primeInRange(10, 15));
console.log(primeInRange(62, 66));
console.log(primeInRange(3, 5));
console.log("-------------primeInRange-----------------");

const daysUntil2023 = (dateString) => {
  const inputDate = new Date(dateString);
  const firstDate2023 = new Date("01/01/2023");
  return `${Math.abs(
    (firstDate2023.getTime() - inputDate.getTime()) / 86400000
  )} days`;
};

console.log(daysUntil2023("12/28/2022"));
console.log(daysUntil2023("1/1/2022"));
console.log(daysUntil2023("2/28/2022"));
console.log("------------daysUntil2023------------------");

const multTable = (number) => {
  const resultArr = [];
  for (let i = 1; i <= number; i++) {
    const itemArr = [];
    for (let j = 1; j <= number; j++) {
      itemArr.push(i * j);
    }
    resultArr.push(itemArr);
  }
  return resultArr;
};

console.log(multTable(2));
console.log(multTable(3));
console.log(multTable(5));
console.log("--------------multTable----------------");

const weeklySalary = (array) => {
  let salary = 0;
  const normalTimeSalary = 10;
  const overTimeSalary = 15;
  array.forEach((hours, index) => {
    let overTime = hours - 8;
    let normalTime = hours;

    if (overTime < 0) {
      overTime = 0;
    } else {
      normalTime = 8;
    }

    let daySalary = normalTime * normalTimeSalary + overTime * overTimeSalary;

    if (index === array.length - 1 || index === array.length - 2)
      daySalary *= 2;

    salary += daySalary;
  });
  return salary;
};

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]));
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]));
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]));
console.log("-------------weeklySalary-----------------");

const mapLetters = (string) => {
  const array = string.split("");
  const instincArr = Array.from(new Set(array));
  const result = {};
  instincArr.forEach((item) => {
    const indices = array
      .map((char, index) => (char === item ? index : ""))
      .filter(String);
    result[item] = indices;
  });
  return result;
};

console.log(mapLetters("dodo"));
console.log(mapLetters("froggy"));
console.log(mapLetters("grapes"));
console.log("-------------mapLetters-----------------");
