import React from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../Api";

class Articles extends React.Component {
  state = {
    articles: [],
    order_by: "asc",
    sort_by: "created_at",
    page: 1,
    totalCount: 0
  };

  render() {
    console.log(this.state.order_by);

    const { articles } = this.state;
    return (
      <div className="articles ">
        <h2>Articles</h2>

        <form className="menu">
          <label>
            Sort By:
            <select onChange={this.SortArticles}>
              <option value="created_at">Date Created</option>
              <option value="comment_count">Comment Count</option>
              <option value="votes">Votes</option>
            </select>
          </label>
        </form>
        <form>
          <label>
            Order By:
            <select onChange={this.OrderArticles}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
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

  SortArticles = event => {
    this.setState({ sort_by: event.target.value });
    console.log({ sort_by: event.target.value });
  };

  OrderArticles = event => {
    this.setState({
      order_by: event.target.value
    });

    console.log({ order_by: event.target.value });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const pageChange = prevState.page !== this.state.page;
    const topicChange = prevProps.topic !== this.props.topic;
    const sort_byChange = prevState.sort_by !== this.state.sort_by;
    const order_byChange = prevState.order_by !== this.state.order_by;
    if (topicChange || sort_byChange || order_byChange || pageChange) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    const { order_by, sort_by, page: p } = this.state;
    api
      .getAllArticles({ sort_by, order_by, p })
      .then(articles => {
        this.setState({ articles });
        //returns articles, with no errors and gets rid of loading message
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };
}

export default Articles;
