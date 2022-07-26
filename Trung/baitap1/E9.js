const prompt = require("prompt-sync")();
function passwordGenerator(options) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "~!@#$%&()*+,-./";
  let password = "";
  let types = [];
  if (options.upper) {
    types.push(1);
  }
  if (options.lower) {
    types.push(2);
  }
  if (options.number) {
    types.push(3);
  }
  if (options.symbol) {
    types.push(4);
  }
  for (let i = 0; i < options.length; i++) {
    let type = types[Math.floor(Math.random() * types.length)];
    switch (type) {
      case 1:
        {
          let index = Math.floor(Math.random() * upper.length);
          password += upper[index];
        }
        break;
      case 2:
        {
          let index = Math.floor(Math.random() * lower.length);
          password += lower[index];
        }
        break;
      case 3:
        {
          let index = Math.floor(Math.random() * number.length);
          password += number[index];
        }
        break;
      case 4:
        {
          const index = Math.floor(Math.random() * symbol.length);
          password += symbol[index];
        }
        break;
      default:
        break;
    }
  }
  return password;
}

const x = {
  length: 20,
  lower: true,
  upper: true,
  number: true,
  symbol: true,
};

x.length = parseInt(prompt("enter length Password(interger):"));
x.lower = String(prompt("contain lower  ? (true,false):")) == "true";
x.upper = String(prompt("contain upper  ? (true,false):")) == "true";
x.symbol = String(prompt("contain symbol  ? (true,false):")) == "true";
x.number = String(prompt("contain number  ? (true,false):")) == "true";

const rs = passwordGenerator(x);
console.log(rs, rs.length);
