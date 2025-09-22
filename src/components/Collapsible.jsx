import "../styles/Collapsible.css";

import React, { useState, useRef, useEffect } from "react";

function Collapsible({ title, children, itemAdded, setItemAdded }) {
  const [opened, setOpened] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    if (!contentRef.current) return;

    const el = contentRef.current;

    const resizeObserver = new ResizeObserver(() => {
      setContentHeight(el.scrollHeight);
    });

    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, []);

  function toggle() {
    if (setItemAdded) setItemAdded(false);
    setOpened((prev) => !prev);
  }

  const isOpen = opened || itemAdded;

  return (
    <div className="collapsible">
      <button
        className={`collapsible-toggle ${isOpen ? "active" : ""}`}
        onClick={toggle}
      >
        {title}
      </button>

      <div
        className="collapsible-content-parent"
        style={{
          height: isOpen ? `${contentHeight}px` : "0px",
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div ref={contentRef} className="collapsible-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapsible;
