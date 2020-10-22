import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function DefaultLink({ children }) {
  return <Link to="/contact">{children}</Link>;
}

DefaultLink.defaultProps = {
  children: null,
};

DefaultLink.propTypes = {
  children: PropTypes.node,
};

export default DefaultLink;
