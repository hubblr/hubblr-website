import { Link } from '@reach/router';
import React from 'react';
import PropTypes from 'prop-types';

const ServiceSectionCard = ({ className, title, content, link, children }) => {
  return (
    <div>
      <div className={className}>
        <h3 className="text-xl md:text-3xl m-5 px-5 font-sans 2xl:text-4xl">{title}</h3>
        <p className="m-5 text-center py-2 2xl:text-xl">{content}</p>
        <Link to={link} className="m-5">
          {children}
        </Link>
      </div>
    </div>
  );
};

ServiceSectionCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ServiceSectionCard.defaultProps = {
  className: '',
};

export default ServiceSectionCard;
