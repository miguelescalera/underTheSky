import {ALL_PRODUCT_USER,DATA_PRODUCTS,FSS} from "../constans"
const initialState = {
  dataProducts:[],
  allproductsUser:[],
  fss:[]
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case ALL_PRODUCT_USER: 
         return Object.assign({}, state, {allproductsUser:action.allproductsUser});
      case DATA_PRODUCTS: 
         return Object.assign({}, state, {dataProducts: action.dataProducts });
      case FSS: 
         return Object.assign({}, state, {fss:action.fss});
         default: 
         return state;
        }
      }
      
      
      
      
     
      