import React from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../Api";
import { Link } from "@reach/router";

class Articles extends React.Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="articles ">
        <h2>Articles</h2>
        <div className="menu">
          Sort by:
          <Link to={`/${articles.created_at}`}>
            <button> date created </button>
          </Link>
          <Link to={`/${articles.comment_count}`}>
            <button> comment count</button>
          </Link>
          <Link to={`/${articles.votes}`}>
            <button> votes </button>
          </Link>
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
