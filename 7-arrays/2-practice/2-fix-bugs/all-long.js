// #todo

/**
 * check if all array strings are long
 *
 * @param {string[]} [strings=[]] - the array of strings to check
 * @param {number} [long=5]- the value to decide if a string is long or not
 * @returns {boolean} - if an array of strings is long or not
 */
export const allLong = (strings = [], long = 0) => {
  let allAre = true;
  for (let i = 0; i < strings.length; i++) {
    const next = strings[i];
    if (next.length < long) {
      allAre = false;
      break;
    }
  }
  return allAre;
};
