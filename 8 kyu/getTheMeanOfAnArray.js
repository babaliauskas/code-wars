function getAverage(marks) {
  let nums = 0;
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    nums += 1;
    sum += marks[i];
  }
  return Math.floor(sum / nums);
}
