import { produce } from "immer";

export const CartReducer = produce((state, action) => {
  switch (action.type) {
    case "Add": {
      const isProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (isProduct) {
        isProduct.quantity += 1;
      } else {
        state.push(action.payload);
      }
      break;
    }

    case "Increment": {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload
      );
      state[productIndex].quantity += 1;
      break;
    }

    case "Decrement": {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload
      );

      if (state[productIndex].quantity > 1) state[productIndex].quantity -= 1;
      break;
    }

    case "Remove": {
      return state.filter((product) => product.id !== action.payload);
    }

    default:
      return state;
  }
});
