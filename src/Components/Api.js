import Axios from "axios";

const request = Axios.create({
  baseURL: "https://ac-nc-news-be.herokuapp.com/api/"
});

export const getAllArticles = topic => {
  return request
    .get("/articles", {
      params: {
        topic: topic
        //author:author will also work! ignores them if they're not defined!
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};
