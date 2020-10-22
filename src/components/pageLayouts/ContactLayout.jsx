import React from 'react';
import PropTypes from 'prop-types';
import DarkLayout from './DarkLayout';

function ContactLayout({ children }) {
  return <DarkLayout additionalStyles="h-screen px-32 pt-12 pb-6">{children}</DarkLayout>;
}

ContactLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactLayout;
