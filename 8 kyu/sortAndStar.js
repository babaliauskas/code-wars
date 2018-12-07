function twoSort(s) {
  let words = s.sort();
  let word = [];
  let answer = '';
  for (let i = 0; i < words[0].split('').length; i++) {
    if (i === words[0].split('').length - 1) {
      word.push(words[0].split('')[i]);
    } else {
      word.push(words[0].split('')[i] + '***');
    }
  }
  return word.join('');
}
