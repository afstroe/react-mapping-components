import React from "react";
import emojipedia from "../emojipedia";
import Dictionary from "./dictionary";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <Dictionary definition={emojipedia} />
    </div>
  );
}

export default App;
