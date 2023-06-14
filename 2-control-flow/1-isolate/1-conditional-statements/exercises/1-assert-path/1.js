// #todo

'use strict';

console.log('-- begin --');

// are there any unreachable paths?

const value1 = true;
const value2 = false;
let path = '';

if (value1 && !value2) { // true || true
  path = 'if';
  // breaks here 
} else if (!value1 || !value2) { // true || False
  path = 'else if';
}

console.assert(path === 'if');

console.log('-- end --');
