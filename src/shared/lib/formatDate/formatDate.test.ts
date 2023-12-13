import formatDate from 'shared/lib/formatDate/formatDate';

describe('formatDate', () => {
  it('correct date format 1', () => {
    const inputDate = '1963-06-09';
    const expectedOutput = '9 июня 1963 г.';
    expect(formatDate(inputDate)).toBe(expectedOutput);
  });

  it('correct date format 2', () => {
    const inputDate = '2000-02-17';
    const expectedOutput = '17 февраля 2000 г.';
    expect(formatDate(inputDate)).toBe(expectedOutput);
  });

  it('correct date format 3', () => {
    const inputDate = '3000-01-01';
    const expectedOutput = '1 января 3000 г.';
    expect(formatDate(inputDate)).toBe(expectedOutput);
  });

  it('not valid string date value', () => {
    // @ts-ignore
    expect(formatDate('not-valid-dateString')).toBe('Invalid Date');
  });

  it('handle null', () => {
    expect(formatDate(null)).toBeUndefined();
  });

  it('handle undefined', () => {
    expect(formatDate(undefined)).toBeUndefined();
  });
});
