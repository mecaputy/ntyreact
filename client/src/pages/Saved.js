import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import SearchResults from "../components/SearchResults/SearchResults";

class Saved extends Component {

   state = {
       savedArticles: []
   };
   
   componentDidMount() {
       //display saved articles
   }

   render() {
       return (
           <div>
               <Jumbotron />
               <SearchResults

               />
            </div>
       )
   }

}

export default Saved