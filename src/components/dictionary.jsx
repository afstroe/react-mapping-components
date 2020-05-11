import React from "react";
import { createDictionaryEntry } from "./dictionaryEntry";

function Dictionary(props) {
  return (
    <dl className="dictionary">
      {props.definition.map(createDictionaryEntry)}
    </dl>
  );
}

export default Dictionary;
