import {
  ADDING_POST,
  ADDING_POST_SUCCESS,
  ADDING_POST_FAILURE,
  GETTING_POSTS,
  GETTING_POSTS_SUCCESS,
  GETTING_POSTS_FAILURE
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
    dispatch(gettingPosts);
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
