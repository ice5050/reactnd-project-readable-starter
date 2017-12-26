import {
  ADDING_POST,
  ADDING_POST_SUCCESS,
  ADDING_POST_FAILURE,
  GETTING_POSTS,
  GETTING_POSTS_SUCCESS,
  GETTING_POSTS_FAILURE,
  GETTING_POST,
  GETTING_POST_SUCCESS,
  GETTING_POST_FAILURE,
  DELETING_POST,
  DELETING_POST_SUCCESS,
  DELETING_POST_FAILURE,
  UPDATING_POST,
  UPDATING_POST_SUCCESS,
  UPDATING_POST_FAILURE,
  VOTING_POST,
  VOTING_POST_SUCCESS,
  VOTING_POST_FAILURE
} from './constants';
import { PostAPI } from '../utils/api';

export function addPost(post) {
  return dispatch => {
    dispatch(addingPost());
    PostAPI.create(post)
      .then(data => {
        dispatch(addPostSuccess(data));
      })
      .catch(err => {
        dispatch(addPostFailure(err));
      });
  };
}

export function addingPost() {
  return {
    type: ADDING_POST
  };
}

export function addPostSuccess(post) {
  return {
    type: ADDING_POST_SUCCESS,
    post
  };
}

export function addPostFailure(err) {
  return {
    type: ADDING_POST_FAILURE
  };
}

export function getPosts() {
  return dispatch => {
    dispatch(gettingPosts());
    PostAPI.all()
      .then(data => {
        dispatch(getPostsSuccess(data));
      })
      .catch(err => {
        dispatch(getPostsFailure(err));
      });
  };
}

export function gettingPosts() {
  return {
    type: GETTING_POSTS
  };
}

export function getPostsSuccess(posts) {
  return {
    type: GETTING_POSTS_SUCCESS,
    posts
  };
}

export function getPostsFailure(err) {
  return {
    type: GETTING_POSTS_FAILURE
  };
}

export function getPost(postId) {
  return dispatch => {
    dispatch(gettingPost());
    PostAPI.get(postId)
      .then(data => {
        dispatch(getPostSuccess(data));
      })
      .catch(err => {
        dispatch(getPostFailure(err));
      });
  };
}

export function gettingPost() {
  return {
    type: GETTING_POST
  };
}

export function getPostSuccess(post) {
  return {
    type: GETTING_POST_SUCCESS,
    post
  };
}

export function getPostFailure(err) {
  return {
    type: GETTING_POST_FAILURE
  };
}

export function deletePost(postId) {
  return dispatch => {
    dispatch(deletingPost());
    PostAPI.delete(postId)
      .then(() => {
        dispatch(deletePostSuccess(postId));
      })
      .catch(err => {
        dispatch(deletePostFailure(err));
      });
  };
}

export function deletingPost() {
  return {
    type: DELETING_POST
  };
}

export function deletePostSuccess(postId) {
  return {
    type: DELETING_POST_SUCCESS,
    postId
  };
}

export function deletePostFailure(err) {
  return {
    type: DELETING_POST_FAILURE
  };
}

export function updatePost(postId, post) {
  return dispatch => {
    dispatch(updatingPost());
    PostAPI.update(postId, post)
      .then(data => {
        dispatch(updatePostSuccess(data));
      })
      .catch(err => {
        dispatch(updatePostFailure(err));
      });
  };
}

export function updatingPost() {
  return {
    type: UPDATING_POST
  };
}

export function updatePostSuccess(post) {
  return {
    type: UPDATING_POST_SUCCESS,
    post
  };
}

export function updatePostFailure(err) {
  return {
    type: UPDATING_POST_FAILURE
  };
}

export function votePost(postId, type) {
  return dispatch => {
    dispatch(votingPost());
    PostAPI.vote(postId, type)
      .then(data => {
        dispatch(votePostSuccess(data));
      })
      .catch(err => {
        dispatch(votePostFailure(err));
      });
  };
}

export function votingPost() {
  return {
    type: VOTING_POST
  };
}

export function votePostSuccess(post) {
  return {
    type: VOTING_POST_SUCCESS,
    post
  };
}

export function votePostFailure(err) {
  return {
    type: VOTING_POST_FAILURE
  };
}
