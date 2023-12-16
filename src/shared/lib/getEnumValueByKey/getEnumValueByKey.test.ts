import getEnumValueByKey from './getEnumValueByKey';

enum SampleEnum {
  VALUE1 = 'Value 1',
  VALUE2 = 'Value 2',
  VALUE3 = 'Value 3',
}

describe('getEnumValueByKey', () => {
  test('should return enum value for valid key', () => {
    expect(getEnumValueByKey(SampleEnum, 'VALUE1')).toBe('Value 1');
    expect(getEnumValueByKey(SampleEnum, 'VALUE2')).toBe('Value 2');
  });

  test('should return default value for invalid key', () => {
    expect(getEnumValueByKey(SampleEnum, 'INVALID_KEY' as any, 'Default')).toBe('Default');
  });

  test('should return default value for undefined key', () => {
    expect(getEnumValueByKey(SampleEnum, undefined, 'Default')).toBe('Default');
  });

  test('should return undefined without default value for undefined key', () => {
    expect(getEnumValueByKey(SampleEnum, undefined)).toBeUndefined();
  });

  test('should return undefined without default value for null key', () => {
    expect(getEnumValueByKey(SampleEnum, null)).toBeUndefined();
  });
});
