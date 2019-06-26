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
  handleDelete = () => {
    const { comment_id } = this.props;
    api
      .deleteComment(comment_id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default DeleteComment;
