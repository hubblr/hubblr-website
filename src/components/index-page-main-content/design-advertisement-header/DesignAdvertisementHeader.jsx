import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import DesignAdvertisementHeaderPill from './DesignAdvertisementHeaderPill';
import DesignAdvertisementHeaderDivider from './DesignAdvertisementHeaderDivider';
import useOffsetWidth from '../../hooks/dimensions/useOffsetWidth';

const DesignAdvertisementHeader = forwardRef(
  ({ className, targetCustomers, setElementWidths }, givenRef) => {
    // this component does not always need to be referenced in parent
    const backUpRef = useRef();
    const containerRef = givenRef || backUpRef;

    // determine relevant widths and pass them to parent
    // non-scrolled width of wrapper element
    const containerWidth = useOffsetWidth(containerRef);
    // width of text before the content
    const frontTextRef = useRef();
    const frontTextWidth = useOffsetWidth(frontTextRef);
    // width of divider bar between front text and content (setter passed to child)
    const [growingDividerWidth, setGrowingDividerWidth] = useState(0);
    // array of widths of content elements
    const contentWidths = useRef(Array(targetCustomers.length));
    // array of widths of dividers between content elements
    const dividerWidths = useRef(Array(targetCustomers.length - 1));
    // functions to fill width arrays inside of child components
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
    // use setter passed by parent to share widths with parent
    useLayoutEffect(() => {
      if (setElementWidths) {
        setElementWidths({
          containerWidth,
          frontTextWidth,
          growingDividerWidth,
          contentWidths: contentWidths.current,
          dividerWidths: dividerWidths.current,
        });
      }
    }, [containerWidth, frontTextWidth, growingDividerWidth, setElementWidths]);

    return (
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
                  colorStyles="text-white bg-brand-gray-darkest"
                >
                  {targetName}
                </DesignAdvertisementHeaderPill>
                {divider}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

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
