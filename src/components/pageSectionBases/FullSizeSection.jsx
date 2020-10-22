import React from 'react';
import PropTypes from 'prop-types';

const FullSizeSection = React.forwardRef(({ children }, ref) => {
  return (
    <section ref={ref} className="h-screen w-full">
      {children}
    </section>
  );
});

FullSizeSection.displayName = 'FullSizeSection';

FullSizeSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullSizeSection;
