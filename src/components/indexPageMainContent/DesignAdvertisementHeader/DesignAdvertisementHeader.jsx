import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import DesignAdvertisementHeaderPill from './DesignAdvertisementHeaderPill';
import DesignAdvertisementHeaderDivider from './DesignAdvertisementHeaderDivider';
import { MobileAndTabletQuery } from '../../../util/helpers';
import LongArrowImage from '../../imageComponents/LongArrowImage';
import useOffsetWidth from '../../hooks/dimensions/useOffsetWidth';
import useScrollWidth from '../../hooks/scroll/useScrollWidth';
import useClientWidth from '../../hooks/dimensions/useClientWidth';

function DesignAdvertisementHeader({ className, targetCustomers, setElementWidths }) {
  // determine relevant widths and pass them to parent
  const containerRef = useRef();
  const containerWidth = useOffsetWidth(containerRef);
  const frontTextRef = useRef();
  const frontTextWidth = useOffsetWidth(frontTextRef);
  const [growingDividerWidth, setGrowingDividerWidth] = useState(0);
  const contentWidths = useRef(Array(targetCustomers.length));
  const dividerWidths = useRef(Array(targetCustomers.length - 1));
  const createContentWidthSetter = (i) => (width) => {
    if (contentWidths.current) {
      contentWidths.current[i] = width;
    }
  };
  const createDividerWidthSetter = (i) => (width) => {
    if (dividerWidths.current) {
      dividerWidths.current[i] = width;
    }
  };
  useLayoutEffect(() => {
    if (setElementWidths) {
      setElementWidths({
        containerWidth,
        frontTextWidth,
        growingDividerWidth,
        contentWidths: contentWidths.current,
        dividerWidths: contentWidths.current,
      });
    }
  }, [containerWidth, frontTextWidth, growingDividerWidth, setElementWidths]);

  // jump behavior
  const scrollWidth = useScrollWidth(containerRef);
  const clientWidth = useClientWidth(containerRef);
  const scrollToNext = () => {
    const scrollRight = containerRef.current.scrollLeft + clientWidth;
    let nextJumpX = frontTextWidth + growingDividerWidth;
    const curContentWidths = contentWidths.current;
    const curDividerWidths = dividerWidths.current;
    for (let i = 0; i < curContentWidths.length; i += 1) {
      const nextContentWidth = curContentWidths[i];
      nextJumpX += nextContentWidth;
      if (scrollRight < nextJumpX) {
        containerRef.current.scrollLeft = nextJumpX - clientWidth;
        return;
      }
      if (i < curContentWidths.length - 1) {
        const nextDividerWidth = curDividerWidths[i];
        nextJumpX += nextDividerWidth;
      }
    }
  };
  const scrollToPrev = () => {
    const scrollRight = containerRef.current.scrollLeft + clientWidth;
    let nextJumpX = scrollWidth;
    const curContentWidths = contentWidths.current;
    const curDividerWidths = dividerWidths.current;
    for (let i = curContentWidths.length - 1; i >= 0; i -= 1) {
      const nextContentWidth = curContentWidths[i];
      nextJumpX -= nextContentWidth;
      if (scrollRight > nextJumpX) {
        containerRef.current.scrollLeft = nextJumpX - clientWidth;
        return;
      }
      if (i < curContentWidths.length - 1) {
        const nextDividerWidth = curDividerWidths[i];
        nextJumpX -= nextDividerWidth;
      }
    }
  };

  return (
    <>
      <div ref={containerRef} className={`w-full overflow-x-auto flex items-center ${className}`}>
        <div ref={frontTextRef} className="text-2xl font-extrabold flex flex-col items-end pr-2">
          <p>designed</p>
          <p>for</p>
        </div>
        <DesignAdvertisementHeaderDivider
          setWidth={setGrowingDividerWidth}
          className="lg:flex-grow"
        />
        <div className="flex items-center">
          {targetCustomers.map((targetName, i) => {
            const divider =
              i < targetCustomers.length - 1 ? (
                <DesignAdvertisementHeaderDivider setWidth={createDividerWidthSetter(i)} />
              ) : null;
            return (
              <div key={targetName} className="flex items-center">
                <DesignAdvertisementHeaderPill
                  setWidth={createContentWidthSetter(i)}
                  colorStyles="text-white bg-gray-800"
                >
                  {targetName}
                </DesignAdvertisementHeaderPill>
                {divider}
              </div>
            );
          })}
        </div>
      </div>
      <MobileAndTabletQuery>
        <div className="w-full flex justify-between pl-3 pr-3 -mt-3">
          <button className="relative z-50" type="button" onClick={scrollToPrev}>
            <LongArrowImage theme="gray" orientation="left" />
          </button>
          <button className="relative z-50" type="button" onClick={scrollToNext}>
            <LongArrowImage theme="gray" orientation="right" />
          </button>
        </div>
      </MobileAndTabletQuery>
    </>
  );
}

DesignAdvertisementHeader.propTypes = {
  className: PropTypes.string,
  targetCustomers: PropTypes.arrayOf(PropTypes.string).isRequired,
  setElementWidths: PropTypes.func,
};

DesignAdvertisementHeader.defaultProps = {
  className: '',
  setElementWidths: null,
};

export default DesignAdvertisementHeader;
