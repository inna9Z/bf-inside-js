// #todo

/** makes all long strings in an array upper case
 *@param {string} {str = []} to check if the array is long or not 
  @param {number } {long = 0} the value to decide if a string is long or not
  * @return {string} only long strong uppercase
 */

export const longToUpper = (arr = [], long = 0) => {
  const newArr = [];
  for (const str of arr) {
    if (str.length >= long) {
      newArr.push(str.toUpperCase());
    } else {
      newArr.push(str);
    }
  }
  return newArr
};
