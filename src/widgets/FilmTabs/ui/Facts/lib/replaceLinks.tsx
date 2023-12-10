const replaceLink = (text: string) => {
  // Замена "FILM" на "CATALOG" в тексте
  const replacedText = text.replace(/film/g, 'catalog');

  return { __html: replacedText };
};

export default replaceLink;
