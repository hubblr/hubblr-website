import React from 'react';
import PropTypes from 'prop-types';
import Button from '../simple/button/Button';
import useScrollWidth from '../hooks/scroll/useScrollWidth';
import useClientWidth from '../hooks/dimensions/useClientWidth';
import LongArrowImage from '../imageComponents/LongArrowImage';

function ScrollJumper({
  containerRef,
  setScrollLeft,
  widthBefore,
  contentWidths,
  dividerWidths,
  containerClassName,
  leftButtonClassName,
  rightButtonClassName,
}) {
  const scrollWidth = useScrollWidth(containerRef);
  const clientWidth = useClientWidth(containerRef);

  const scrollToNext = () => {
    console.log('scroll left is:', containerRef.current.scrollLeft);
    const scrollRight = containerRef.current.scrollLeft + clientWidth;
    let nextJumpX = widthBefore;
    console.log('w before:', nextJumpX);
    for (let i = 0; i < contentWidths.length; i += 1) {
      const nextContentWidth = contentWidths[i];
      nextJumpX += nextContentWidth;
      if (scrollRight < nextJumpX) {
        setScrollLeft(nextJumpX - clientWidth);
        return;
      }
      if (i < contentWidths.length - 1) {
        const nextDividerWidth = dividerWidths[i];
        nextJumpX += nextDividerWidth;
      }
    }
  };
  const scrollToPrev = () => {
    const scrollRight = containerRef.current.scrollLeft + clientWidth;
    let nextJumpX = scrollWidth;
    for (let i = contentWidths.length - 1; i >= 0; i -= 1) {
      const nextContentWidth = contentWidths[i];
      nextJumpX -= nextContentWidth;
      if (scrollRight > nextJumpX) {
        setScrollLeft(nextJumpX - clientWidth);
        return;
      }
      if (i < contentWidths.length - 1) {
        const nextDividerWidth = dividerWidths[i];
        nextJumpX -= nextDividerWidth;
      }
    }
  };

  return (
    <div className={containerClassName}>
      <Button className={leftButtonClassName} onClick={scrollToPrev}>
        <LongArrowImage theme="gray" orientation="left" />
      </Button>
      <Button className={rightButtonClassName} onClick={scrollToNext}>
        <LongArrowImage theme="gray" orientation="right" />
      </Button>
    </div>
  );
}

ScrollJumper.propTypes = {
  containerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })])
    .isRequired,
  setScrollLeft: PropTypes.func.isRequired,
  widthBefore: PropTypes.number.isRequired,
  contentWidths: PropTypes.arrayOf(PropTypes.number).isRequired,
  dividerWidths: PropTypes.arrayOf(PropTypes.number).isRequired,
  containerClassName: PropTypes.string,
  leftButtonClassName: PropTypes.string,
  rightButtonClassName: PropTypes.string,
};

ScrollJumper.defaultProps = {
  containerClassName: '',
  leftButtonClassName: '',
  rightButtonClassName: '',
};

export default ScrollJumper;
