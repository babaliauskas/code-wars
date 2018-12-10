function iqTest(numbers) {
  let numm = numbers.split(' ');

  console.log(numbers);
  let even = [];
  let odd = [];
  var num = 0;
  numm.forEach(e => (e % 2 === 0 ? even.push(e) : odd.push(e)));
  if (odd.length < 2) {
    numm.forEach((e, i) => (e === odd[0] ? (num = i + 1) : null));
  } else {
    numm.forEach((e, i) => (e === even[0] ? (num = i + 1) : null));
  }
  return num;
}
