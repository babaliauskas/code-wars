function reOrdering(text) {
  let arr = text.split(' ');
  let newArr = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].toUpperCase() == arr[i][0]) {
      newArr.unshift(arr[i]);
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr.join(' ');
}