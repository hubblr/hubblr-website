import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import DesignAdvertisementHeaderPill from './DesignAdvertisementHeaderPill';
import DesignAdvertisementHeaderDivider from './DesignAdvertisementHeaderDivider';
import { MobileAndTabletQuery } from '../../util/helpers';
import LongArrowImage from '../imageComponents/LongArrowImage';
import useClientWidth from '../hooks/dimensions/useClientWidth';

function DesignAdvertisementHeader({ className, targetCustomers }) {
  const containerRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const containerWidth = useClientWidth(containerRef);
  const frontTextRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const frontTextWidth = useClientWidth(frontTextRef);
  // eslint-disable-next-line no-unused-vars
  const [growingDividerWidth, setGrowingDividerWidth] = useState(0);
  const contentWidths = useRef(Array(targetCustomers.length));
  const dividerWidths = useRef(Array(targetCustomers.length - 1));
  const createContentWidthSetter = (i) => (width) => {
    if (containerWidth.current) {
      contentWidths.current[i] = width;
    }
  };
  const createDividerWidthSetter = (i) => (width) => {
    if (dividerWidths.current) {
      dividerWidths.current[i] = width;
    }
  };

  // create the content
  const backContent = targetCustomers.map((targetName, i) => {
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
  });

  // initial push of the header
  // const frontTextLeftMargin = containerWidth - frontTextWidth - growingDividerWidth - 20;

  return (
    <>
      <div ref={containerRef} className={`w-full overflow-x-auto flex items-center ${className}`}>
        <div
          ref={frontTextRef}
          className="text-2xl font-extrabold flex flex-col items-end mr-2"
          style={{ marginLeft: '90%' }}
        >
          <p>designed</p>
          <p>for</p>
        </div>
        <DesignAdvertisementHeaderDivider
          setWidth={setGrowingDividerWidth}
          className="lg:flex-grow"
        />
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
