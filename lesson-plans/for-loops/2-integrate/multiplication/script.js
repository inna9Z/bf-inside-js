import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values

  let inputLeft = readNumber('left');
  let inputRight = readNumber('right');

  // Calculate the result
  let result = inputLeft * inputRight;

  // display the product

  display('product', result);
});
