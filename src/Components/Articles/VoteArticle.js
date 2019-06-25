import React from "react";

const VoteArticle = () => {
  return (
    <div>
      <button onClick={() => this.handleVote(1)}> 🔺 </button>
      <button onClick={() => this.handleVote(-1)}> 🔻 </button>
    </div>
  );
};

export default VoteArticle;
