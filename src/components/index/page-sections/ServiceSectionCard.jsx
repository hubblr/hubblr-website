import { Link } from '@reach/router';
import React from 'react';
import PropTypes from 'prop-types';

const ServiceSectionCard = ({ className, title, content, link, children }) => {
  return (
    <div>
      <div className={`${className}`}>
        <h2 className="text-xl md:text-3xl m-5 px-5 font-sans">{title}</h2>
        <p className="m-5 text-center py-2 md:py-10">{content}</p>
        <Link to={link} className="m-5">
          {children}
        </Link>
      </div>
    </div>
  );
};

ServiceSectionCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
};

ServiceSectionCard.defaultProps = {
  title: '',
  content: '',
  link: '/',
  className: '',
};

export default ServiceSectionCard;