import './src/css/style.scss';
import { navigate } from '@reach/router';
import langConfig from './i18n/config.json';
import { defaultLanguage } from './src/globals';

const supportedLanguagePaths = langConfig
  .map(({ code }) => code)
  .filter((code) => code !== defaultLanguage);

// eslint-disable-next-line import/prefer-default-export
export const onInitialClientRender = () => {
  let currentPath = window.location.pathname + window.location.hash;

  // get language to use
  let language = window.navigator.language.substr(0, 2);
  if (!supportedLanguagePaths.includes(language)) {
    language = defaultLanguage;
  }

  if (supportedLanguagePaths.some((lang) => currentPath.startsWith(`/${lang}`))) {
    currentPath = currentPath.substr(3, currentPath.length - 3);
  }
  if (language !== defaultLanguage) {
    // because en is our base path
    currentPath = `/${language}${currentPath}`;
  }

  navigate(currentPath, { replace: true });
};
