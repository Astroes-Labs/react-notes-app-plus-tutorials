import React from "react";
import Header from "./Header_26";
import Footer from "./Footer_26";
import Note from "./Note_26";
import notes from "../notes_26";


const allNotes = notes.map(note => (
    <Note
        key={note.key}
        header={note.header}
        content={note.content}
    />
));

function App() {
    return (
        <div>
            <Header />
            {allNotes}
            <Footer />
        </div>
    );
}

export default App;