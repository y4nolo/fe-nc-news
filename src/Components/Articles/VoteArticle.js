import React, { Component } from "react";
import * as api from "../Api";

class VoteArticle extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes, article_id } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <p> votes:{votes + voteChange}</p>
        <button onClick={() => this.handleVote(1)} disabled={voteChange > 0}>
          🔺
        </button>
        <button onClick={() => this.handleVote(-1)} disabled={voteChange < 0}>
          🔻
        </button>
      </div>
    );
  }
  handleVote = increment => {
    const { article_id } = this.props;
    console.log(article_id, this.props);
    api
      .modifyVotesforArticles(article_id, increment)
      .then(updatedArticle => {
        this.setState(prevState => {
          return {
            votes: prevState.votes + increment
          };
        });
      })
      .catch(err => {
        console.log(err);
        this.setState(({ voteChange }) => ({
          voteChange: voteChange - increment
        }));
      });
  };
}

export default VoteArticle;
