/* --- import all listener files so they can attach to the DOM --- */

// eslint-disable-next-line folders/match-regex
import { sortWordsListener } from '../listeners/sort-words.js';
import { inputWordListener } from '../listeners/input-word.js';

/* --- any other code that executes when the document or window are ready --- */

inputWordListener('input-form');
sortWordsListener('sort-type');
