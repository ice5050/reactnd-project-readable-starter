import {
  GETTING_CATEGORIES,
  GETTING_CATEGORIES_SUCCESS,
  GETTING_CATEGORIES_FAILURE,
  GETTING_CATEGORY,
  GETTING_CATEGORY_SUCCESS,
  GETTING_CATEGORY_FAILURE
} from '../actions/constants';

const initialState = {
  categories: [],
  category: {},
  loading: false
};

function category(state = initialState, action) {
  switch (action.type) {
    case GETTING_CATEGORIES:
      return {
        ...state,
        loading: true
      };
    case GETTING_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.categories
      };
    case GETTING_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false
      };
    case GETTING_CATEGORY:
      return {
        ...state,
        loading: true
      };
    case GETTING_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.category
      };
    case GETTING_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export default category;
