import React, { Component } from "react";
import "./SearchForm.css";
import SearchBtn from "../SearchBtn";

class SearchForm extends Component {
    state = {
        searchTerm: "",
        startYear: "",
        endYear: ""
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">Search Parameters</div>
                    <div className="form-group">
                        <label>Search Term:</label>
                        <input
                            value={this.searchTerm}
                            onChange={this.handleInputChange}
                            type="text"
                            //   shoudl the type be "search"???
                            className="form-control"
                            id="search-term"
                        />
                    </div>
                    {/* add in a dropdown for number of records */}
                    <div className="form-group">
                        <label>Start Year (Optional):</label>
                        <input
                            value={this.startYear}
                            onChange={this.handleInputChange}
                            type="text"
                            className="form-control"
                            id="start-year"
                        />
                    </div>
                    <div className="form-group">
                        <label>End Year (Optional):</label>
                        <input
                            value={this.endYear}
                            onChange={this.handleInputChange}
                            type="text"
                            className="form-control"
                            id="end-year"
                        />
                    </div>
                    <SearchBtn
                        type="submit"
                        onClick={this.handleFormSubmit}
                        className="btn btn-success"
                    />
                    <br />

                </div>
            </div>
        )
    }
}

export default SearchForm;

