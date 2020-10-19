import React from "react";
import PropTypes from "prop-types";

function ConceptCard(props) {
  const nrColumns = props.tabledConcepts.length;
  const titleDivs = props.tabledConcepts.map(({title}, i) => {
    return <div
      className={"font-bold text-lg"}
      key={i}
    >
      {title}
    </div>
  });
  const contentDivs = props.tabledConcepts.map(({content}, i) => {
    return <div
      key={i}
    >
      {content}
    </div>
  });

  return (
    <div
      className={"w-huge h-96 flex flex-col bg-white text-black p-8 rounded-lg"}
    >
      <div
        className={"w-1/2 flex-grow"}
      >
        <h3
          className={"text-xl text-purple-700 font-bold mb-3"}
        >
          {props.title.toUpperCase()}
        </h3>
        <h2
          className={"text-3xl font-bold leading-7"}
        >
          {props.description}
        </h2>
      </div>

      <div
        className={"grid gap-x-10 gap-y-3"}
        style={{
          gridTemplateColumns: `repeat(${nrColumns}, minmax(0, 1fr))`,
          gridTemplateRows: "repeat(2, auto)",
        }}
      >
        {titleDivs}
        {contentDivs}
      </div>
    </div>
  )
}

ConceptCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tabledConcepts: PropTypes.array,
}

export default ConceptCard;

