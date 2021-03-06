//@todo: Actions.js contients les types dans des contantes en majuscules
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "updateProducts": {
      return { ...state, success: null, error: null, isAdding: true };
    }
    case "updateProductsSuccess": {
      return {
        ...state,
        products: action.payload,
        success: true,
        isAdding: false
      };
    }
    case "updateProductsError": {
      return {
        ...state,
        error: action.payload,
        success: false,
        isAdding: false
      };
    }
    case "toggleMiniCart": {
      return {
        ...state,
        miniCartIsOpen: !state.miniCartIsOpen
      };
    }
    case "updateCartKey": {
      return { ...state, cartKey: action.payload };
    }
    case "changeCurrency": {
      return { ...state, currency: action.payload };
    }
    case "updateStep": {
      return { ...state, step: action.payload };
    }
    default: {
      throw new Error("This reducer action does not exist");
    }
  }
};
