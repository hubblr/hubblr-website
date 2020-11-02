import React from 'react';
import PropTypes from 'prop-types';
import HeadlinerBoxImageDesktop from '../imageComponents/HeadlinerBoxImageDesktop';
import HeadlinerBoxImageMobile from '../imageComponents/HeadlinerBoxImageMobile';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';

function MainContentCardHeader({ cardTitle, description, padding }) {
  return (
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
          <h3 className="text-xl text-purple-700 font-bold mb-3">{cardTitle.toUpperCase()}</h3>
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
  );
}

MainContentCardHeader.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  padding: PropTypes.string,
};

MainContentCardHeader.defaultProps = {
  padding: '2rem',
};

export default MainContentCardHeader;
