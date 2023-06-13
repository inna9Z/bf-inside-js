import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  let text = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input

  let reversed = '';
  for(let char of text) {
    reversed = char + reversed;
  }

  // display the reversed string
  display('reversed-output', reversed);
});
