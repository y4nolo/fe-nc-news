import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import * as api from "../Api";

class SingleArticle extends Component {
  state = {
    article: []
  };

  render() {
    const { article } = this.state;
    return this.state.article ? (
      <div>
        <h2>{article.title}</h2>
        <p>{article.body} </p>
        Topic: {article.topic} Author: {article.author} Created:{" "}
        {article.created_at} Comments: {article.comment_count} Votes:{" "}
        {article.votes}
        <br />
        <button> 🔺 </button>
        <button> 🔻 </button>
      </div>
    ) : null;
  }
  componentDidMount() {
    const { article_id } = this.props;
    api.getSingleArticle().then(article => {
      this.setState({ article: article });
    });
  }
}

export default SingleArticle;
