import { GET_CATEGORY, GET_PRODUCTS_BY_CATEGORY } from "../actions/type";

const initialState = {
  filter: {
    category_name: "",
  },
  categories: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        category_name: (state.filter.category_name = action.payload),
      };

    default:
      return state;
  }
}
