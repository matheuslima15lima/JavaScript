import React from "react";

import "./Toogle.css"

const Toggle = ({ manipulationFunction = null, toggleActive = true }) => {
  return (
    <>
      {/* <input type="checkbox" id="switch-check" className="toggle__switch-check" /> */}

      <label
        className={`toggle ${toggleActive ? "toggle--active" : ""}`}
        htmlFor="switch-check"
        onClick={manipulationFunction}
        key={Math.random()}
      >
        <div
          className={`toggle___switch ${
            toggleActive ? "toggle___switch--active" : ""
          }`}
        ></div>
      </label>
    </>
  );
};

export default Toggle;