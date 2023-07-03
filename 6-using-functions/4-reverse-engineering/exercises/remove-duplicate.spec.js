import { removeDuplicate } from "./remove-duplicates.js";

describe('removeDuplicate character from string', () => {
  describe('the function behavior', () => {
    it('returns the same string with duplicate characters removed', () => {
      const actual = removeDuplicate('aabbccddee');
      expect(actual).toEqual('abcde');
    });
    it('returns an empty string if the input string is empty', () => {
      const actual = removeDuplicate('');
      expect(actual).toEqual('');
    });
    it('returns the same string if there are no duplicate characters', () => {
      const actual = removeDuplicate('abcdefg');
      expect(actual).toEqual('abcdefg');
    });
    it('removes duplicate characters, preserving their order', () => {
      const actual = removeDuplicate('abracadabra');
      expect(actual).toEqual('abrcd');
    });
  });
});
