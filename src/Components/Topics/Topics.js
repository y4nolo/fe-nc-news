import React from "react";
import TopicsList from "./TopicsList";
import * as api from "../Api";

class Topics extends React.Component {
  state = {
    topics: []
  };

  render() {
    const { topics } = this.state;

    return (
      <div>
        <h2> Topics</h2>
        <div>
          <TopicsList topics={topics} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    api
      .getAllTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default Topics;
