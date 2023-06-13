import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values

  let input = readString('user-text');
  let numberTime = readNumber('number-of-times');

  // repeat the characters in the text

  let result = '';
  for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < numberTime; j++ ) {
   result += input[i];
  }
}

  // display the text with repeated characters

  display('repeated-output', result);
});
