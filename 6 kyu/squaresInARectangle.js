function findSquares(x, y) {
  let t = x - y;
  return (y * (y + 1) * (2 * y + 1)) / 6 + t * ((y * (y + 1)) / 2);
}
