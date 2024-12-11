import React, { useState } from "react";
import Header from "./Header_43";
import Footer from "./Footer_43";
import Note from "./Note_43";
import CreateArea from "./CreateArea_43";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(input) {
    setNotes((prevValue) => {
      return [...prevValue, input]
    });
  }

  function deleteNote(noteId) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== noteId;
      });
    });

  }

  return (
    <div>
      <Header />
      <CreateArea
        addNote={addNote}

      />
      {
        notes.map((note, index) => {
          return <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}

          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
