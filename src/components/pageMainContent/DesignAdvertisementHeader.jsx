import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import DesignAdvertisementHeaderPill from './DesignAdvertisementHeaderPill';
import DesignAdvertisementHeaderDivider from './DesignAdvertisementHeaderDivider';
import { MobileAndTabletQuery } from '../../util/helpers';
import LongArrowImage from '../imageComponents/LongArrowImage';
import useClientWidth from '../hooks/dimensions/useClientWidth';

function DesignAdvertisementHeader({ className, targetCustomers }) {
  // bugs here @fgreinus @lennartweihs
  const [containerWidth, containerRef] = useClientWidth();
  const [frontTextWidth, frontTextRef] = useClientWidth();
  const [growingDividerWidth, growingDividerRef] = useClientWidth();
  const contentWidths = [];
  const backContent = targetCustomers.map((targetName, i) => {
    const [pillWidth, pillRef] = useClientWidth();
    contentWidths.push(pillWidth);
    const dividerRef = useRef();
    const divider =
      i < targetCustomers.length - 1 ? <DesignAdvertisementHeaderDivider ref={dividerRef} /> : null;
    if (divider) {
      const [dividerWidth] = useClientWidth(dividerRef);
      contentWidths.push(dividerWidth);
    }
    return (
      <div key={targetName} className="flex items-center">
        <DesignAdvertisementHeaderPill ref={pillRef} colorStyles="text-white bg-gray-800">
          {targetName}
        </DesignAdvertisementHeaderPill>
        {divider}
      </div>
    );
  });

  // initial push of the header
  const frontTextLeftMargin = containerWidth - frontTextWidth - growingDividerWidth - 20;

  return (
    <>
      <div ref={containerRef} className={`w-full overflow-x-auto flex items-center ${className}`}>
        <div
          ref={frontTextRef}
          className="text-2xl font-extrabold flex flex-col items-end mr-2"
          style={{ marginLeft: frontTextLeftMargin }}
        >
          <p>designed</p>
          <p>for</p>
        </div>
        <DesignAdvertisementHeaderDivider ref={growingDividerRef} className="lg:flex-grow" />
        <div className="flex items-center">{backContent}</div>
      </div>
      <MobileAndTabletQuery>
        <div className="w-full flex justify-between pl-10 pr-10 -mt-3">
          <button className="relative z-50" type="button">
            <LongArrowImage theme="gray" orientation="left" />
          </button>
          <button className="relative z-50" type="button">
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
};

DesignAdvertisementHeader.defaultProps = {
  className: '',
};

export default DesignAdvertisementHeader;
