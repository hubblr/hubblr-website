import React from "react";
import PropTypes from "prop-types";
import {arrayOfLength} from "../helpers/customPropChecks";
import {motion, useTransform, useViewportScroll} from "framer-motion";

function templateCssTransform({x, y, scale}) {
  x = x ? x : '-50%';
  y = y ? y: '-50%';
  scale = scale ? scale : 1;
  return `translateX(${x}) translateY(${y}) scale(${scale})`;
}

function ScrollAnimatedElement(props) {
  //create motionValues translated from y-scroll progress
  const {scrollYProgress} = useViewportScroll();
  const animationStyles = {};
  props.transforms && props.transforms.forEach(transformInfo => {
    animationStyles[transformInfo.cssProp] = useTransform(scrollYProgress,
      [transformInfo.scrollPercentageBreakpoints.start,
      transformInfo.scrollPercentageBreakpoints.end], transformInfo.range);
  })

  return (
    <motion.div
      transformTemplate={templateCssTransform}
      className={`absolute transform ${props.positionClass}`}
      style={animationStyles}
    >
      {props.wrappedElement}
    </motion.div>
  )
}

//prop type checking including custom function
const arrayOfLength2 = function(prop, propName) {
  return arrayOfLength(2, prop, propName);
}
ScrollAnimatedElement.propTypes = {
  wrappedElement: PropTypes.node,
  positionClass: PropTypes.string,
  transforms: PropTypes.arrayOf(PropTypes.shape({
    cssProp: PropTypes.string,
    range: arrayOfLength2,
    scrollPercentageBreakpoints: PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
    })
  })),
}

export default ScrollAnimatedElement;

