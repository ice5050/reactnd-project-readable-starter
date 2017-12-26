import {
  ADDING_COMMENT,
  ADDING_COMMENT_SUCCESS,
  ADDING_COMMENT_FAILURE,
  GETTING_COMMENTS,
  GETTING_COMMENTS_SUCCESS,
  GETTING_COMMENTS_FAILURE,
  DELETING_COMMENT,
  DELETING_COMMENT_SUCCESS,
  DELETING_COMMENT_FAILURE,
  GETTING_COMMENT,
  GETTING_COMMENT_SUCCESS,
  GETTING_COMMENT_FAILURE,
  UPDATING_COMMENT,
  UPDATING_COMMENT_SUCCESS,
  UPDATING_COMMENT_FAILURE,
  VOTING_COMMENT,
  VOTING_COMMENT_SUCCESS,
  VOTING_COMMENT_FAILURE
} from './constants';
import { CommentAPI } from '../utils/api';

export function addComment(comment) {
  return dispatch => {
    dispatch(addingComment());
    CommentAPI.create(comment)
      .then(data => {
        dispatch(addCommentSuccess(data));
      })
      .catch(err => {
        dispatch(addCommentFailure(err));
      });
  };
}

export function addingComment() {
  return {
    type: ADDING_COMMENT
  };
}

export function addCommentSuccess(comment) {
  return {
    type: ADDING_COMMENT_SUCCESS,
    comment
  };
}

export function addCommentFailure(err) {
  return {
    type: ADDING_COMMENT_FAILURE
  };
}

export function getComments(postId) {
  return dispatch => {
    dispatch(gettingComments());
    CommentAPI.all(postId)
      .then(data => {
        dispatch(getCommentsSuccess(data));
      })
      .catch(err => {
        dispatch(getCommentsFailure(err));
      });
  };
}

export function gettingComments() {
  return {
    type: GETTING_COMMENTS
  };
}

export function getCommentsSuccess(comments) {
  return {
    type: GETTING_COMMENTS_SUCCESS,
    comments
  };
}

export function getCommentsFailure(err) {
  return {
    type: GETTING_COMMENTS_FAILURE
  };
}

export function getComment(commentId) {
  return dispatch => {
    dispatch(gettingComment());
    CommentAPI.get(commentId)
      .then(data => {
        dispatch(getCommentSuccess(data));
      })
      .catch(err => {
        dispatch(getCommentFailure(err));
      });
  };
}

export function gettingComment() {
  return {
    type: GETTING_COMMENT
  };
}

export function getCommentSuccess(comment) {
  return {
    type: GETTING_COMMENT_SUCCESS,
    comment
  };
}

export function getCommentFailure(err) {
  return {
    type: GETTING_COMMENT_FAILURE
  };
}

export function deleteComment(commentId) {
  return dispatch => {
    dispatch(deletingComment());
    CommentAPI.delete(commentId)
      .then(() => {
        dispatch(deleteCommentSuccess(commentId));
      })
      .catch(err => {
        dispatch(deleteCommentFailure(err));
      });
  };
}

export function deletingComment() {
  return {
    type: DELETING_POST
  };
}

export function deleteCommentSuccess(commentId) {
  return {
    type: DELETING_COMMENT_SUCCESS,
    commentId
  };
}

export function deleteCommentFailure(err) {
  return {
    type: DELETING_COMMENT_FAILURE
  };
}

export function updateComment(commentId, comment) {
  return dispatch => {
    dispatch(updatingComment());
    CommentAPI.update(commentId, comment)
      .then(data => {
        dispatch(updateCommentSuccess(data));
      })
      .catch(err => {
        dispatch(updateCommentFailure(err));
      });
  };
}

export function updatingComment() {
  return {
    type: UPDATING_COMMENT
  };
}

export function updateCommentSuccess(comment) {
  return {
    type: UPDATING_COMMENT_SUCCESS,
    comment
  };
}

export function updateCommentFailure(err) {
  return {
    type: UPDATING_COMMENT_FAILURE
  };
}

export function voteComment(commentId, type) {
  return dispatch => {
    dispatch(votingComment());
    CommentAPI.vote(commentId, type)
      .then(data => {
        dispatch(voteCommentSuccess(data));
      })
      .catch(err => {
        dispatch(voteCommentFailure(err));
      });
  };
}

export function votingComment() {
  return {
    type: VOTING_COMMENT
  };
}

export function voteCommentSuccess(comment) {
  return {
    type: VOTING_COMMENT_SUCCESS,
    comment
  };
}

export function voteCommentFailure(err) {
  return {
    type: VOTING_COMMENT_FAILURE
  };
}
