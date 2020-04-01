import React, { useState, useEffect, createRef, useRef } from "react";
import classnames from "classnames";
import OriDomi from "oridomi";

function Write(props) {
  const [text, setText] = useState("");
  const [isHidden, hideInput] = useState(false);
  const foldedRef = createRef();
  const folded = useRef();

  useEffect(() => {
    folded.current = new OriDomi(foldedRef.current, {
      vPanels: 5,
      hPanels: 5,
      touchEnabled: false
    });
  }, []);

  function handleThrowAway() {
    // hide text area and fold
    hideInput(true);
    folded.current.reveal(58, () => {
      folded.current.foldUp();
    });
  }

  return (
    <section className="write">
      <h1>Write It Down</h1>

      <div className="textarea-wrapper">
        <div className="textarea pseudo-textarea" ref={foldedRef}>
          <p>{text}</p>
        </div>

        <textarea
          className={classnames("textarea", { hidden: isHidden })}
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>

      <button onClick={handleThrowAway}>...and throw it all away</button>
    </section>
  );
}

export default Write;
