import {
  GETTING_CATEGORIES,
  GETTING_CATEGORIES_SUCCESS,
  GETTING_CATEGORIES_FAILURE,
  GETTING_CATEGORY,
  GETTING_CATEGORY_SUCCESS,
  GETTING_CATEGORY_FAILURE
} from './constants';
import { CategoryAPI } from '../utils/api';

export function getCategories() {
  return dispatch => {
    dispatch(gettingCategories());
    CategoryAPI.all()
      .then(data => {
        dispatch(getCategoriesSuccess(data));
      })
      .catch(err => {
        dispatch(getCategoriesFailure(err));
      });
  };
}

export function gettingCategories() {
  return {
    type: GETTING_CATEGORIES
  };
}

export function getCategoriesSuccess(categories) {
  return {
    type: GETTING_CATEGORIES_SUCCESS,
    categories
  };
}

export function getCategoriesFailure(err) {
  return {
    type: GETTING_CATEGORIES_FAILURE
  };
}

export function getCategory(categoryId) {
  return dispatch => {
    dispatch(gettingCategory());
    CategoryAPI.get(categoryId)
      .then(data => {
        dispatch(getCategorySuccess(data));
      })
      .catch(err => {
        dispatch(getCategoryFailure(err));
      });
  };
}

export function gettingCategory() {
  return {
    type: GETTING_CATEGORY
  };
}

export function getCategorySuccess(category) {
  return {
    type: GETTING_CATEGORY_SUCCESS,
    category
  };
}

export function getCategoryFailure(err) {
  return {
    type: GETTING_CATEGORY_FAILURE
  };
}
