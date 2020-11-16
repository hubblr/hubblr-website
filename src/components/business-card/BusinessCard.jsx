import React from 'react';
import PropTypes from 'prop-types';
import HubblrGradientBorderButtonBase from '../gradient-border-buttons/HubblrGradientBorderButtonBase';
import LongArrowImage from '../image-components/LongArrowImage';

function BusinessCard({ children, image, name, position, actionName }) {
  return (
    <div className="w-full h-full bg-brand-gray-darkest rounded-lg p-5 flex flex-col items-center">
      <div className="mb-5">{image}</div>
      <div className="flex-grow flex flex-col justify-between items-center mb-5">
        {children}
        <div className="flex flex-col items-center">
          <p className="text-lg font-extrabold">{name}</p>
          <p className="text-base">{position}</p>
        </div>
      </div>
      <a href="https://calendly.com/cbals/30min">
        <HubblrGradientBorderButtonBase
          widthClass="lg:w-full"
          addedFlexClasses="justify-between"
          theme="dark"
          image={<LongArrowImage theme="dark" className="ml-3" />}
        >
          <div>{actionName}</div>
        </HubblrGradientBorderButtonBase>
      </a>
    </div>
  );
}

BusinessCard.defaultProps = {
  children: null,
};

BusinessCard.propTypes = {
  children: PropTypes.node,
  image: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  actionName: PropTypes.string.isRequired,
};

export default BusinessCard;
