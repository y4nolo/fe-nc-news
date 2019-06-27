import React, { Component } from "react";
import * as api from "../Api";
import CommentsList from "./CommentsList";
import PostComments from "./PostComments";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    console.log(article_id, this.state);
    return (
      <div>
        <h2> Comments</h2>
        <CommentsList comments={comments} />
        <PostComments article_id={article_id} />
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
}

export default Comments;
