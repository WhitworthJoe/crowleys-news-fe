import axios from 'axios'

const fetchArticles = (articleId) => {
  let url = "https://crowleysnewsapi.onrender.com/api/articles?limit=200";

  if (articleId) {
    url = `https://crowleysnewsapi.onrender.com/api/articles/${articleId}`;
  }

  return axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(`Error fetching articles: ${error.message}`);
    });
};

const fetchComments = (articleId) => {
  const url = `https://crowleysnewsapi.onrender.com/api/articles/${articleId}/comments`

  return axios.get(url)
  .then((response) => response.data)
  .catch((error) => {
    throw new Error(`Error fetching comments: ${error.message}`)
  })
}

const upVoteArticle = (articleId) => {
  const url = `https://crowleysnewsapi.onrender.com/api/articles/${articleId}`

  return axios.patch(url, { inc_votes: 1})
  .then((response) => response.data)
  .catch((error) => {
    throw new Error(`Error upvoting article: ${error.message}`)
  })
}

const downVoteArticle = (articleId) => {
  const url = `https://crowleysnewsapi.onrender.com/api/articles/${articleId}`

  return axios.patch(url, { inc_votes: -1 })
  .then((response) => response.data)
  .catch((error) => {
    throw new Error(`Error upvoting article: ${error.message}`)
  })
}
  
export { fetchArticles, upVoteArticle, downVoteArticle, fetchComments };