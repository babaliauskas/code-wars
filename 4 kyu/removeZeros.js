function removeZeros(array) {
  let newArr = [];
  let answer = array.filter(e => {
    return e !== 0 && e !== '0';
  });
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 || array[i] === '0') {
      newArr[newArr.length] = array[i];
    }
  }
  if (newArr.length > 0) {
    for (let m = 0; m < newArr.length; m++) {
      answer[answer.length] = newArr[m];
    }
  }
  return answer;
}
