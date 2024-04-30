import React from "react";
import ArchieveItem from "./ArchieveItem";

function ArchiveList({ archivedNotes, onDelete, unArchive }) {
  return (
    <div className="notes-list">
      {archivedNotes.map((note) => (
        <div key={note.id} className="archived-note">
          <ArchieveItem
            id={note.id}
            title={note.title}
            createdAt={note.createdAt}
            body={note.body}
            onDelete={onDelete}
            unArchive={unArchive}
          />
        </div>
      ))}
    </div>
  );
}

export default ArchiveList;
