import { navigate } from '@reach/router';

function localizedNavigate(to, locale, { replace = false } = {}) {
  // to can either point to new (index) path or subpath from current location
  const localTo = to.substr(0, 1) === '/' ? `/${locale}${to}` : to;
  // wrap navigate
  return new Promise((resolve) => {
    navigate(localTo, { replace }).then(() => {
      resolve();
    });
  });
}

export default localizedNavigate;
