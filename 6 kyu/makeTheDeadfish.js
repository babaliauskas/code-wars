function parse(data) {
  let letter = data.split('');
  let answerArr = [];
  let num = 0;

  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === 'i') {
      num += 1;
    } else if (letter[i] === 'd') {
      num -= 1;
    } else if (letter[i] === 's') {
      num *= num;
    } else if (letter[i] === 'o') {
      answerArr.push(num);
    }
  }
  return answerArr;
}
