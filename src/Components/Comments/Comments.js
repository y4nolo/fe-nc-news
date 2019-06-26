import React, { Component } from "react";
import * as api from "../Api";
import CommentsList from "./CommentsList";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <div>
        <h2> Comments</h2>
        <CommentsList comments={comments} />
        <div />
      </div>
    );
  }

  componentDidMount() {
    api
      .getCommentByArticleId(this.props.article_id)
      .then(comments => {
        console.log(comments);
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
