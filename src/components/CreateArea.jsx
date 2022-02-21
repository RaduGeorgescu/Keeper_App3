import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function HandleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    console.log(note.title);
    console.log(note.content);
  }

  function newPost(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    console.log("I got clicked, this is my post");
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={HandleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={HandleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={newPost}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
