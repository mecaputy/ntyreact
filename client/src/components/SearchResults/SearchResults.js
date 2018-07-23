import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
  <ul className="list-group search-results">
    {props.results.map(result => (
      <li key={result} className="list-group-item">
      </li>
    ))}
  </ul>
  //add in card for results? buttons to save?
);

export default SearchResults;
