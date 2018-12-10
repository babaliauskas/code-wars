function findOutlier(integers) {
  let odd = [];
  let even = [];
  integers.forEach(e => {
    e % 2 === 0 ? even.push(e) : odd.push(e);
  });
  if (odd.length > 1) {
    return even[0];
  } else {
    return odd[0];
  }
}
