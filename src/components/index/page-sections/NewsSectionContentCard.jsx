import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from '@reach/router';

const NewsSectionContentCard = ({ src, alt, header, text, link, className }) => {
  return (
    <div className={`${className} flex flex-wrap flex-row w-full`}>
      <div className="p-4 w-full my-2 px-2 md:my-2 md:px-2 md:w-1/2 h-auto items-center flex-col">
        <img
          src={src}
          alt={alt}
          className="object-fill border-2 border-hubblr-turquoise shadow-box-purple"
        />
      </div>
      <div className="p-4 w-full my-2 px-2 md:my-2 md:px-2 md:w-1/2 h-auto items-center flex-col">
        <h2 className="text-3xl mb-10 text-left">{header}</h2>
        <p className="my-5 text-left 2xl:text-xl">{text}</p>
        <div className="flex ">
          <Link to={link} className="my-5 w-1/2">
            <span className="borderless-link-black">
              <FormattedMessage id="generic.read-more" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

NewsSectionContentCard.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  link: PropTypes.string.isRequired,
};

NewsSectionContentCard.defaultProps = {
  alt: '',
  className: '',
};

export default NewsSectionContentCard;
