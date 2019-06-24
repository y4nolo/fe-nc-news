import React from "react";
import { Link } from "@reach/router";

function ArticlesList({ articles }) {
  return (
    <div>
      {articles.map(article => {
        return (
          <div key={articles.article_id} className="listItem">
            <Link to={`/${article.article_id}`}>
              <h2> {article.title}</h2>
            </Link>
            Topic: {article.topic}
            Author:
            <Link to={"/{user}"}>{article.author}</Link>
            Created: {article.created_at} Comments: {article.comment_count}{" "}
            Votes: {article.votes}
            <br />
            <br />
            <button onClick={() => this.handleVote(1)}> 🔺 </button>
            <button onClick={() => this.handleVote(-1)}> 🔻 </button>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );

  /*handleVote =(direction) => {
    patchArticle (this.props.article_id, 1 ).then(updatedArticle =>{
    this.setState((prevState) => {
    return {votes: prevState.votes + direction
    })}
    })}*/
}
export default ArticlesList;
