import React from 'react';
import PropTypes from 'prop-types';
import { DesktopQuery, MobileAndTabletQuery } from '../../../util/helpers';
import HeadlinerBoxImageMobile from '../../imageComponents/HeadlinerBoxImageMobile';
import HeadlinerBoxImageDesktop from '../../imageComponents/HeadlinerBoxImageDesktop';

function MainContentCard({ children, title, description, className, padding }) {
  return (
    <div
      className={`w-full h-full flex flex-col justify-between bg-white text-black rounded-lg ${className}`}
    >
      <div
        className="lg:grid"
        style={{
          gridTemplateRows: `max-content ${padding}`,
          gridTemplateColumns: `50% ${padding}`,
        }}
      >
        <div className="row-start-1 col-start-1">
          <div
            style={{
              paddingLeft: padding,
              paddingTop: padding,
            }}
          >
            <h3 className="text-xl text-purple-700 font-bold mb-3">{title.toUpperCase()}</h3>
            <h2 className="text-3xl font-bold leading-7">{description}</h2>
          </div>
        </div>
        <div className="row-start-1 col-start-1 row-end-3 col-end-3">
          <MobileAndTabletQuery>
            <HeadlinerBoxImageMobile className="h-full w-full" />
          </MobileAndTabletQuery>
          <DesktopQuery>
            <HeadlinerBoxImageDesktop className="h-full w-full" />
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
