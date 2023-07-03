import { readString, display } from '../../../../../../../lib/dom-io.js';

import { removeCharacters } from './utils/remove-characters.js';

const removeConsonants = () => {
  debugger;

  // --- read user input ---
  const userText = readString('user-text');


  // --- remove all consonants from the input ---
  const consonants = 'ZRTYPQSDFGHJKLMWXCVBNazrtpqsdfghjklmwxcvbn'
  //  use `removeCharacters` to write this step of the program

  const noConsonants = removeCharacters(userText, consonants);

  // --- display the input with no consonants ---
  display('removified', noConsonants);
};

document
  .getElementById('consonants')
  .addEventListener('click', removeConsonants);
