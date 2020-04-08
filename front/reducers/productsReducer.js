import {
  SELECTED_PRODUCT,
  ALL_PRODUCTS,
  ALL_FSS,
  SELECT_STYLE,
  SELECT_FRAME,
  SELECT_SIZE,
  ALL_STYLES,
  DIGITAL
} from "../constans";


const initialState = {
  selectedProduct: {},
  AllProducts: [],
  Allfss: [],
  selectedStyle: {},
  selectedFrame: {},
  selectedSize: {},
  allStyles: [],
  digital:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return Object.assign({}, state, { selectedProduct: action.Product });
    case ALL_PRODUCTS:
      return Object.assign({}, state, { AllProducts: action.allProducts });
    case ALL_FSS:
      return Object.assign({}, state, { Allfss: action.Allfss });
    case ALL_STYLES:
      return Object.assign({}, state, { allStyles: action.allStyles });
    case SELECT_STYLE:
      return Object.assign({}, state, { selectedStyle: action.selectedStyle });
    case SELECT_FRAME:
      return Object.assign({}, state, { selectedFrame: action.selectedFrame });
    case SELECT_SIZE:
      return Object.assign({}, state, { selectedSize: action.selectedSize })
    case DIGITAL:
        return Object.assign({}, state, { digital: action.digital })
    default:
      return state;
  }
};
