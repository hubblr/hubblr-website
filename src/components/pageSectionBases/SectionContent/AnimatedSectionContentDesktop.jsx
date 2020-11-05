import React from 'react';
import PropTypes from 'prop-types';
import AnimatedSectionHeadingDesktop from '../../animatedElements/desktop/AnimatedSectionHeadingDesktop';
import AnimatedImageContentDesktop from '../../animatedElements/desktop/AnimatedImageContentDesktop';
import AnimatedMainContentDesktop from '../../animatedElements/desktop/AnimatedMainContentDesktop';

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
