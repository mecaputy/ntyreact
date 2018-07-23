import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";
// import other components for page

class Home extends Component {
    state = {
        searchTerm: ""
    }

    componentDidMount() {
        API.getArticles()
            .then(res => this.setstate({}))
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();

    };

    render() {
        return (
            <div>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleImputChange={this.handleInputChange}
                />
                

                {/*
            Search Parameters
            serach term
            number of records?
            start year
            end year?
            This component should be able to query the NYT API for articles. It displays the results from the API search in a rendered list that displays the article title, publication date, and allows the user to visit an article's url or save the article to the MongoDB. */}
            </div>
        );
    }

}