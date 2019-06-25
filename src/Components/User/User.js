import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Api";

class User extends Component {
  state = { user: [] };

  render() {
    const { user } = this.state;
    return (
      <div>
        <img src={`${user.avatar_url}`} alt="profile" />
        <h2>User: {user.username}</h2>
        <p>Name: {user.name}</p>
        <Link to={`/articles/:${user.username}`}>
          <button>Posts </button>
        </Link>
      </div>
    );
  }

  componentDidMount() {
    const { username } = this.props;
    api.getUserByUserNameId(username).then(user => {
      this.setState({ user: user });
    });
  }
}

export default User;
