import React from 'react';
import PropTypes from 'prop-types';
import HubblrGradientBorderButtonBase from '../gradientBorderButtons/HubblrGradientBorderButtonBase';
import LongArrowImage from '../imageComponents/LongArrowImage';

function BusinessCard({ children, image, name, position, actionName }) {
  return (
    <div className="w-full h-full bg-gray-800 rounded-lg p-5 flex flex-col items-center gap-5">
      {image}
      <div className="flex-grow flex flex-col justify-between items-center">
        {children}
        <div className="flex flex-col items-center mb-1">
          <p className="text-lg font-extrabold mb-1">{name}</p>
          <p className="text-base">{position}</p>
        </div>
      </div>
      <HubblrGradientBorderButtonBase
        widthClass="lg:w-full"
        addedFlexClasses="justify-between gap-3"
        theme="dark"
        image={<LongArrowImage theme="dark" />}
      >
        <div>{actionName}</div>
      </HubblrGradientBorderButtonBase>
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
