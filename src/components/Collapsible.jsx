import "../styles/Collapsible.css";

import React, { useState, useRef } from "react";

function Collapsible(props) {
  const [opened, setOpened] = useState(false);
  const contentRef = useRef();
  function toggle() {
    if (props.setItemAdded != undefined) {
      props.setItemAdded(false);
    }
    setOpened((prevOpened) => !prevOpened);
  }

  return (
    <div>
      <button
        className={
          opened || props.itemAdded
            ? "collapsible-toggle active"
            : "collapsible-toggle"
        }
        onClick={toggle}
      >
        {props.title}
      </button>
      <div
        className="collapsible-content-parent"
        ref={contentRef}
        style={
          opened || props.itemAdded
            ? {
                animation: "appearDown 0.5s ease-in-out",
                height: contentRef.current.scrollHeight + "px",
              }
            : { animation: "disappearUp 0.5s ease-in-out", height: "0px" }
        }
      >
        <div className="collapsible-content"> {props.children} </div>
      </div>
    </div>
  );
}
export default Collapsible;
