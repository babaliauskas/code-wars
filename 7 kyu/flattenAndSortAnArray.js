'use strict';

function flattenAndSort(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      newArr.push(array[i][j]);
    }
  }

  return newArr.sort((a, b) => a - b);
}
