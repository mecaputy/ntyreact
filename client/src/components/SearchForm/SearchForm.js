import React, { Component } from "react";
import "./SearchForm.css";
import API from "../../utils/API";
// import SearchBtn from "../SearchBtn";
import SearchResults from "../SearchResults";

class SearchForm extends Component {
    state = {
        results: [],
        searchTerm: "",
        startYear: "",
        endYear: "",
        articles: []
    }

    loadArticles = () => {
        API.getArticles()
        .then(res =>
        this.setState({ articles: res.data })
       )
       .catch(err => console.log(err));
    }
    handleFormSubmit = event => {
        event.preventDefault();
        API.apiArticles(this.state.searchTerm, this.state.startYear, this.state.endYear)
        .then(res => {
            this.setState({ results: res, searchTerm: "", startYear: "", endYear: ""});
        })
        .catch(err => console.log(err));
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
                    <button
                        type="submit"
                        onClick={this.handleFormSubmit}
                        className="btn btn-default btn-primary">Submit
                    </button>
                    <br />
                </div>
                <br />
                <div>
                <SearchResults 
                    results={this.state.results}
                />
                </div>

            </div>
        )
    }
}

export default SearchForm;

