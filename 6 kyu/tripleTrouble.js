function tripledouble(num1, num2) {
  let arr = num1.toString().split('');
  let arr2 = num2.toString().split('');
  let sameNum = 0;
  let first = 0;
  let second = 0;
  let nums = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      console.log(arr[i]);
      nums[arr[i]] = true;
      first = 1;
    }
  }
  console.log(nums);

  console.log(sameNum);

  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] in nums && arr2[j + 1] in nums) {
      second = 1;
    }
  }

  if (first === 1 && second === 1) {
    return 1;
  } else {
    return 0;
  }
}
