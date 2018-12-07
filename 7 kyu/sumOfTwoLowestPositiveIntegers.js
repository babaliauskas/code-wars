function sumTwoSmallestNumbers(numbers) {
  let nums = numbers.sort((a, b) => a - b).slice(0, 2);
  return nums[0] + nums[1];
}
