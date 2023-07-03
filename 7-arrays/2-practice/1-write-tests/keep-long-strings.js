/**
 * Keep only long string
 * @param {string[]} [strings=[]] - the array of strings to check
 * @long {number} [long= 1] - the value to decide if a string is long or not
 * @returns {string[]} - the filtered array
 */
export const keepLongStrings = (strings = [], long = 0) => {
  const longStrings = [];
  for (const string of strings) {
    if (string.length > long) {
      longStrings.push(string);
    }
  }
  return longStrings;
};
