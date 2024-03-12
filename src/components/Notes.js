import React from 'react';
import Note from './Note';
import './Notes.css';

const Notes = ({ noteIds }) => {
  return (
    <div>
      <h1>Notes</h1>
      {noteIds.map(id => <Note key={id} noteId={id} />)}
    </div>
  );
};

export default Notes;
