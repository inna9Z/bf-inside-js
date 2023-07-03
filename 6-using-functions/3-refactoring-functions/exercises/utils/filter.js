/**
 *
 */
export const filter = (toFilter, removeThese) => {
  if (!removeThese) {
    return toFilter;
  }

  let filteredString = '';
  for (const char of toFilter) {
    if (removeThese.toLowerCase().indexOf(char.toLowerCase()) === -1) {
      filteredString += char;
    } else {
      console.log(`Filtered out character: ${char}`);
    }
  }

  console.log(`Filtered string: ${filteredString}`);
  return filteredString;
};

