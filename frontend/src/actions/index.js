import {
  ADDING_POST,
  ADDING_POST_SUUCCESS,
  ADDING_POST_FAILURE
} from './constants';
import { PostAPI } from '../utils/api'

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
    type: ADDING_POST_SUUCCESS,
    post
  };
}

export function addPostFailure(err) {
  return {
    type: ADDING_POST_FAILURE
  };
}
