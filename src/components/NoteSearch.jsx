import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleInputChange = (event) => {
    const searchText = event.target.value;
    this.setState({ searchText });
    this.props.onSearch(searchText);
  };

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Search Notes..."
          value={this.state.searchText}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NoteSearch;
