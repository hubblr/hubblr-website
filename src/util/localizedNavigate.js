import { navigate } from '@reach/router';
import { defaultLanguage } from '../globals';

function localizedNavigate(to, locale, { replace = false } = {}) {
  // to can either point to new (index) path or subpath from current location
  const localTo = locale === defaultLanguage || to.substr(0, 1) !== '/' ? to : `/${locale}${to}`;
  // wrap navigate
  return new Promise((resolve) => {
    navigate(localTo, { replace }).then(() => {
      resolve();
    });
  });
}

export default localizedNavigate;
