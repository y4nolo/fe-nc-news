import React, { Component } from "react";
import * as api from "../Api";
import CommentsList from "./CommentsList";
import PostComments from "./PostComments";
import { arrayExpression } from "@babel/types";

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
        <CommentsList
          comments={comments}
          displayRefreshedComments={this.displayRefreshedComments}
        />
        <PostComments
          article_id={article_id}
          displayNewComment={this.displayNewComment}
        />
        <div />
      </div>
    );
  }

  displayNewComment = comment => {
    this.setState(prevState => {
      return { comments: [...prevState.comments, comment] };
    });
  };
  //if commentID matched a comment being filtered then return comments to new array
  displayRefreshedComments = comment_id => {
    const { comments } = this.state;
    this.setState(prevState => {
      return comments.filter(comments => {
        if (comments.comments_id !== comment_id) {
          return { comments: comments };
        }
      });
    });
  };

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
