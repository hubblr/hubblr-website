import React from "react";
import PropTypes from "prop-types";
import DesignAdvertisementHeaderPill from "./designAdvertisementHeaderPill";

function DesignAdvertisementHeader(props) {
  return (
    <div
      className={"relative flex justify-end gap-6"}
    >
      {
        props.targetCustomers.map((targetName, i) => {
          return (
            <DesignAdvertisementHeaderPill
              key={i}
            >
              {targetName}
            </DesignAdvertisementHeaderPill>
          )
        })
      }
      <div
        className={"absolute -z-10 bottom-1/2 flex gap-4 " +
          "w-full"}
      >
        <div
          className={"-mb-10px text-2xl font-extrabold flex flex-col items-end"}
        >
          <p>
            designed
          </p>
          <p>
            for
          </p>
        </div>
        <div
          className={"flex-grow border-b-4 border-white"}
        />
      </div>
    </div>
  )
}

DesignAdvertisementHeader.propTypes = {
  targetCustomers: PropTypes.arrayOf(PropTypes.string),
}

export default DesignAdvertisementHeader;