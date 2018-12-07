function oddNotPrime(n) {
  var newArr = [];
  for (var counter = 0; counter <= n; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
      }
    }
    if (notPrime === true) {
      newArr.push(counter);
    }
  }
  let final = newArr.filter(e => e % 2 !== 0);
  return final.length + 1;
}
