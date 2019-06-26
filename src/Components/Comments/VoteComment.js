import React, { Component } from "react";
import * as api from "../Api";

class VoteComment extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes, comment_id } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <p> votes:{votes}</p>
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
    const { comment_id } = this.props;
    console.log(comment_id, this.props);
    api
      .modifyVotesforComments(comment_id, increment)
      .catch(err => {
        console.log(err);
        this.setState(({ voteChange }) => ({
          voteChange: voteChange - increment
        }));
      })
      .then(updatedArticle => {
        this.setState(prevState => {
          return {
            votes: prevState.votes + increment
          };
        });
      });
  };

  voteChange = vote => {
    this.setState({
      voteChange: vote
    });
  };
}

export default VoteComment;
