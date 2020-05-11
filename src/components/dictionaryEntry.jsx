import React from "react";

function DictionaryEntry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

function createDictionaryEntry(dictionaryEntry) {
  return (
    <DictionaryEntry
      key={dictionaryEntry.id}
      emoji={dictionaryEntry.emoji}
      title={dictionaryEntry.title}
      description={dictionaryEntry.meaning}
    />
  );
}

export default DictionaryEntry;
export { createDictionaryEntry };
