import React from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../Api";

class Articles extends React.Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    console.log(api);
    return (
      <div className="articles ">
        <h2>Articles</h2>
        <div className="menu">
          Sort by:
          <button> date created </button>
          <button> comment count</button>
          <button> votes </button>
          {/* https://www.npmjs.com/package/react-dropdown */}
        </div>
        <ArticlesList articles={articles} />
      </div>
    );
  }
  componentDidMount() {
    api.getAllArticles().then(articles => {
      this.setState({ articles });
    });
  }
}

export default Articles;
