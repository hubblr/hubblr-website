import React from 'react';
import PropTypes from 'prop-types';
import AnimatedInitialContentMobile from '../../animated/initial-content/AnimatedInitialContentMobile';
import AnimatedDesignAdvertisementHeaderMobile from '../../animated/design-advertisement-header/AnimatedDesignAdvertisementHeaderMobile';
import AnimatedMainContentMobile from '../../animated/main-content/AnimatedMainContentMobile';

function AnimatedSectionContentMobile({ children, fadeInImage, contentTitle, targetCustomers }) {
  return (
    <div className="mt-4 w-full flex flex-col">
      <div className="container mx-auto mb-4">
        <AnimatedInitialContentMobile fadeInImage={fadeInImage} contentTitle={contentTitle} />
      </div>
      <AnimatedDesignAdvertisementHeaderMobile className="mb-4" targetCustomers={targetCustomers} />
      <div className="container mx-auto">
        <AnimatedMainContentMobile>{children}</AnimatedMainContentMobile>
      </div>
    </div>
  );
}

AnimatedSectionContentMobile.propTypes = {
  children: PropTypes.node.isRequired,
  fadeInImage: PropTypes.node.isRequired,
  contentTitle: PropTypes.string.isRequired,
  targetCustomers: PropTypes.arrayOf(PropTypes.node),
};

AnimatedSectionContentMobile.defaultProps = {
  targetCustomers: [],
};

export default AnimatedSectionContentMobile;
