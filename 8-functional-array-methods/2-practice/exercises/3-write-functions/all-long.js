// #todo

/** hecks if all the strings in an array are long
 * @param {string} {strings = []} value to check
 * @param {number} {long = 0} number
 * @return {string} return new strings
 */
export const allLong = (strings = [], long = 0) => {
 let  newStr = true;
 for (const item of strings) {
   if (item.length < long) {
     newStr = false;
   }
 }
 return newStr;
};

