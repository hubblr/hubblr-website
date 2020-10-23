import React from 'react';
import PropTypes from 'prop-types';
import MainSectionAnimated from './MainSectionAnimated';
import SectionHeading from '../pageMainContent/SectionHeading';
import MainContentCard from '../pageMainContent/MainContentCard';

const HubblrMainContentSectionAnimated = React.forwardRef(
  ({ scrollBar, fadeInImage, contentTitle, mainContentDescription }, sectionRef) => {
    return (
      <MainSectionAnimated
        ref={sectionRef}
        height="250vh"
        scrollBar={scrollBar}
        transformElements={[
          {
            wrappedElement: fadeInImage,
            motionWrapperStyling: {
              positionClass: 'top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
            },
            transforms: [
              {
                cssProp: 'opacity',
                range: [0, 1],
                scrollPercentageStart: 20,
                scrollPercentageEnd: 40,
              },
            ],
          },
          {
            wrappedElement: <SectionHeading heading={contentTitle} />,
            motionWrapperStyling: {
              positionClass: 'top-1/2 left-1/2',
            },
            transforms: [
              {
                cssProp: 'opacity',
                range: [0, 1],
                scrollPercentageStart: 40,
                scrollPercentageEnd: 70,
              },
              {
                cssProp: 'top',
                range: ['50%', '20%'],
                scrollPercentageStart: 40,
                scrollPercentageEnd: 70,
              },
              {
                cssProp: 'scale',
                range: [1, 0.5],
                scrollPercentageStart: 40,
                scrollPercentageEnd: 70,
              },
            ],
          },
          {
            wrappedElement: (
              <MainContentCard
                conceptCardDescription={{
                  title: mainContentDescription.title,
                  description: mainContentDescription.description,
                  tabledConcepts: mainContentDescription.tabledConcepts,
                }}
                navigationButtonInfo={{
                  text: mainContentDescription.navButtonTitle,
                }}
              />
            ),
            motionWrapperStyling: {
              positionClass: 'top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
              dimensionClasses: 'h-1/2',
            },
            transforms: [
              {
                cssProp: 'opacity',
                range: [0, 1],
                scrollPercentageStart: 60,
                scrollPercentageEnd: 70,
              },
            ],
          },
        ]}
      />
    );
  }
);

HubblrMainContentSectionAnimated.defaultProps = {
  scrollBar: null,
  fadeInImage: null,
  contentTitle: '',
  mainContentDescription: null,
};

HubblrMainContentSectionAnimated.propTypes = {
  scrollBar: PropTypes.element,
  fadeInImage: PropTypes.element,
  contentTitle: PropTypes.string,
  mainContentDescription: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    tabledConcepts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
      })
    ),
    navButtonTitle: PropTypes.string,
  }),
};

export default HubblrMainContentSectionAnimated;
