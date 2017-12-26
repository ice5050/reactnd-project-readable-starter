import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'auth';

export const CategoryAPI = {
  all: () => axios.get('/categories'),
  get: category => axios.get(`/${category}/posts`)
};

export const PostAPI = {
  all: () => axios.get('/posts'),
  create: post => axios.post('/posts', post),
  delete: postId => axios.delete(`/posts/${postId}`),
  get: postId => axios.get(`/posts/${postId}`),
  update: (postId, post) => axios.put(`/posts/${postId}`, post),
  vote: (postId, type = 'upVote') => axios.post(`/posts/${postId}`, type)
};

export const CommentAPI = {
  all: postId => axios.get(`/posts/${postId}/comments`),
  create: comment => axios.post('/comments', comment),
  delete: commentId => axios.delete(`/comments/${commentId}`),
  get: commentId => axios.get(`/comments/${commentId}`),
  update: (commentId, comment) => axios.put(`/comments/${commentId}`, comment),
  vote: (commentId, type = 'upVote') =>
    axios.post(`/comments/${commentId}`, type)
};
