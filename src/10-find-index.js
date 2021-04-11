/* eslint-disable */
/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    // Using bitwise or instead of Math.floor as it is slightly faster
    const mid = ((right + left) / 2) | 0;
    if (array[mid] === value) {
      return mid;
    } else if (value < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

module.exports = findIndex;
