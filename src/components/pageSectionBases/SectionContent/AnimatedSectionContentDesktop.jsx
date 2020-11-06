import React from 'react';
import PropTypes from 'prop-types';
import AnimatedSectionHeadingDesktop from '../../animated-elements/section-heading/AnimatedSectionHeadingDesktop';
import AnimatedImageContentDesktop from '../../animated-elements/image-content/AnimatedImageContentDesktop';
import AnimatedMainContentDesktop from '../../animated-elements/main-content/AnimatedMainContentDesktop';

function AnimatedSectionContentDesktop({ children, contentTitle, targetCustomers, fadeInImage }) {
  return (
    <>
      <AnimatedSectionHeadingDesktop heading={contentTitle} />
      <AnimatedImageContentDesktop fadeInImage={fadeInImage} />
      <AnimatedMainContentDesktop targetCustomers={targetCustomers}>
        {children}
      </AnimatedMainContentDesktop>
    </>
  );
}

AnimatedSectionContentDesktop.propTypes = {
  children: PropTypes.node.isRequired,
  fadeInImage: PropTypes.node.isRequired,
  contentTitle: PropTypes.string.isRequired,
  targetCustomers: PropTypes.arrayOf(PropTypes.string),
};

AnimatedSectionContentDesktop.defaultProps = {
  targetCustomers: [],
};

export default AnimatedSectionContentDesktop;
