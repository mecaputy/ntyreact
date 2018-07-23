import React from "react";
import "./SearchForm.css";

class SearchForm extends Component {
    state = {
        searchTerm: "",
        startYear: "",
        endYear: ""
    }

    render() {
        return (
            <div>
                <form className="search">
                    <div clasName="card-header">Search Parameters</div>
                    <div className="form-group">
                        <label>Search Term:</label>
                        <input
                            value={props.searchTerm}
                            onChange={props.handleInputChange}
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
                            value={props.startYear}
                            onChange={props.handleInputChange}
                            type="text"
                            className="form-control"
                            id="start-year"
                        />
                    </div>
                    <div className="form-group">
                        <label>End Year (Optional):</label>
                        <input
                            value={props.endYear}
                            onChange={props.handleInputChange}
                            type="text"
                            className="form-control"
                            id="end-year"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

