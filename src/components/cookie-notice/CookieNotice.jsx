import React, { useState, useLayoutEffect } from 'react';
import AppButton from '../simple/button/AppButton';

function CookieNotice() {
  const [isAccepted, setIsAccepted] = useState(false);
  // can not use window in first render because of gatsby server side render
  useLayoutEffect(() => {
    if (window.localStorage.getItem('cookiesAccepted')) {
      setIsAccepted(true);
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
            Diese Webseite verwendet essentielle Cookies. Bitte erlaube diese Cookies.
          </div>
          <div className="flex justify-center">
            <AppButton
              className="button-dark font-extrabold tracking-tight"
              onClick={() => {
                window.localStorage.setItem('cookiesAccepted', 'all');
                setIsAccepted(true);
              }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-teal-400 to-blue-500">
                Alle akzeptieren
              </span>
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieNotice;
