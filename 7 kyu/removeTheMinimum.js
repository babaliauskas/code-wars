function removeSmallest(numbers) {
  if (numbers.length < 2) {
    return [];
  }
  var num = numbers[0];
  var index = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (num > numbers[i]) {
      num = numbers[i];
      index = i;
    }
  }
  var answer = numbers.filter((el, i) => i !== index);
  return answer;
}
