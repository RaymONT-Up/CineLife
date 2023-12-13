const formatYears = (years: number): string => {
  if (years >= 11 && years <= 19) {
    return `${years} лет`;
  }

  const lastDigit = years % 10;

  switch (lastDigit) {
    case 1:
      return `${years} год`;
    case 2:
    case 3:
    case 4:
      return `${years} года`;
    default:
      return `${years} лет`;
  }
};

export default formatYears;
