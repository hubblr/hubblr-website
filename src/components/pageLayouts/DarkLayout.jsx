import React from 'react';
import PropTypes from 'prop-types';

function DarkLayout({ children, additionalStyles }) {
  return <div className={`bg-black text-white font-sans ${additionalStyles}`}>{children}</div>;
}

DarkLayout.propTypes = {
  children: PropTypes.node,
  additionalStyles: PropTypes.string,
};

export default DarkLayout;
