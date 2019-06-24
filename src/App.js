import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Articles from "./Components/Articles/Articles";
import SingleArticle from "./Components/Articles/SingleArticle";
import Topics from "./Components/Topics/Topics";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <Articles path="/" />
        <SingleArticle path="/:article_id" />
        <Topics path="/topics" />
      </Router>
    </div>
  );
}

export default App;
