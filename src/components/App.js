import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar search={this.search} />
      </div>
    );
  }
}

export default App;
