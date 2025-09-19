import "../styles/Collapsible.css";

import React, { useState, useRef } from "react";

function Collapsible(props) {
  const [opened, setOpened] = useState(false);
  const contentRef = useRef();
  function toggle() {
    setOpened((prevOpened) => !prevOpened);
  }

  return (
    <div>
      <button
        className={opened ? "collapsible-toggle active" : "collapsible-toggle"}
        onClick={toggle}
      >
        {props.title}
      </button>
      <div
        className="collapsible-content-parent"
        ref={contentRef}
        style={
          opened
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="collapsible-content"> {props.children} </div>
      </div>
    </div>
  );
}
export default Collapsible;
