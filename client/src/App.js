import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
// import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";

const App = () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
      </Wrapper>
      </div>
      </Router>
)

export default App;
