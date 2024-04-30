import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      characterCount: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;
    const characterCount = title.length;
    const remainingCharacters = 50 - characterCount;
    this.setState({
      title,
      characterCount: remainingCharacters,
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler = async (event) => {
    event.preventDefault();
    try {
      await this.props.addNote(this.state);
      this.closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  addNote = (note) => {
    return new Promise((resolve, reject) => {
      api
        .post("/notes", note)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      title: "",
      body: "",
      isModalOpen: false,
    });
  }

  onAddNoteHandler = async ({ title, body }, callback) => {
    await api.post("/notes", { title, body });
    if (callback && typeof callback === "function") {
      callback();
    }
  };

  render() {
    return (
      <>
        <button className="custom-button" onClick={this.openModal}>
          <h3>+</h3>
        </button>
        {this.state.isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>
                &times;
              </span>
              <form onSubmit={this.onSubmitEventHandler}>
                <input
                  required
                  type="text"
                  placeholder="Ini adalah judul..."
                  value={this.state.title}
                  onChange={this.onTitleChangeEventHandler}
                />
                <div className="character-counter">
                  Sisa Karakter:{this.state.characterCount}
                </div>

                <textarea
                  required
                  cols="30"
                  rows="10"
                  placeholder="Tuliskan catatanmu disini...."
                  value={this.state.body}
                  onChange={this.onBodyChangeEventHandler}
                />
                <button onSubmit={this.onSubmitEventHandler} type="submit">
                  Buat
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default NoteInput;
