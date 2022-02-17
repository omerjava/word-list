import { inputWord } from '../handlers/input-word.js';

export const inputWordListener = (id = '') =>
  document.getElementById(id).addEventListener('click', inputWord);
