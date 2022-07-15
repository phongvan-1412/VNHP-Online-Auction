import { GET_CATEGORY_ROOT } from "../actions/type";

const initialState = {
  categoriesRoot: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_ROOT:
      return {
        ...state,
        categoriesRoot: action.payload,
      };

    default:
      return state;
  }
}
