import formatYears from './formatYears';

describe('formatYears', () => {
  it('should return the correct format for 5 years', () => {
    const result = formatYears(5);
    expect(result).toBe('5 лет');
  });

  it('should return the correct format for 10 years', () => {
    const result = formatYears(10);
    expect(result).toBe('10 лет');
  });

  it('should return the correct format for 25 years', () => {
    const result = formatYears(25);
    expect(result).toBe('25 лет');
  });

  it('should return the correct format for 64 years', () => {
    const result = formatYears(64);
    expect(result).toBe('64 года');
  });

  it('should return the correct format for 52 years', () => {
    const result = formatYears(52);
    expect(result).toBe('52 года');
  });

  it('should handle the special case of 11 years', () => {
    const result = formatYears(11);
    expect(result).toBe('11 лет');
  });

  it('should handle the special case of 15 years', () => {
    const result = formatYears(15);
    expect(result).toBe('15 лет');
  });

  it('should handle the special case of 21 years', () => {
    const result = formatYears(21);
    expect(result).toBe('21 год');
  });
});
