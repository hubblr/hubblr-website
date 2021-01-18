import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './context/AccordionContext';

/** Container to render the current side content, marked as 'active' or 'inactive' depending on
 * whether the section is considered 'open' or not. To be contained somewhere beneath the main
 * Accordion component. */
function AccordionSideContentContainer({ className }) {
  const { openSections, sideContentMap } = useContext(AccordionContext);
  const fullContent = [];
  Object.entries(sideContentMap).forEach(([uuid, sideContent]) => {
    const wrappedSideContent = openSections.includes(uuid) ? (
      <div key={uuid} className="side-content active">
        {sideContent}
      </div>
    ) : (
      <div key={uuid} className="side-content inactive">
        {sideContent}
      </div>
    );
    fullContent.push(wrappedSideContent);
  });

  return <div className={`side-content-container ${className}`}>{fullContent}</div>;
}

AccordionSideContentContainer.propTypes = {
  className: PropTypes.string,
};

AccordionSideContentContainer.defaultProps = {
  className: '',
};

export default AccordionSideContentContainer;
