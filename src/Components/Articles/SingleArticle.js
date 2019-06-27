import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Api";
import Comments from "../Comments/Comments";

class SingleArticle extends Component {
  state = {
    article: []
  };

  render() {
    const { article, article_id } = this.state;
    return this.state.article ? (
      <div key={article.article_id} class="6u 12u$(medium)">
        <h3>{article.title}</h3>
        <p>{article.body} </p>
        Topic: {article.topic}
        <Link to={`/user/${article.author}`}>Author: {article.author}</Link>
        Created: {article.created_at}
        <Link to={`/${article.article_id}/comments/`}>
          {" "}
          <p article_id={article.article_id}>
            Comments: {article.comment_count}
          </p>
        </Link>
        Votes: {article.votes}
        <div>
          <button onClick={() => this.handleVote(1)}> 🔺 </button>
          <button onClick={() => this.handleVote(-1)}> 🔻 </button>
        </div>
        <Comments article_id={article.article_id} />
        <br />
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
