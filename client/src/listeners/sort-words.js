/* eslint-disable folders/match-regex */
import { sortWords } from '../handlers/sort-words.js';

export const sortWordsListener = (id = '') =>
  document.getElementById(id).addEventListener('change', sortWords);
