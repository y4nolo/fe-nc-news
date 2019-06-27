import React, { Component } from "react";
import * as api from "../Api";
import { navigate } from "@reach/router";
class DeleteComment extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.handleDelete()}>Delete Comment </button>
      </div>
    );
  }
  handleDelete = event => {
    const { comment_id, article_id } = this.props;
    api
      .deleteComment(comment_id)
      .then(comments => {
        this.setState({ comments });
      })
      .then(comment_id => {
        this.props.displayRefreshedComments(comment_id);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default DeleteComment;
