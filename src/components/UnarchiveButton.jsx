import React from "react";

function UnarchiveButton({ id, unArchive }) {
  return (
    <button className="note-item__archive" onClick={() => unArchive(id)}>
      <h3>Unarchieve</h3>
    </button>
  );
}

export default UnarchiveButton;
