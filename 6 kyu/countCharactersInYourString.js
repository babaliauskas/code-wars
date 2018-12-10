function count(string) {
  let newString = string.split('');
  let result = {};
  for (let i = 0; i < newString.length; i++) {
    if (result[newString[i]]) {
      result[newString[i]] += 1;
    } else {
      result[newString[i]] = 1;
    }
  }
  if (string === '') {
    return {};
  } else {
    return result;
  }
}
