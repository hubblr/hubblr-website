import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

// TODO: language data - missing for now
/* import en from '../locales/en.json';
import de from '../locales/de.json';
const messages = { en: flattenMessages(en), de: flattenMessages(de) }; */

import DarkLayout from './DarkLayout';

const Layout = ({ children }) => {
  return (
    <>
      <IntlProvider locale="de">
        <DarkLayout>
          <div className="container mx-auto">{children}</div>
        </DarkLayout>
        <div id="modal-root" />
      </IntlProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
