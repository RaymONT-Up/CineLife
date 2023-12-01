import capitalizeFirstLetter from './capitalizeFirstLetter';

describe('capitalizeFirstLetter function', () => {
  test('capitalizes the first letter of a word', () => {
    const result = capitalizeFirstLetter('example');
    expect(result).toBe('Example');
  });

  test('handles an empty string', () => {
    const result = capitalizeFirstLetter('');
    expect(result).toBe('');
  });

  test('handles a non-string input', () => {
    // @ts-ignore
    const result = capitalizeFirstLetter(123);
    expect(result).toBe(123);
  });

  test('handles a non-string input with default value', () => {
    const result = capitalizeFirstLetter(undefined);
    expect(result).toBe(undefined);
  });
});
