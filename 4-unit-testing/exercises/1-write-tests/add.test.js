// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const numbers = (x, y) => {
  return x + y
};

describe('Adds two numbers together.', () => {
  describe('Test case 1', () => {
    it('should return the sum of 1 and 2', () => {
      const expected = 3;
      const actual = numbers(1, 2);
      expect(actual).toEqual(expected);
    });
    
  });
  describe('Test case 2', () => {
    it('should return 10', () => {
      const expected = 10;
      const actual = numbers(5, 5);
      expect(actual).toEqual(expected);
    });
     describe('Test case 3', () => {
    it('should return -5 when adding -2 and -3', () => {
      const expected = -5;
      const actual = numbers(-2, -3);
      expect(actual).toEqual(expected);
    });
  });
  });
  // ...
});
