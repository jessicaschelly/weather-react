import { UpdateArticleList, FilterByCategory } from '../actions/actionTypes';

const initialState = {
  articles: [],
  categoryFilter: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UpdateArticleList:
      return {
        ...state,
        articles: action.data
      };
    case FilterByCategory:
      return {
        ...state,
        categoryFilter: action.data

      }
    default:
      return state;
  }
};