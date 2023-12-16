const groupByKey = <T>(arr: T[], key: keyof T): Record<string, T[]> => {
  return arr.reduce((acc, item) => {
    const keyValue = item[key] as string;

    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }

    acc[keyValue].push(item);

    return acc;
  }, {} as Record<string, T[]>);
};

export default groupByKey;
