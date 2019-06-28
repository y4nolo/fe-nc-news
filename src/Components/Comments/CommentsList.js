import React from "react";
import { Link } from "@reach/router";
import DeleteComment from "./DeleteComment";
import VoteComment from "./VoteComment";

function CommentsList({ comments, displayRefreshedComments }) {
  return comments.map(comment => {
    return (
      <div key={comment.comment_id} className="listItem">
        <p>Comment:{comment.body} </p>

        <Link to={`/user/${comment.author}`}>Author: {comment.author}</Link>

        <p>Posted at: {comment.created_at}</p>
        <br />
        <DeleteComment
          comment_id={comment.comment_id}
          displayRefreshedComments={displayRefreshedComments}
        />
        <VoteComment comment_id={comment.comment_id} votes={comment.votes} />
      </div>
    );
  });
}

export default CommentsList;
