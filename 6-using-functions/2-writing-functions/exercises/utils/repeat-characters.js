/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} [text=''] - A string to repeat each character.
 * @param {number } [times=0] - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */
export const repeatCharacters = (text = '', times = 1) => {
  // Use the split() method to convert the string into an array of characters
  const characters = text.split('');

  // Use the map() method to create a new array with each character repeated 'times' number of times
  const repeatedCharacters = characters.map((char) => char.repeat(times));

  // Use the join() method to convert the array of repeated characters back into a string
  const repeatedText = repeatedCharacters.join('');

  return repeatedText;
};
