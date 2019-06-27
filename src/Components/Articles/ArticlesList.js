import React from "react";
import { Link } from "@reach/router";
import VoteArticle from "./VoteArticle";

function ArticlesList({ articles }) {
  return (
    <div class="6u 12u$(medium)">
      {articles.map(article => {
        return (
          <div key={articles.article_id} className="listItem">
            <Link to={`/${article.article_id}`}>
              <h3> {article.title}</h3>
            </Link>
            Topic: {article.topic}
            Author:
            <Link to={`/user/${article.author}`}>{article.author}</Link>
            Created: {article.created_at}
            Comments: {article.comment_count} Votes: {article.votes}
            <br />
            <br />
            <div>
              <VoteArticle
                article_id={article.article_id}
                votes={article.votes}
              />
            </div>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );

  /*handleVote =(increment) => {
    patchArticle (this.props.article_id, 1 ).then(updatedArticle =>{
    this.setState((prevState) => {
    return {votes: prevState.votes + increment
    })}
    })}*/
}
export default ArticlesList;
