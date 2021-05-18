import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ term: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    console.log(evt.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit.bind(this)} className="ui form">
          <div className="field">
            <label>Image Search</label>
          </div>
          <input
            type="text"
            value={this.state.term}
            onChange={this.handleChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
