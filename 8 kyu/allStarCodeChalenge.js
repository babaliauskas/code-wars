function strCount(str, letter) {
  let newStr = str.split(' ');
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (letter === str[i]) {
      num += 1;
    }
  }
  return num;
}
