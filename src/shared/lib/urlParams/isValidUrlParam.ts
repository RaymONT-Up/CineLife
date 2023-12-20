const isValidUrlParam = <T>(param: string, type: T) => Object.values(type).includes(param);

export default isValidUrlParam;
