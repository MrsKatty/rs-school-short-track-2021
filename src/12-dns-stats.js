/* eslint-disable */
/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const answer = {};

  for (let i = 0; i < domains.length; i++) {
    const domen = domains[i];
    const subs = domen.split('.');
    let subKey = '';
    const subKeys = [];

    for (let j = subs.length - 1; j >= 0; j--) {
      subKey += `.${subs[j]}`;
      subKeys.push(subKey);
    }

    for (let j = 0; j < subKeys.length; j++) {
      const domain = subKeys[j];
      domain in answer ? answer[domain]++ : (answer[domain] = 1);
    }
  }

  return answer;
}

module.exports = getDNSStats;
