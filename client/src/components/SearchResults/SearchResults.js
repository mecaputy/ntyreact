import React, { Component } from "react";
import "./SearchResults.css";

class SearchResults extends Component {
  state = {
    results: []
  }
render() {
    return(
  <div className = "card" >
        <div className="card-header">Search Results</div>
        <div className="card-body">
          <ul className="list-group search-results">
            {this.props.results.map(result => (
              <li key={result} className="list-group-item">
              </li>
            ))}
          </ul>
        </div>
  </div>
)
}
  //add in card for results? buttons to save?
};

export default SearchResults;
