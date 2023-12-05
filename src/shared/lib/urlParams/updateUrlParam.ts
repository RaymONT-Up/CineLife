const updateUrlParam = (paramName: string, paramValue: string) => {
  const params = new URLSearchParams(window.location.search);

  if (params.get(paramName) === paramValue) return;

  if (paramValue === '') {
    params.delete(paramName);
  } else {
    params.set(paramName, paramValue);
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, '', newUrl);
};

export default updateUrlParam;
