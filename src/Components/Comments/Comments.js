import React, { Component } from "react";
import * as api from "../Api";
import { Link } from "@reach/router";
import DeleteComment from "./DeleteComment";
import VoteComment from "./VoteComment";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments, article } = this.state;

    return (
      <div>
        {comments.map(comment => {
          return (
            <div key={comment.comment_id} className="listItem">
              <p>Comment:{comment.body} </p>

              <Link to={`/user/${comment.author}`}>
                Author: {comment.author}
              </Link>

              <p>Vote: {comment.votes}</p>
              <p>Posted at: {comment.created_at}</p>
              <VoteComment />
              <br />
              <DeleteComment />
            </div>
          );
        })}
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
}

export default Comments;
