import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.search = this.search.bind(this);
  }

  async search(term) {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar search={this.search} />
        Found {this.state.images.length} images
      </div>
    );
  }
}

export default App;
