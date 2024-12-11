import React, { useState } from "react";

function CreateArea(props) {
  const emptyInput = {
    title: "",
    content: ""
  };
  const [input, setInput] = useState(emptyInput);
  console.log(emptyInput);

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} placeholder="Title" value={input.title} />
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={input.content} />
        <button onClick={(event) => {
          props.addNote(input);
          setInput(emptyInput);
          event.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
