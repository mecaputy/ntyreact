import axios from "axios";

export default {
    
    apiArticles: function(searchTerm, startYear, endYear) {
        let APIKey = 'db0f7161dc944fc099e9228621e46695';
        let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKey}&q=${searchTerm}&begin_date=${startYear}0101&end_date=${endYear}1231&fl=web_url,headline,pub_date`;


        return axios.get(url)
        //     .then(res => {
        //         return res.data.response.docs;
        //     });


    },

    getArticles: function() {
        return axios.get("/api/articles")
    },
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    }
};