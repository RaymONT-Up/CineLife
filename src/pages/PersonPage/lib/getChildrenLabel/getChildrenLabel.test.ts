import getChildrenLabel from './getChildrenLabel';

describe('getChildrenLabel', () => {
  test('should return for count 1', () => {
    expect(getChildrenLabel(1)).toBe('1 ребенок');
  });

  test('should return for count 2', () => {
    expect(getChildrenLabel(2)).toBe('2 ребенка');
  });

  test('should return for count 5', () => {
    expect(getChildrenLabel(5)).toBe('5 детей');
  });

  test('should return for count 3', () => {
    expect(getChildrenLabel(3)).toBe('3 ребенка');
  });

  test('should return for count 22', () => {
    expect(getChildrenLabel(22)).toBe('22 ребенка');
  });

  test('should return for count 10', () => {
    expect(getChildrenLabel(10)).toBe('10 детей');
  });
});
