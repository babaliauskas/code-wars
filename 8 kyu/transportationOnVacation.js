function rentalCarCost(d) {
  let total = 0;
  for (let i = 0; i <= d; i++) {
    if (i >= 7) {
      total = 40 * i - 50;
    } else if (i >= 3 && i < 7) {
      total = 40 * i - 20;
    } else {
      total = 40 * i;
    }
  }
  return total;
}
