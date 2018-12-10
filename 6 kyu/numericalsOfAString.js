function numericals(s) {
  let string = s.split('');
  let obj = {};
  var result = [];

  for (var i = 0; i < string.length; i++) {
    if (obj.hasOwnProperty(string[i])) {
      obj[string[i]] += 1;
      result.push(obj[string[i]]);
    } else {
      obj[string[i]] = 1;
      result.push(obj[string[i]]);
    }
  }
  return result.join('');
}
