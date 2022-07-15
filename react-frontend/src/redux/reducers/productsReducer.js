import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_ID,
  GET_PRODUCTS_BY_CATEGORY_SLIDE1,
  GET_PRODUCTS_BY_CATEGORY_SLIDE2,
  GET_PRODUCTS_BY_CATEGORY_SLIDE3
} from "../actions/type";

const initialState = {
  filter: {
    category_name: "",
  },

  filter1: {
    category_name: "Breakfast",
  },
  filter2: {
    category_name: "Fruit",
  },
  filter3: {
    category_name: "Beer",
  },
  products: [
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        category_name: state.filter.category_name = action.payload,
      };

    case GET_PRODUCTS_BY_CATEGORY_SLIDE1:
      return {
        ...state,
        category_name: state.filter1.category_name = action.payload
      };

    case GET_PRODUCTS_BY_CATEGORY_SLIDE2:
      return {
        ...state,
        category_name: state.filter2.category_name = action.payload
      };

    case GET_PRODUCTS_BY_CATEGORY_SLIDE3:
      return {
        ...state,
        category_name: state.filter3.category_name = action.payload
      };

    default:
      return state;
  }
}
