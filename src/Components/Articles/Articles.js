import React from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../Api";

class Articles extends React.Component {
  state = {
    articles: [],
    orderBy: null,
    sortBy: null,
    page: 1
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="articles ">
        <h2>Articles</h2>

        <form className="menu">
          <label>
            Order by:
            <select onChange={this.SortArticles}>
              <option value="created_at">Date Created</option>
              <option value="comments_count">Comment Count</option>
              <option value="votes">Votes</option>
            </select>
          </label>
          <br />
        </form>
        {/* https://www.npmjs.com/package/react-dropdown */}
        <>
          <ArticlesList articles={articles} />
        </>
        <button onClick={() => this.changePage(-1)}>Prev</button>
        <button onClick={() => this.changePage(1)}>Next</button>
      </div>
    );
  }

  changePage = direction => {
    this.setState(prevState => {
      return { page: this.state.page + direction };
    });
  };

  setSortBy = sortBy => {
    this.setState({ sortBy });
  };

  setOrderBy = orderBy => {
    this.setState({ orderBy });
  };

  componentDidMount() {
    api
      .getAllArticles()
      .then(articles => {
        this.setState({ articles });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const topicChange = prevProps.topic !== this.props.topic;
    const sortByChange = prevState.sortby !== this.state.Sortby;
    const orderByChange = prevState.orderBy !== this.state.orderBy;
    if (topicChange || sortByChange || orderByChange) {
      this.getAllArticles();
    }
  }
}

export default Articles;
