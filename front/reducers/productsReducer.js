import { SELECTED_PRODUCT, ALL_PRODUCTS, ALL_FSS, SELECT_STYLE } from "../constans"


const initialState = {
  selectedProduct: {},
  AllProducts: [],
  Allfss: [],
  selectedStyle: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return Object.assign({}, state, { selectedProduct: action.Product });
    case ALL_PRODUCTS:
      return Object.assign({}, state, { AllProducts: action.allProducts })
    case ALL_FSS:
      return Object.assign({}, state, { Allfss: action.Allfss })
    case SELECT_STYLE:
      return Object.assign({}, state, { selectedStyle: action.selectedStyle })
    default:
      return state;
  }
}
