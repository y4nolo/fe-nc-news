import React from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../Api";

class Articles extends React.Component {
  state = {
    articles: [],
    sort_by: ""
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
      </div>
    );
  }
  updateSorting = e => {
    this.setState({ sort_by: e.target.value });
  };

  componentDidMount(query) {
    api.getAllArticles(query).then(articles => {
      this.setState({ articles });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, sort_by } = this.state;
    if (prevState.sort_by !== sort_by) {
      this.fetchArticles({ topic, sort_by });
    }
  }
}

export default Articles;
