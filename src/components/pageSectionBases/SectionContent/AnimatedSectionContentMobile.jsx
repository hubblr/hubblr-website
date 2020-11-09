import React from 'react';
import PropTypes from 'prop-types';
import AnimatedInitialContentMobile from '../../animated-elements/initial-content/AnimatedInitialContentMobile';
import AnimatedDesignAdvertisementHeaderMobile from '../../animated-elements/design-advertisement-header/AnimatedDesignAdvertisementHeaderMobile';
import AnimatedMainContentMobile from '../../animated-elements/main-content/AnimatedMainContentMobile';

function AnimatedSectionContentMobile({ children, fadeInImage, contentTitle, targetCustomers }) {
  return (
    <>
      <div className="container mx-auto">
        <AnimatedInitialContentMobile
          className="mb-8"
          fadeInImage={fadeInImage}
          contentTitle={contentTitle}
        />
      </div>
      <AnimatedDesignAdvertisementHeaderMobile className="mb-5" targetCustomers={targetCustomers} />
      <div className="container mx-auto">
        <AnimatedMainContentMobile>{children}</AnimatedMainContentMobile>
      </div>
    </>
  );
}

AnimatedSectionContentMobile.propTypes = {
  children: PropTypes.node.isRequired,
  fadeInImage: PropTypes.node.isRequired,
  contentTitle: PropTypes.string.isRequired,
  targetCustomers: PropTypes.arrayOf(PropTypes.string),
};

AnimatedSectionContentMobile.defaultProps = {
  targetCustomers: [],
};

export default AnimatedSectionContentMobile;
