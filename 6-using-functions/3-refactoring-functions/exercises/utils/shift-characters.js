/**
 *
 */
export const shiftCharacters = (text = '' , shift = 0) => {
  let newString = '';
  for (const char of text) {
    const charCode = char.charCodeAt();
    const newCharCode = charCode + shift;
    const newChar = String.fromCharCode(newCharCode);
    newString += newChar;
  }

  return newString;
};

