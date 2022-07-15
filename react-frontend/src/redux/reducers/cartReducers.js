import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  GET_CART,
  SUBMIT_CART,
  UPDATE_PRODUCT_FROM_CART,
} from "../actions/type";

const initialState = {
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case SUBMIT_CART:
      return {
        ...state,
        cart: [],
      };
    case ADD_PRODUCT_TO_CART:
      let check = true;
      let temp = "";
      action.payload.forEach((item) => (temp = item));

      if (state.cart.length === 0) {
        return {
          cart: [temp, ...state.cart],
        };
      }

      state.cart.forEach((items) => {
        if (items.product_SKU === getProductId(action.payload)) {
          check = false;
          return;
        }
      });

      if (check) {
        return {
          cart: [temp, ...state.cart],
        };
      } else {
        return {
          ...state,
        };
      }

    case DELETE_PRODUCT_FROM_CART:
      return {
        cart: state.cart.filter((item) => item.product_SKU !== action.payload),
      };

    case UPDATE_PRODUCT_FROM_CART: {
      state.cart.forEach((item) => {
        if (item.product_SKU === getProductId(action.payload)) {
          item.product_quantity = getProductQuantity(action.payload);
          item.product_subtotal = getProductSubtotal(action.payload);
          return;
        }
      });
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}

function getProductId(payload) {
  let product_id = 0;

  payload.map((item) => {
    product_id = item.product_SKU;
  });
  return product_id;
}

function getProductQuantity(payload) {
  let product_quantity = 0;

  payload.map((item) => {
    product_quantity = item.product_quantity;
  });

  return product_quantity;
}

function getProductSubtotal(payload) {
  let product_subtotal = 0;

  payload.map((item) => {
    product_subtotal = item.product_subtotal;
  });

  return product_subtotal;
}
