import axios from 'axios';
import { UpdateCategoryList } from './actionTypes';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000';

export const updateCategoryList = () => {
  return dispatch => {

    axios.get(`${API_ENDPOINT}/api/category`)
      .then(res => {
        dispatch({ type: UpdateCategoryList, data: res.data })
      })
      .catch(error => {
        dispatch({ type: UpdateCategoryList, data: [] })
      })
  };
};

