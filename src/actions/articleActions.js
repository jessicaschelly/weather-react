import axios from 'axios';
import { UpdateArticleList, FilterByCategory } from './actionTypes';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000';

export const updateArticleList = () => {
  return dispatch => {

    axios.get(`${API_ENDPOINT}/api/article`)
      .then(res => {
        dispatch({ type: UpdateArticleList, data: res.data })
      })
      .catch(error => {
        dispatch({ type: UpdateArticleList, data: [] })
      })
  };
};

export const filterByCategory = (categoryId) => {
  return ({ type: FilterByCategory, data: categoryId })
}

