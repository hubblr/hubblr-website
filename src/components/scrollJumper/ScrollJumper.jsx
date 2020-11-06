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
    if (!containerRef.current) {
      return;
    }
    const scrollRight = containerRef.current.scrollLeft + clientWidth;
    let nextJumpX = widthBefore;
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
    if (!containerRef.current) {
      return;
    }
    const scrollRight = containerRef.current.scrollLeft + clientWidth;
    let nextJumpX = scrollWidth;
    for (let i = contentWidths.length - 1; i >= 0; i -= 1) {
      const nextContentWidth = contentWidths[i];
      nextJumpX -= nextContentWidth;
      if (scrollRight > nextJumpX) {
        setScrollLeft(nextJumpX - clientWidth);
        return;
      }
      const nextDividerIdx = i - 1;
      if (nextDividerIdx > 0) {
        const nextDividerWidth = dividerWidths[nextDividerIdx];
        nextJumpX -= nextDividerWidth;
      }
    }
  };

  return (
    <div className={containerClassName}>
      <Button className={leftButtonClassName} onClick={scrollToPrev}>
        <LongArrowImage className="w-24" theme="gray" orientation="left" />
      </Button>
      <Button className={rightButtonClassName} onClick={scrollToNext}>
        <LongArrowImage className="w-24" theme="gray" orientation="right" />
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
