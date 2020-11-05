import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import DesignAdvertisementHeader from '../../indexPageMainContent/DesignAdvertisementHeader/DesignAdvertisementHeader';
import AnimatedInitialContentMobile from '../../animatedElements/mobile/AnimatedInitialContentMobile';
import AnimatedMainContentMobile from '../../animatedElements/mobile/AnimatedMainContentMobile';

function AnimatedSectionContentMobile({ children, fadeInImage, contentTitle, targetCustomers }) {
  return (
    <>
      <AnimatedInitialContentMobile fadeInImage={fadeInImage} contentTitle={contentTitle} />
      <motion.div style={{}}>
        <DesignAdvertisementHeader targetCustomers={targetCustomers} />
      </motion.div>
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
