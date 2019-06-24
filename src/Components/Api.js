import axios from "axios";

const request = axios.create({
  baseURL: "https://ac-nc-news-be.herokuapp.com/api"
});

export const getAllArticles = topic => {
  return request
    .get("/articles/", {
      params: {
        topic: topic
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

export const getAllTopics = () => {
  return request.get("/topics/").then(({ data }) => {
    console.log(data);
    return data.topics;
  });
};
