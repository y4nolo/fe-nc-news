import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Api";
class UserArticles extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <Link to={`/author?${user.username}`}>
          <button onClick={() => this.getArticlesByUser(user.username)}>
            Posts{" "}
          </button>
        </Link>
      </div>
    );
  }
  getArticlesByUser = () => {
    const { username } = this.props;

    api.getAllArticles({ author: username }).then(article => {
      this.setState({ article: article });
    });
  };
}

export default UserArticles;
