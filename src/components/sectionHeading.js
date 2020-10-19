import React from "react";
import PropTypes from "prop-types";

function SectionHeading(props) {
  const words = props.heading.split(" ");

  return (
    <div
      className={"flex flex-col items-center text-7xl font-bold"}
    >
      {words.map((word, i) => {
        return (
          <p
            key={i}
            className={`${i>0 ? "-mt-8" : ""}`}
          >
            {word}
          </p>
        )
      })}
    </div>
  )
}

SectionHeading.propTypes = {
  heading: PropTypes.string,
}

export default SectionHeading;