import React from "react";

import Welcome from "./components/Welcome";
import Quotes from "./components/Quotes";
import Write from "./components/Write";

function App() {
  return (
    <React.Fragment>
      <Welcome />
      <Quotes />
      <Write />
    </React.Fragment>
  );
}

export default App;
