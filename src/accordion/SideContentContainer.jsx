import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SiteContentAccordionContext from './SiteContentAccordionContext';

function SideContentContainer({ className }) {
  const { sideContent } = useContext(SiteContentAccordionContext);

  return <div className={className}>{sideContent}</div>;
}

SideContentContainer.propTypes = {
  className: PropTypes.string,
};

SideContentContainer.defaultProps = {
  className: '',
};

export default SideContentContainer;
