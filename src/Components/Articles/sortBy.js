import React, { Component } from "react";

class sortBy extends Component {
  state = {
    sortBy: null
  };
  render() {
    return (
      <div>
        {/* api will sort articles */}
        <button onClick={this.setSortBy(votes)}>Sort By votes</button>
        <button onClick={this.setSortBy(comment_count)}>
          Sort By comments
        </button>
        <button onClick={this.setSortBy(author)}>Sort By author</button>
      </div>
    );
  }
  setSortBy = sortByColumn => {
    this.setState({ sortBy });
  };

  fetcharticles = (topic, sort_by, author) => {};

  componentDidUpdate(prevState, prevProps) {
    const topicChange = prevProps.topic !== this.props.topicconst;
    const sortByChange = prevState.sortBy !== this.props.sortBy;
  }
}

export default sortBy;
