import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addnote(note) {
    setNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addnote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelete={deleteNote}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      {/* <Note key={1} title="a title" content="a content" /> */}
      <Footer />
    </div>
  );
}

export default App;
