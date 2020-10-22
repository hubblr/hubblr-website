import React from 'react';
import PropTypes from 'prop-types';
import HubblrGradientBorderButtonWFull from "../gradientBorderButtons/HubblrGradientBorderButtonWFull.jsx";
import LongArrowImage from "../imageComponents/LongArrowImage.jsx";

function BusinessCard({ children, image, name, position, actionName }) {
  return (
    <div className="w-full h-full bg-gray-800 rounded-lg p-5 flex flex-col items-center gap-5">
      {image}
      <div className="flex-grow flex flex-col justify-between items-center">
        {children}
        <div className="flex flex-col items-center">
          <p className="text-lg font-extrabold">{name}</p>
          <p className="text-base">{position}</p>
        </div>
      </div>
      <HubblrGradientBorderButtonWFull
        image={<LongArrowImage theme={'dark'}/>}
        theme={'dark'}
      >
        {actionName}
      </HubblrGradientBorderButtonWFull>
    </div>
  );
}

BusinessCard.propTypes = {
  children: PropTypes.node,
  image: PropTypes.node,
  name: PropTypes.string,
  position: PropTypes.string,
  actionName: PropTypes.string,
};

export default BusinessCard;
