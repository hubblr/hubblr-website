import React from 'react';
import PropTypes from 'prop-types';
import MainSectionAnimated from './MainSectionAnimated.jsx';
import SectionHeading from '../pageMainContent/SectionHeading.jsx';
import MainContentCard from '../pageMainContent/MainContentCard.jsx';

function HubblrMainContentSectionAnimated({
  scrollBar,
  fadeInImage,
  contentTitle,
  mainContentDescription,
}) {
  return (
    <MainSectionAnimated
      height="250vh"
      scrollBar={scrollBar}
      transformElements={[
        {
          wrappedElement: fadeInImage,
          positionClass: 'top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
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
          positionClass: 'top-1/2 left-1/2',
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
          positionClass: 'top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
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

HubblrMainContentSectionAnimated.propTypes = {
  scrollBar: PropTypes.node,
  fadeInImage: PropTypes.node,
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
