function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return 'found the ' + haystack[i] + ' at position ' + i;
    }
  }
}
