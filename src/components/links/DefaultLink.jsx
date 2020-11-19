import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function DefaultLink({ children, className }) {
  return (
    <Link to="/contact" className={className}>
      {children}
    </Link>
  );
}

DefaultLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DefaultLink.defaultProps = {
  children: null,
  className: '',
};

export default DefaultLink;
