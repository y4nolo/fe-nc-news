import React, { Component } from "react";
import { Link } from "@reach/router";
import PostComments from "../Comments/PostComments";
import * as api from "../Api";

class SingleArticle extends Component {
  state = {
    article: []
  };

  render() {
    const { article } = this.state;
    return this.state.article ? (
      <div key={article.article_id}>
        <h2>{article.title}</h2>
        <p>{article.body} </p>
        Topic: {article.topic}
        <Link to={`/user/${article.author}`}>Author: {article.author}</Link>
        Created: {article.created_at}
        <Link to={`/${article.article_id}/comments/`}>
          Comments: {article.comment_count}
        </Link>
        Votes: {article.votes}
        <div>
          <button onClick={() => this.handleVote(1)}> 🔺 </button>
          <button onClick={() => this.handleVote(-1)}> 🔻 </button>
        </div>
        <br />
        <PostComments />
      </div>
    ) : null;
  }
  componentDidMount() {
    const { article_id } = this.props;
    api.getSingleArticle(article_id).then(article => {
      this.setState({ article: article });
    });
  }
}

export default SingleArticle;
