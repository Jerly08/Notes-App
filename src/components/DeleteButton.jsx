import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="note-item__delete" onClick={() => onDelete(id)}>
      <h3>Delete</h3>
    </button>
  );
}

export default DeleteButton;
