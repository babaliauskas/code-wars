function generateHashtag(str) {
  str = str.split(' ');
  var result = ['#'];

  for (i = 0; i < str.length; i++) {
    str[i] = str[i].substr(0, 1).toUpperCase() + str[i].substr(1);
    result.push(str[i]);
  }

  var endStr = result.join('');

  if (endStr.length > 140 || endStr === '#') {
    return false;
  } else {
    return endStr;
  }
}
