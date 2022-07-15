import { GET_CATEGORY, GET_PRODUCTS_BY_CATEGORY } from "./type";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  const res = await axios.get("http://127.0.0.1:8000/api/selectallcategory");
  dispatch({
    type: GET_CATEGORY,
    payload: res.data,
  });
};

export const getCategoriesByRoot = (category_name) => {
  return {
    type: GET_PRODUCTS_BY_CATEGORY,
    payload: category_name,
  };
};

