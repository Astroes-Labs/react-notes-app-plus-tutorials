import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hi There");
  const [isMouseOver, setMouseOver] = useState(false);
  function handleClick() {
    setHeadingText("Submitted");
  }
  function handleMouseOver(event) {
    setMouseOver(true);
  }
  function handleMouseOut(event) {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
        style={{backgroundColor: isMouseOver ? "black" : "white"}}
        onClick={handleClick} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        
        Submit</button>
    </div>
  );
}

export default App;
