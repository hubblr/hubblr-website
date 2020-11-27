import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { motion } from 'framer-motion';
import flatten from 'flat';
import { Helmet } from 'react-helmet';
import { useLocalization } from 'gatsby-theme-i18n';
import messagesDe from '../../translations/de.json';
import messagesEn from '../../translations/en.json';
import CookieNotice from '../cookie-notice/CookieNotice';
import HubblrPageLinks from '../links/HubblrPageLinks';
import GoogleAnalyticsSetup from '../google-analytics/GoogleAnalyticsSetup';

// language settings
const messages = {
  de: messagesDe,
  en: messagesEn,
};

const Layout = ({ children, navBar }) => {
  const { locale } = useLocalization();

  // allowed cookies
  const [googleAnalyticsAllowed, setGoogleAnalyticsAllowed] = useState(false);

  return (
    <>
      <Helmet>
        <script
          defer
          src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
        />
      </Helmet>
      <IntlProvider locale={locale} messages={flatten(messages[locale])}>
        {googleAnalyticsAllowed && <GoogleAnalyticsSetup />}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div lang={locale} className="flex flex-col min-h-screen bg-black text-white font-sans">
            {navBar}
            <div className="flex-grow flex flex-col">{children}</div>
            <div className="container mx-auto">
              <HubblrPageLinks />
            </div>
          </div>
          <CookieNotice setGoogleAnalyticsAllowed={setGoogleAnalyticsAllowed} />
        </motion.div>
        <div id="modal-root" />
      </IntlProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navBar: PropTypes.element,
};

Layout.defaultProps = {
  navBar: null,
};

export default Layout;
