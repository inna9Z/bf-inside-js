/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {string} [text='] - Some text to remove characters from.
 * @param {number } [keep='] - The characters to keep.
 * @returns {string} Text with only the given characters still in it.
 */


export const keepCharacters = (text = '', keep = '') => {
   // Create a regular expression pattern to match characters that should be kept
  const pattern = new RegExp (`[^${keep}]`, 'g');
   // Remove all characters that are not in the "keep" string using the pattern
  const newText = text.replace(pattern, '')
  return newText;
};
