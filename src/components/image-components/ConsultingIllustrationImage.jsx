import React from 'react';
import PropTypes from 'prop-types';
import illustration from '../../images/consulting/consulting-illustration.png';

function ConsultingIllustrationImage({ className }) {
  return <img src={illustration} alt="consulting" className={className} />;
}

ConsultingIllustrationImage.propTypes = {
  className: PropTypes.string,
};

ConsultingIllustrationImage.defaultProps = {
  className: 'h-full w-full',
};

export default ConsultingIllustrationImage;
