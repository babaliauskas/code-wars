function maxNumber(n) {
  let max = +n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return max;
}
