import {SELECTED_PRODUCT,ALL_PRODUCTS} from "../constans"


const initialState = {
    selectedProduct:{},
    AllProducts:[]
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case SELECTED_PRODUCT: 
         return Object.assign({}, state, { selectedProduct: action.Product });
         case ALL_PRODUCTS: 
         return Object.assign({}, state, { AllProducts: action.allProducts })
         default: 
            return state;
       }
     }
      