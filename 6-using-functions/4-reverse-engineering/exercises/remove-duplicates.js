export const removeDuplicate = (text, n) => {
  let result = [];

  for (let i = 0; i < n; i++) {
    let isDuplicate = false;

    for (let j = 0; j < i; j++) {
      if (text[i] === text[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(text[i]);
    }
  }

  return result.join('');
};
