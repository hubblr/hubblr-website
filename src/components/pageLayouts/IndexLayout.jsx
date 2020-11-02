import React from 'react';
import PropTypes from 'prop-types';
import DarkLayout from './DarkLayout';

function IndexLayout({ children }) {
  return <DarkLayout additionalStyles="px-2 md:px-12">{children}</DarkLayout>;
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexLayout;
