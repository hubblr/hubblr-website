import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SiteContentAccordionItemContext from './SiteContentAccordionItemContext';

const SiteContentAccordionContent = React.forwardRef(
  (
    {
      children,
      className,
      activeClassName,
      inactiveClassName,
      activeStyles,
      inactiveStyles,
      showWhenClosed,
    },
    ref
  ) => {
    const { sectionIsOpen } = useContext(SiteContentAccordionItemContext);
    const isActive = sectionIsOpen !== showWhenClosed;

    return (
      <div
        ref={ref}
        style={isActive ? activeStyles : inactiveStyles}
        className={`${className} ${isActive ? activeClassName : inactiveClassName}`}
      >
        {children}
      </div>
    );
  }
);

SiteContentAccordionContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  inactiveClassName: PropTypes.string,
  activeStyles: PropTypes.objectOf(PropTypes.string),
  inactiveStyles: PropTypes.objectOf(PropTypes.string),
  showWhenClosed: PropTypes.bool, // by default, shows content when open
};

SiteContentAccordionContent.defaultProps = {
  className: '',
  activeClassName: 'active',
  inactiveClassName: 'inactive',
  activeStyles: null,
  inactiveStyles: null,
  showWhenClosed: false,
};

export default SiteContentAccordionContent;
