import React, { Component } from "react";

class PostComments extends Component {
  render() {
    return (
      <div>
        <form className="postcomment">
          <p>Post comment as USER:</p>
          <textarea
            className="commentText"
            cols="60"
            rows="10"
            placeholder="Say Something..."
          />
          <br />
          <button>Comment</button>
        </form>
      </div>
    );
  }
}

export default PostComments;
