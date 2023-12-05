const getUrlParam = (paramName: string): string | undefined => {
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName) || undefined;
};

export default getUrlParam;
