// #todo

'use strict';

console.log('-- begin --');

const originalString = 'abcde';
console.log('originalString:', originalString);

let reverseUpperCase = '';

for (let i = originalString.length - 1; i >= 0; i--) {
  const nextText = originalString[i].toUpperCase();
  reverseUpperCase += nextText;
  console.log(nextText)
}

console.assert(
  reverseUpperCase === 'EDCBA',
  'Reversed string is not correct',
);

console.log('-- end --');
