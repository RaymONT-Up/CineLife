const getChildrenLabel = (count: number): string => {
  const forms = {
    one: 'ребенок',
    few: 'ребенка',
    many: 'детей',
  };

  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${count} ${forms.many}`;
  }

  if (lastDigit === 1) {
    return `${count} ${forms.one}`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${count} ${forms.few}`;
  }

  return `${count} ${forms.many}`;
};

export default getChildrenLabel;
