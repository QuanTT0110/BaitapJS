function mapLetters(word) {
  let arrWord = word.split("");
  const obj = {};
  arrWord.forEach((element, index) => {
    obj[element] ? obj[element].push(index) : (obj[element] = [index]);
  });

  console.log(obj);
}
mapLetters("grapes");
