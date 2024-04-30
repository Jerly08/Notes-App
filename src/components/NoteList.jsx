import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          title={note.title}
          createdAt={note.createdAt}
          body={note.body}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
}

export default NoteList;
