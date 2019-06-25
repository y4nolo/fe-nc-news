import React from "react";
import { Link } from "@reach/router";

function TopicsList({ topics }) {
  return topics.map(topic => {
    return (
      <div key={topic.slug} className="listItem">
        <Link to={`/topics/${topic.slug}`}>
          <h2> {topic.slug}</h2>
        </Link>
        <p> {topic.description}</p>
      </div>
    );
  });
}
export default TopicsList;
