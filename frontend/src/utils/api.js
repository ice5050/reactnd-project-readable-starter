import axios from 'axios';

const API_URL = process.env.REACT_APP_API_DOMAIN;

axios.defaults.headers.common['Authorization'] = 'auth';

export const CategoryAPI = {
  all: () => axios.get(`${API_URL}/categories`),
  get: category => axios.get(`${API_URL}/${category}/posts`)
};

export const PostAPI = {
  all: () => axios.get(`${API_URL}/posts`),
  create: post => axios.post(`${API_URL}/posts`, post),
  delete: postId => axios.delete(`${API_URL}/posts/${postId}`),
  get: postId => axios.get(`${API_URL}/posts/${postId}`),
  update: (postId, post) => axios.put(`${API_URL}/posts/${postId}`, post),
  vote: (postId, type = 'upVote') =>
    axios.post(`${API_URL}/posts/${postId}`, type)
};

export const CommentAPI = {
  all: postId => axios.get(`${API_URL}/posts/${postId}/comments`),
  create: comment => axios.post(`${API_URL}/comments`, comment),
  delete: commentId => axios.delete(`${API_URL}/comments/${commentId}`),
  get: commentId => axios.get(`${API_URL}/comments/${commentId}`),
  update: (commentId, comment) =>
    axios.put(`${API_URL}/comments/${commentId}`, comment),
  vote: (commentId, type = 'upVote') =>
    axios.post(`${API_URL}/comments/${commentId}`, type)
};
