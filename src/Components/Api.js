import axios from "axios";

const request = axios.create({
  baseURL: "https://ac-nc-news-be.herokuapp.com/api"
});

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

export const getArticlesByTopic = topic => {
  return request
    .get("/articles/", {
      params: { topic: topic }
    })
    .then(({ data }) => {
      console.log(data);
      return data.articles;
    });
};

export const getAllTopics = () => {
  return request.get("/topics").then(({ data }) => {
    console.log(data);
    return data.topics;
  });
};

export const getCommentByArticleId = article_id => {
  return request.get(`articles/${article_id}/comments/`).then(({ data }) => {
    console.log(data);
    return data.comments;
  });
};

export const getUserByUserNameId = user => {
  return request.get(`/users/${user}`).then(({ data }) => {
    console.log(data);
    return data.user;
  });
};
