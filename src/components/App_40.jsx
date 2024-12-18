import React, { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem() {
    setItems((prevItems)=>{
      return [...prevItems, inputText]
    });
    setInputText("");
    
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
        <button>
          <span onClick={addItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
