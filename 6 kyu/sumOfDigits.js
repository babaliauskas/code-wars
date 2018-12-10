function digital_root(n) {
  let number = n.toString().split('');
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    sum += +number[i];
  }
  if (sum.toString().split('').length > 1) {
    let num = sum.toString().split('');
    console.log(num);

    var tarkim = 0;
    for (var j = 0; j < num.length; j++) {
      console.log(+num[j]);

      tarkim += +num[j];
    }
    sum = tarkim;
  }
  return sum;
}
