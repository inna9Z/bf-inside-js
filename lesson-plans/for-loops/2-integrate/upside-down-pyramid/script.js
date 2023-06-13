import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
 

  // create the pyramid
 

  // str.substr(i) used to get back part of the string i is the staring index
  // read user text
  let userInput = readString('to-pyramid')

  // create the pyramid
  
 let pyramid = '';
for (let i = 0; i < userInput.length; i++) {
  
    let row = userInput.substr(i) + '\n';
    pyramid += row;
  

}


  // display the pyramid
  // display the pyramid
  display('pyramided', pyramid);
});
  // display the pyramid



