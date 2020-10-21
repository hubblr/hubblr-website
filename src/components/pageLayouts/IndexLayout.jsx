import React from 'react';
import PropTypes from 'prop-types';
import DarkLayout from './DarkLayout.jsx';

function IndexLayout({ children }) {
  return <DarkLayout additionalStyles="px-16">{children}</DarkLayout>;
}

IndexLayout.propTypes = {
  children: PropTypes.node,
};

export default IndexLayout;
