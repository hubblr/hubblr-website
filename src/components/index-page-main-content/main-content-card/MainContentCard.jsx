import React from 'react';
import PropTypes from 'prop-types';
import { DesktopQuery, MobileAndTabletQuery } from '../../../util/helpers';
import HeadlinerBoxSvg from '../../image-components/HeadlinerBoxSvg';

function MainContentCard({ children, title, description, className, padding }) {
  return (
    <div
      className={`w-full h-full flex flex-col justify-between bg-white text-black rounded-lg ${className}`}
    >
      <div
        className="lg:grid pb-8"
        style={{
          gridTemplateRows: `max-content ${padding}`,
          gridTemplateColumns: `minmax(auto, 40rem) ${padding}`,
        }}
      >
        <div className="row-start-1 col-start-1">
          <div
            style={{
              paddingLeft: padding,
              paddingTop: padding,
            }}
          >
            <h3 className="text-lg text-purple-700 leading-none font-bold mb-2">
              {title.toUpperCase()}
            </h3>
            <h2 className="text-3xl font-bold leading-7">{description}</h2>
          </div>
        </div>
        <div className="row-start-1 col-start-1 row-end-3 col-end-3 h-16 lg:h-auto">
          <MobileAndTabletQuery>
            <HeadlinerBoxSvg className="h-full w-full" viewBox="120 125 546 94" />
          </MobileAndTabletQuery>
          <DesktopQuery>
            <HeadlinerBoxSvg className="h-full w-full" viewBox="150 50 566 144" />
          </DesktopQuery>
        </div>
      </div>
      <div
        style={{
          paddingLeft: padding,
          paddingRight: padding,
          paddingBottom: padding,
        }}
      >
        {children}
      </div>
    </div>
  );
}

MainContentCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  padding: PropTypes.string,
};

MainContentCard.defaultProps = {
  children: null,
  className: '',
  padding: '2rem',
};

export default MainContentCard;
