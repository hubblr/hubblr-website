import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/bases/Button';
import useClientWidth from '../../hooks/dimensions/useClientWidth';
import LongArrowImage from '../image-components/LongArrowImage';

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
  const clientWidth = useClientWidth(containerRef);
  const breakpoints = useMemo(() => {
    const curBreakpoints = [];
    let nextJumpX = widthBefore;
    for (let i = 0; i < contentWidths.length; i += 1) {
      // after divider/at start comes a content div
      const nextContentWidth = contentWidths[i];
      nextJumpX += nextContentWidth;
      // new breakpoint reached
      curBreakpoints.push(nextJumpX);
      // after breakpoint comes a divider
      if (i < contentWidths.length - 1) {
        const nextDividerWidth = dividerWidths[i];
        nextJumpX += nextDividerWidth;
      }
    }
    return curBreakpoints;
  }, [contentWidths, dividerWidths, widthBefore]);

  const scrollToNext = () => {
    if (!containerRef.current) {
      return;
    }
    const scrollRight = containerRef.current.scrollLeft + clientWidth;
    for (let i = 0; i < breakpoints.length; i += 1) {
      // check whether current right position of container is in front of any breakpoint
      const breakpoint = breakpoints[i];
      if (scrollRight < breakpoint) {
        setScrollLeft(breakpoint - clientWidth);
        return;
      }
    }
  };
  const scrollToPrev = () => {
    if (!containerRef.current) {
      return;
    }
    const scrollRight = containerRef.current.scrollLeft + clientWidth;
    for (let i = breakpoints.length - 1; i >= 0; i -= 1) {
      // check whether current right position of container is after any breakpoint
      const breakpoint = breakpoints[i];
      if (scrollRight > breakpoint) {
        setScrollLeft(breakpoint - clientWidth);
        return;
      }
    }
    setScrollLeft(0);
  };

  return (
    <div className={containerClassName}>
      <Button className={`button-theme-dark ${leftButtonClassName}`} onClick={scrollToPrev}>
        <LongArrowImage className="w-16" theme="gray" orientation="left" />
      </Button>
      <Button className={`button-theme-dark ${rightButtonClassName}`} onClick={scrollToNext}>
        <LongArrowImage className="w-16" theme="gray" orientation="right" />
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
