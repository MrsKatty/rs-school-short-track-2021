/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //   let counter = 0;
  //   for (const i of s1) {
  //     s2.includes(s1[i]) ? counter++ : false;
  //   }
  //   return counter;

  const s1Array = s1.split('');
  const s2Array = s2.split('');
  let counter = 0;
  let index = 0;
  s1Array.filter((firstString) => {
    index = s2Array.findIndex((secondString) => secondString === firstString);
    if (index >= 0) {
      counter++;
      s2Array.splice(index, 1);
    } return null;
  });
  return counter;
}
module.exports = getCommonCharacterCount;
