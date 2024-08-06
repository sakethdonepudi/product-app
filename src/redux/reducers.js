const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.cart.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      const productToRemove = state.cart.find((item) => item.id === action.payload.id);
      if (productToRemove.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }
    default:
      return state;
  }
};

export default reducer;
