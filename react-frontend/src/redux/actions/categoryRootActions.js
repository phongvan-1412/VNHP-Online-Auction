import { GET_CATEGORY_ROOT } from "./type";
import axios from "axios";

export const getCategoriesRoot = () => async (dispatch) => {
  const res = await axios.get("http://127.0.0.1:8000/api/selectcategoryroot");
  dispatch({
    type: GET_CATEGORY_ROOT,
    payload: res.data,
  });
};


