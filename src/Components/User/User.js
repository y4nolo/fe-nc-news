import React, { Component } from "react";
import * as api from "../Api";
import UserArticles from "./UserArticles";

class User extends Component {
  state = { user: [], articles: [] };

  render() {
    const { user } = this.state;
    return (
      <div>
        <img src={`${user.avatar_url}`} alt="profile" />
        <h2>User: {user.username}</h2>
        <p>Name: {user.name}</p>
        <UserArticles user={user} />
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
