import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import UnarchiveButton from "./UnarchiveButton";

function ArchieveItem({ title, createdAt, body, id, onDelete, unArchive }) {
  return (
    <div className="note-item" key={id}>
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <DeleteButton id={id} onDelete={onDelete} />
      <UnarchiveButton id={id} unArchive={unArchive} />
    </div>
  );
}

export default ArchieveItem;
