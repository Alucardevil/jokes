import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Note = ({ noteId }) => {
  const [note, setNote] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/notes/${noteId}`)
      .then(response => {
        setNote(response.data);
      })
      .catch(error => console.error('There was an error fetching the note:', error));
  }, [noteId]);

  if (!note) return <p>Loading...</p>;

  return (
    <div>
      <h1>Note</h1>
      <p style={{ fontWeight: note.important ? 'bold' : 'normal' }}>
        {note.content}
      </p>
    </div>
  );
};

export default Note;
