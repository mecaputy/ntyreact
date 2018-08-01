import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm/SearchForm";
import Jumbotron from "../components/Jumbotron/Jumbotron";
// import APIKey from "../utils/API";
// import other components for page

class Home extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        this.getArticles();
    };

    getArticles = () => {
        // axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?" + APIKey).then((res) => {
        //     this.setState({
        //         article: res.data.results
        //     });
        // });
        axios.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
              'api-key': "db0f7161dc944fc099e9228621e46695",
              'q': "china",
              'begin_date': "20001212",
              'end_date': "20161212"
            },
          }, function(err, response, body) {
              if (err) throw err
            body = JSON.parse(body);
            console.log(body);
          })
    };
    saveArticle = (article) => {
        axios.post("/saved", {

        })
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        //add code to handle submit
    };

    render() {
        return (
            <div className="container">
                <Jumbotron />
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

export default Home;