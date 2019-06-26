import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Articles from "./Components/Articles/Articles";
import SingleArticle from "./Components/Articles/SingleArticle";
import Topics from "./Components/Topics/Topics";
import User from "./Components/User/User";
import Comments from "./Components/Comments/Comments";
import SingleTopic from "./Components/Topics/SingleTopic";
class App extends React.Component {
  state = {
    topics: null,
    isLogin: null,
    votes: 0,
    user: [],
    username: []
  };
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Router>
          <Articles path="/" />
          <SingleArticle path="/:article_id" />

          <Topics path="/topics" topics={this.state.topics} />
          <SingleTopic path="/topics/:topic" />

          <User path="/user/:username" user={this.state.user} />
          {/* <UserArticles path="/author/:user" /> */}

          <Comments path="/:article_id/comments" />
        </Router>
      </div>
    );
  }
}
export default App;
