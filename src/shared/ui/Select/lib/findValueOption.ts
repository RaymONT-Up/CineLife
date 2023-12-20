import { ISelectOption } from 'shared/ui/Select';

const findValueOption = (
  options: ISelectOption[],
  value: string | number,
  classicValue?: ISelectOption,
): ISelectOption | undefined => {
  const findedValue = options.find((option) => option.value == value);
  if (findedValue) return findedValue;

  if (classicValue) return classicValue;

  return undefined;
};

export default findValueOption;
