import React, { Component } from "react";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <div>
        <p>comments</p>
      </div>
    );
  }
}

export default Comments;
