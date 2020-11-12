import React from 'react';
import PropTypes from 'prop-types';
import DarkLayout from './DarkLayout';

function ContactLayout({ children }) {
  return <DarkLayout additionalStyles="h-screen px-12 xl:px-32 py-6">{children}</DarkLayout>;
}

ContactLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactLayout;
