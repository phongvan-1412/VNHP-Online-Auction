import axios from "axios";

export const serviveDropdown = []
export const getCategoriesRoot = () => async (dispatch) => {
    const res = await axios.get("http://127.0.0.1:8000/api/selectallcategory");
    dispatch({
        serviveDropdown: res.data,
    });
  };