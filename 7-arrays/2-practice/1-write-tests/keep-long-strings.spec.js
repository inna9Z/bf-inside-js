// #todo

import { keepLongStrings } from './keep-long-strings.js';
describe('filter array of strings and keep only the long string', () => {
  describe('filter strings', () => {
    it('array with only long strings', () => {
      const actual = keepLongStrings([1, 2], 3);
      const expected = [1, 2];

      expect(actual).toEqual(expected);
    });
    it('array with only short strings', () => {
      const actual = keepLongStrings(['a', 'b', 'c'], 4);
      const expected = [];

      expect(actual).toEqual(expected);
    });
  });

  describe('Default paramters', () => {
    it('no second paramter', () => {
      const actual = keepLongStrings(['a', 'b', 'abc']);
      const expected = ['abc'];

      expect(actual).toEqual(expected);
    });
    it('no paramters ', () => {
      const actual = keepLongStrings();
      const expected = [];

      expect(actual).toEqual(expected);
    });
  });
});
