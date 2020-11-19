import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import AppButton from '../buttons/bases/AppButton';

function CookieNotice({ setGoogleAnalyticsAllowed }) {
  const [isAccepted, setIsAccepted] = useState(false);
  // can not use window in first render because of gatsby server side render
  useLayoutEffect(() => {
    const cookieStatus = window.localStorage.getItem('cookiesAccepted');
    if (cookieStatus) {
      setIsAccepted(true);
    }
    if (cookieStatus === 'allAllowed') {
      setGoogleAnalyticsAllowed(true);
    }
  });

  return (
    <div
      className={`${
        isAccepted ? 'hidden ' : ''
      }bg-brand-gray-dark fixed bottom-0 w-full text-white py-10 px-6`}
    >
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="font-bold text-xl tracking-tight mb-5">Cookie Update</div>
        <div className="flex flex-col">
          <div className="mb-3">
            <span>
              Wir verwenden Cookies und Google Analytics für Analyse und Statistik. Diese Cookies
              helfen uns, die Benutzerfreundlichkeit unserer Seite zu verbessern. Mehr Informationen
              findest du{' '}
            </span>
            <Link to="/privacy" className="underline">
              hier
            </Link>
            <span>.</span>
          </div>

          <div className="flex justify-center">
            <AppButton
              className="button-dark font-extrabold tracking-tight pr-1"
              onClick={() => {
                window.localStorage.setItem('cookiesAccepted', 'noneAllowed');
                setIsAccepted(true);
              }}
            >
              <div className="text-center text-black">Cookies ablehnen</div>
            </AppButton>
            <AppButton
              className="button-dark font-extrabold tracking-tight"
              onClick={() => {
                window.localStorage.setItem('cookiesAccepted', 'allAllowed');
                setIsAccepted(true);
              }}
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-center">
                Alle akzeptieren
              </div>
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}

CookieNotice.propTypes = {
  setGoogleAnalyticsAllowed: PropTypes.func.isRequired,
};

export default CookieNotice;
