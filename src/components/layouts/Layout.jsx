import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { motion } from 'framer-motion';
import flatten from 'flat';
import messagesDe from '../../translations/de.json';
import DarkLayout from './DarkLayout';

// TODO: language data - missing for now
/* import en from '../locales/en.json';
import de from '../locales/de.json';
const messages = { en: flattenMessages(en), de: flattenMessages(de) }; */

const language = 'de';
const messages = {
  de: messagesDe,
};

const Layout = ({ children }) => {
  return (
    <>
      <IntlProvider locale={language} messages={flatten(messages[language])}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <DarkLayout>
            <div className="max-sm:px-4">{children}</div>
          </DarkLayout>
        </motion.div>
        <div id="modal-root" />
      </IntlProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;