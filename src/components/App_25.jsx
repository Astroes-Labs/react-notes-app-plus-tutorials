import React from "react";
import Entry from "./Entry_23";
import emojipedia from "../emojipedia_23";





function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emojiTerm =>(
        <Entry
          key={emojiTerm.id}
          emoji={emojiTerm.emoji}
          name={emojiTerm.name}
          description={emojiTerm.meaning}
        />
      ))}</dl>
    </div>
  );
}

export default App;
