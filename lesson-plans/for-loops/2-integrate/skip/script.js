import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  let userNumber = readNumber('skip-size');
  let userText = readString('user-text');

  // create a new string with skipped characters
  let skipped = '';
  
  for (let i = 0; i < userText.length; i++) {
    if (i % userNumber === 0) {
      skipped += userText[i];
    }
  }

  // display the skipped string
  display('skipped-output', skipped);
});
