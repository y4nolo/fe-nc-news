import axios from "axios";

const request = axios.create({
  baseURL: "https://ac-nc-news-be.herokuapp.com/api"
});

//also get articles by topic
export const getAllArticles = (topic, author, votes, created_at) => {
  return request
    .get("/articles/", {
      params: {
        topic: topic,
        author: author,
        votes: votes,
        created_at: created_at
      }
    })
    .then(({ data }) => {
      console.log(data);
      return data.articles;
    });
};

export const getSingleArticle = article_id => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    console.log(data);
    return data.article;
  });
};

//topics
export const getAllTopics = () => {
  return request.get("/topics").then(({ data }) => {
    console.log(data);
    return data.topics;
  });
};

//comments
export const getCommentByArticleId = article_id => {
  return request.get(`articles/${article_id}/comments/`).then(({ data }) => {
    console.log(data);
    return data.comments;
  });
};

//users
export const getUserByUserNameId = user => {
  return request.get(`/users/${user}`).then(({ data }) => {
    console.log(data);
    return data.user;
  });
};

//voting
//vote for articles
export const modifyVotesforArticles = (article_id, increment) => {
  return request
    .patch(`/articles/${article_id}/comments/`, { inc_votes: increment })
    .then(({ data: { article } }) => {
      console.log(article);
    });
};
//vote for comments
export const modifyVotesforComments = (comment_id, increment) => {
  return request
    .patch(`/comments/${comment_id}`, {
      inc_votes: increment
    })
    .then(({ data: { comment } }) => {
      console.log(comment);
    });
};

//post new Comment
export const postNewComment = (article_id, username, body) => {
  return request
    .post(`/articles/${article_id}/comments`, {
      username: "username",
      body: "body"
    })
    .then(response => {
      console.log(response);

      return response;
    });
};

//Delete Comment

export const deleteComment = (comment_id, username, body) => {
  return request
    .delete(`/comments/${comment_id}`, {
      username: "username",
      body: "body"
    })
    .then(response => {
      console.log(response);
      return response;
    });
};
