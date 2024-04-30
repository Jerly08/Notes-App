import React from "react";

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="note-item__archive" onClick={() => onArchive(id)}>
      <h3>Archieve</h3>
    </button>
  );
}

export default ArchiveButton;
