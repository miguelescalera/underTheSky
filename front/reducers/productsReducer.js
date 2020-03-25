import {SELECTED_PRODUCT,ALL_PRODUCTS, ALL_FSS} from "../constans"


const initialState = {
    selectedProduct:{},
    AllProducts:[],
    Allfss:[]
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case SELECTED_PRODUCT: 
         return Object.assign({}, state, { selectedProduct: action.Product });
         case ALL_PRODUCTS: 
         return Object.assign({}, state, { AllProducts: action.allProducts })
         case ALL_FSS: 
         return Object.assign({}, state, { Allfss: action.Allfss })
         default: 
            return state;
       }
     }
      