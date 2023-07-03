/** finds all strings in an array that include the search query
 *@param {string} {arr}
 *@param {query} {}
 * @return {string}
 */
export const search = (arr, query) => {
  return arr.filter((element) => typeof element === 'string' && element.includes(query));

};
