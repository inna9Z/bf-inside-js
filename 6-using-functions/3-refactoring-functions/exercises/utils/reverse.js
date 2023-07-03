/** Reverse string
 * @param{string} {text = ''} string to reverse
 * @return {string} return reversed string
 *
 */
export const reverse = (text = '') => {
  return text.split('').reverse().join('');
};
