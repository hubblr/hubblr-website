import React from 'react';
import PropTypes from 'prop-types';
import DarkLayout from './DarkLayout';

function IndexLayout({ children }) {
  return <DarkLayout additionalStyles="">{children}</DarkLayout>;
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexLayout;
