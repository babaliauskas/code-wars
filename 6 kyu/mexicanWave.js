function wave(string) {
  var result = [];
  for (i = 0; i < string.length; i++) {
    if (string[i] != ' ')
      //console.log(string.slice(0,i), string.slice(i+1))
      result.push(
        string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1)
      );
  }
  return result;
}

wave('hello');
