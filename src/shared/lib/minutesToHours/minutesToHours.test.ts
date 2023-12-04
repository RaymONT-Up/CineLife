import minutesToHours from './MinutesToHours';

describe('minutesToHours function', () => {
  test('one hour 40 minutes', () => {
    const result = minutesToHours(100);
    expect(result).toBe('01:40');
  });

  test('one hour', () => {
    const result = minutesToHours(60);
    expect(result).toBe('01:00');
  });

  test('40 minutes', () => {
    const result = minutesToHours(40);
    expect(result).toBe('00:40');
  });

  test('handles a non-number value', () => {
    // @ts-ignore
    const result = minutesToHours('string');
    expect(result).toBe('Not the correct value.');
  });
});
