import React, { Component } from "react";
import * as api from "../Api";
import { Link } from "@reach/router";
import CommentsList from "./CommentsList";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments, comment_id, article_id, votes } = this.state;
    return (
      <div>
        <h2> Comments</h2>
        <CommentsList
          comments={comments}
          comment_id={comment_id}
          votes={votes}
          article_id={article_id}
        />
        <div />
      </div>
    );
  }

  componentDidMount() {
    api
      .getCommentByArticleId(this.props.article_id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProp, prevState, increment) {
    if (prevState.votes !== this.state.votes) {
      this.setState({ votes: prevState.votes + increment });
    }
  }
}

export default Comments;
