import { DATA_PRODUCTS } from "../constans"
const initialState = {
  dataProduct: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_PRODUCTS:
      return Object.assign({}, state, { dataProduct: action.dataProduct });
    default:
      return state;
  }
}
