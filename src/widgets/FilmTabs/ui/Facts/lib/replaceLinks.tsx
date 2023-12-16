import { AppRoutes } from 'shared/config/routeConfig/routeConfig';

const replaceLink = (text: string) => {
  const replacedText = text.replace(/film/g, AppRoutes.CATALOG);
  const finalText = replacedText.replace(/name/g, AppRoutes.PERSON);

  return finalText;
};

export default replaceLink;
