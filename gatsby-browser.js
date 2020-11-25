import './src/css/style.scss';
import cookies from 'browser-cookies';

const supportedLanguagePaths = ['de'];

// eslint-disable-next-line import/prefer-default-export
export const onInitialClientRender = () => {
  let currentPath = window.location.pathname;

  // redirect to the correct sub-site on first page view
  const langCookie = cookies.get('lang');
  if (langCookie === null) {
    let language = (window.navigator.language || '').substr(0, 2);

    if (!supportedLanguagePaths.includes(language)) {
      language = 'en';
    }

    if (undefined !== supportedLanguagePaths.find((lang) => currentPath.startsWith(`/${lang}`))) {
      currentPath = currentPath.substr(3, currentPath.length - 3);
    }

    if (language !== 'en') {
      // because en is our base path
      currentPath = `/${language}${currentPath}`;
    }

    cookies.set('lang', language);
    return;
  }

  if (!supportedLanguagePaths.includes(langCookie) && langCookie !== 'en') {
    cookies.set('lang', 'en');
  }
};
