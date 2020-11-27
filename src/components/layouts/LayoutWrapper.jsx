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
import GoogleAnalyticsSetup from '../google-analytics/GoogleAnalyticsSetup';

// language settings
const messages = {
  de: messagesDe,
  en: messagesEn,
};

const LayoutWrapper = ({ children }) => {
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
        <motion.div lang={locale} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {children}
          <CookieNotice setGoogleAnalyticsAllowed={setGoogleAnalyticsAllowed} />
        </motion.div>
        <div id="modal-root" />
      </IntlProvider>
    </>
  );
};

LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWrapper;
