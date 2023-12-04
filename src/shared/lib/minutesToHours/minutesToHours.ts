const minutesToHours = (minutes: number): string => {
  if (typeof minutes !== 'number') {
    return 'Not the correct value.';
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;

  return `${formattedHours}:${formattedMinutes}`;
};

export default minutesToHours;
