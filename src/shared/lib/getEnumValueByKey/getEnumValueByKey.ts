const getEnumValueByKey = <T>(
  enumObject: T,
  key: keyof T,
  defaultValue?: string): T[keyof T] | string | undefined => enumObject[key] || defaultValue;

export default getEnumValueByKey;
