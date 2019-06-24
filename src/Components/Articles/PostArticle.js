import React, { Component } from "react";

class PostArticle extends Component {
  render() {
    return (
      <div>
        <form>
          <p> Post Article as USER:</p>
          <textarea
            className="articleText"
            cols="60"
            rows="10"
            placeholder="Say Something..."
          />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default PostArticle;
