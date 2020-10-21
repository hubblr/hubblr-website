import React from "react";
import PropTypes from "prop-types";
import GradientBorderButtonAppLongArrow from "../gradientBorderButtons/gradientBorderButtonAppLongArrow";


function BusinessCard(props) {
  return (
    <div
      className="w-full h-full bg-gray-800 flex flex-col items-center rounded-lg p-5"
    >
      {props.image}
      <div
        className="flex flex-col items-center"
      >
        {props.children}
        <div
          className="flex flex-col items-center"
        >
          <p>
            {props.name}
          </p>
          <p>
            {props.position}
          </p>
        </div>
      </div>
      <GradientBorderButtonAppLongArrow
        buttonText={props.actionName}
      />
    </div>
  )
}

BusinessCard.propTypes = {
  children: PropTypes.node,
  image: PropTypes.node,
  name: PropTypes.string,
  position: PropTypes.string,
  actionName: PropTypes.string,
}

export default BusinessCard;