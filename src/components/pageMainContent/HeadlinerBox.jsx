import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import HeadlinerBoxImageDesktop from '../imageComponents/HeadlinerBoxImageDesktopDesktop';

const pushLeft = 1 / 20;
const pushDown = 1 / 18;

const HeadlinerBox = forwardRef(({ scaleFactor }, containerRef) => {
  const scalePercentage = scaleFactor * 100;
  const diff = scalePercentage - 100;
  const offset = diff / 2;
  const offsetLeft = -pushLeft * scalePercentage - offset;
  const offsetTop = pushDown * scalePercentage - offset;

  const sizeProp = `calc(${scalePercentage}%`;

  return (
    <div
      ref={containerRef}
      className="relative inset-0"
      style={{
        height: sizeProp,
        width: sizeProp,
        top: `calc(${offsetTop}%)`,
        left: `calc(${offsetLeft}%)`,
      }}
    >
      <HeadlinerBoxImageDesktop widthClass="w-full h-full" />
    </div>
  );
});

HeadlinerBox.propTypes = {
  scaleFactor: PropTypes.number.isRequired,
};

export default HeadlinerBox;
