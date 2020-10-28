import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import HeadlinerBox from './HeadlinerBox';

function ConceptCard({ title: cardTitle, description, tabledConcepts }) {
  // make sure that its container fits the headliner box
  const headlineTextContainerRef = useRef();
  const headlinerImgContainerRef = useRef();

  const [containerHeight, setContainerHeight] = useState(0);
  useEffect(() => {
    if (headlinerImgContainerRef.current && headlinerImgContainerRef.current) {
      const {
        top: startYTextContainer,
        bottom: endYTextContainer,
      } = headlineTextContainerRef.current.getBoundingClientRect();
      const { bottom: endYImgContainer } = headlinerImgContainerRef.current.getBoundingClientRect();
      const endYContainer = Math.max(endYTextContainer, endYImgContainer);
      setContainerHeight(endYContainer - startYTextContainer);
    }
  });

  // create grid contents
  const nrColumns = tabledConcepts.length;
  const titleDivs = tabledConcepts.map(({ title: conceptTitle }) => {
    return (
      <div className="font-bold text-lg break-words" key={conceptTitle}>
        {conceptTitle}
      </div>
    );
  });
  const contentDivs = tabledConcepts.map(({ content }) => {
    return (
      <div className="break-words" key={content}>
        {content}
      </div>
    );
  });

  return (
    <div className="w-full h-full flex flex-col justify-between gap-6 bg-white text-black p-8 rounded-lg">
      <div
        style={{
          height: containerHeight,
        }}
      >
        <div className="relative w-1/2" ref={headlineTextContainerRef}>
          <h3 className="text-xl text-purple-700 font-bold mb-3">{cardTitle.toUpperCase()}</h3>
          <h2 className="text-3xl font-bold leading-7">{description}</h2>
          <HeadlinerBox ref={headlinerImgContainerRef} scaleFactor={1.5} />
        </div>
      </div>

      <div
        className="grid gap-x-10 gap-y-3"
        style={{
          gridTemplateColumns: `repeat(${nrColumns}, minmax(0, 1fr))`,
          gridTemplateRows: 'repeat(2, auto)',
        }}
      >
        {titleDivs}
        {contentDivs}
      </div>
    </div>
  );
}

ConceptCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tabledConcepts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

export default ConceptCard;
