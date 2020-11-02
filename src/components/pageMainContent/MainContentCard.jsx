import React from 'react';
import PropTypes from 'prop-types';
import MainContentCardHeader from './MainContentCardHeader';
import MainContentCardContent from './MainContentCardContent';

function MainContentCard({
  children,
  mainContentDescription: { title: cardTitle, description, tabledConcepts },
  className,
  padding,
}) {
  return (
    <div
      className={`w-full h-full flex flex-col justify-between bg-white text-black rounded-lg ${className}`}
    >
      <MainContentCardHeader cardTitle={cardTitle} description={description} padding={padding} />
      <MainContentCardContent tabledConcepts={tabledConcepts}>{children}</MainContentCardContent>
    </div>
  );
}

MainContentCard.propTypes = {
  children: PropTypes.node,
  mainContentDescription: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tabledConcepts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  className: PropTypes.string,
  padding: PropTypes.string,
};

MainContentCard.defaultProps = {
  children: null,
  className: '',
  padding: '2rem',
};

export default MainContentCard;
