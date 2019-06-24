import React from "react";

function TopicsList({ topics }) {
  return topics.map(topic => {
    return (
      <div className="listItem">
        <h2> {topic.slug}</h2>
        <p> {topic.description}</p>
      </div>
    );
  });
}
export default TopicsList;
