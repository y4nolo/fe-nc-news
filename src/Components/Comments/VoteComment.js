import React from "react";

const VoteComment = () => {
  return (
    <div>
      <button onClick={() => this.handleVote(1)}> 🔺 </button>
      <button onClick={() => this.handleVote(-1)}> 🔻 </button>
    </div>
  );
};

export default VoteComment;
