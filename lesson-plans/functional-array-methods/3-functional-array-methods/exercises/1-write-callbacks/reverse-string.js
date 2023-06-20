/**
 * reverses a string
 * @param {string} str - the string to reverse
 * @returns {string} the string, reversed
 */
export const reverseString = (str = '') => {
  return  (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
};
