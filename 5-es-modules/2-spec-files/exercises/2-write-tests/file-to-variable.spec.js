// #todo
import { fileToVariable } from './file-to-variable.js';




describe('fileToVariable', () => {
  it('converts a kebab-case file name to camel-case variable name', () => {
    const fileName = 'file-to-variable.js';
    const expected = 'fileToVariable';
    const result = fileToVariable(fileName);
    expect(result).toEqual(expected);
  });

  it('handles empty string as input', () => {
    const fileName = '';
    const expected = '';
    const result = fileToVariable(fileName);
    expect(result).toEqual(expected);
  });

  // Add more test cases here to cover different scenarios
});
