/* eslint-disable folders/match-regex */
/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {string[]} [a=''] - The array of strings to sort.
 * @param {string} [b='oldest'] - How to sort the strings, 6 options.
 * - oldest: from oldest to newest.
 * - newest: from newest to oldest.
 * - shortest: from shortest to longest.
 * - longest: from longest to shortest.
 * - a: alphabetical order.
 * - z: reverse alphabetical order.
 * If the sortType is not one of these 6 options, a copy of toSort is returned.
 * @returns {string[]} - A new sorted array containing the same strings as toSort.
 * @example
 *
 * // ... write this!
 */
export const sortStrings = (a = [], b = 'oldest') => {
  return b === 'newest'
    ? [...a].reverse()
    : b === 'a'
    ? [...a].sort()
    : b === 'z'
    ? [...a].sort().reverse()
    : b === 'shortest'
    ? [...a].sort((x, y) => x.length - y.length)
    : b === 'longest'
    ? [...a].sort((x, y) => x.length - y.length).reverse()
    : [...a];
};
