import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state);
    this.setState({
      term: "",
    });
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
          </div>
          <input
            type="text"
            name="term"
            value={this.state.term}
            onChange={this.handleChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
