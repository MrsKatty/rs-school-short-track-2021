/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(a) {
  const arr = [];
  const newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      arr.push(i);
    } else {
      newArr.push(a[i]);
    }
  }
  const sorted = newArr.sort((prev, current) => prev - current);
  for (let i = 0; i < arr.length; i++) {
    sorted.splice(arr[i], 0, -1);
  }
  return sorted;
}

module.exports = sortByHeight;
