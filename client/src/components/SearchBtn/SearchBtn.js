import React from "react";
import "./SearchBtn.css";

const SearchBtn = props => (
  <button
    onClick={props.onClick}
    className={`search-btn ${props["type"]}`}
    {...props}
  />
);

export default SearchBtn;
