import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values

  let userText = readString('user-text');
  let userNumber = readNumber('number-of-times');

  // repeat the string

  let result = '';
  for (let i = 0; i < userNumber; i++) {

    result += userText;
  }
  // display the repeated string
  display('repeated-output', result);
});
