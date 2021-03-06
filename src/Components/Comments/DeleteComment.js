import React, { Component } from "react";
import * as api from "../Api";
class DeleteComment extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.handleDelete()}>Delete Comment </button>
      </div>
    );
  }
  handleDelete = event => {
    const { comment_id, article_id, displayRefreshedComments } = this.props;
    console.log(displayRefreshedComments);
    api
      .deleteComment(comment_id)
      .then(() => {
        console.log(comment_id, "commentiddeletess");
        displayRefreshedComments(comment_id);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default DeleteComment;
