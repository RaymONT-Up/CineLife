type DateInput = `${number}-${number}-${number}`;

const formatDate = (inputDate: DateInput): string | undefined => {
  if (!inputDate) {
    return undefined;
  }

  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date(inputDate);

  const returned = date.toLocaleDateString('ru-RU', options);

  return returned || undefined;
};

export default formatDate;
