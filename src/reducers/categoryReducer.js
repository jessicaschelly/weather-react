import { UpdateCategoryList } from '../actions/actionTypes';
const initialState = {
  categories: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UpdateCategoryList:
      return {
        ...state,
        categories: action.data
      };
    default:
      return state;
  }
};