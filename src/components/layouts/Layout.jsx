import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { motion } from 'framer-motion';
import flatten from 'flat';
import messagesDe from '../../translations/de.json';
import CookieNotice from '../cookie-notice/CookieNotice';
import HubblrPageLinks from '../links/HubblrPageLinks';

// TODO: language data - missing for now
/* import en from '../locales/en.json';
import de from '../locales/de.json';
const messages = { en: flattenMessages(en), de: flattenMessages(de) }; */

const language = 'de';
const messages = {
  de: messagesDe,
};

const Layout = ({ children, navBar }) => {
  return (
    <>
      <IntlProvider locale={language} messages={flatten(messages[language])}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex flex-col min-h-screen bg-black text-white font-sans">
            <div className="flex-grow flex flex-col max-sm:px-4">
              {navBar}
              {children}
            </div>
            <div className="container mx-auto">
              <HubblrPageLinks />
            </div>
          </div>
          <CookieNotice />
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
