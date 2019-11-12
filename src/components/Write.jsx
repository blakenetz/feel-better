import React, { useState } from "react";

function Write(props) {
  const [text, setText] = useState("");

  return (
    <section className="write">
      <h1>Write It Down</h1>
      <textarea value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setText("")}>...and throw it all away</button>
    </section>
  );
}

export default Write;
