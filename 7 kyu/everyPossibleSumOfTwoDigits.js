function digits(num) {
  let numArray = [];
  let sum = 0;
  let nums = num.toString().split('');
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    for (let index = i + 1; index < nums.length; index++) {
      console.log(nums[index]);
      numArray.push(Number(nums[i]) + Number(nums[index]));
    }
  }
  return numArray;
}

digits(123);
