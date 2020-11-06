import React from 'react';
import PropTypes from 'prop-types';
import AnimatedInitialContentMobile from '../../animatedElements/mobile/AnimatedInitialContentMobile';
import AnimatedDesignAdvertisementHeaderMobile from '../../animatedElements/mobile/AnimatedDesignAdvertisementHeaderMobile';
import AnimatedMainContentMobile from '../../animatedElements/mobile/AnimatedMainContentMobile';

function AnimatedSectionContentMobile({ children, fadeInImage, contentTitle, targetCustomers }) {
  return (
    <>
      <AnimatedInitialContentMobile
        className="mb-8"
        fadeInImage={fadeInImage}
        contentTitle={contentTitle}
      />
      <AnimatedDesignAdvertisementHeaderMobile className="mb-5" targetCustomers={targetCustomers} />
      <AnimatedMainContentMobile>{children}</AnimatedMainContentMobile>
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
