function feast(beast, dish) {
  let be = beast.split('');
  let di = dish.split('');

  for (let i = 0; i < be.length; i++) {
    for (let y = 0; y < di.length; y++) {
      if (be[0] === di[0] && be[be.length - 1] === di[di.length - 1]) {
        be = be.join();
        di = di.join();
        return true;
      } else {
        return false;
      }
    }
  }
}
