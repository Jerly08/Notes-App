import React from "react";
import NoteList from "./NoteList";
import ArchiveList from "./ArchiveList";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import NoteSearch from "./NoteSearch";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchText: "",
      archivedNotes: [],
    };
  }

  onDeleteHandler = (id, isArchived) => {
    if (isArchived) {
      const archivedNotes = this.state.archivedNotes.filter(
        (note) => note.id !== id
      );
      this.setState({ archivedNotes });
    } else {
      const notes = this.state.notes.filter((note) => note.id !== id);
      this.setState({ notes });
    }
  };

  onAddNoteHandler = ({ title, body }) => {
    const createdAt = new Date().toLocaleString("id-ID");
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: createdAt,
          },
        ],
      };
    });
  };

  handleSearch = (searchText) => {
    this.setState({ searchText });
  };

  onArchiveHandler = (id) => {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);
    const archivedNote = this.state.notes.find((note) => note.id === id);

    this.setState((prevState) => ({
      notes: updatedNotes,
      archivedNotes: [
        ...prevState.archivedNotes,
        { ...archivedNote, archived: true },
      ],
    }));
  };

  onUnarchiveHandler = (id) => {
    const updatedArchivedNotes = this.state.archivedNotes.filter(
      (note) => note.id !== id
    );
    const unarchivedNote = this.state.archivedNotes.find(
      (note) => note.id === id
    );

    this.setState((prevState) => ({
      archivedNotes: updatedArchivedNotes,
      notes: [...prevState.notes, { ...unarchivedNote, archived: false }],
    }));
  };

  render() {
    const { notes, searchText, archivedNotes } = this.state;
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchText.toLowerCase())
    );
    const filteredArchivedNotes = archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>NotesApp</h1>
          <NoteSearch onSearch={this.handleSearch} />
        </div>
        <div className="note-input">
          <img src="/images/Photo 4.jpg" alt="Photo"></img>
          <h6>Welcome back! Jerly </h6>
          <h2>Create Note</h2>
          <NoteInput addNote={this.onAddNoteHandler} />
        </div>
        <div className="note-app__body">
          <h2>Notes</h2>
          {filteredNotes.length > 0 ? (
            <NoteList
              notes={filteredNotes}
              onDelete={(id) => this.onDeleteHandler(id, false)}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <p className="centered-text">No notes found.</p>
          )}
          <h2>Archived Notes</h2>
          {filteredArchivedNotes.length > 0 ? (
            <ArchiveList
              archivedNotes={filteredArchivedNotes}
              onDelete={(id) => this.onDeleteHandler(id, true)}
              unArchive={this.onUnarchiveHandler}
            />
          ) : (
            <p className="centered-text">No archived notes found.</p>
          )}
        </div>
      </div>
    );
  }
}

export default NoteApp;
