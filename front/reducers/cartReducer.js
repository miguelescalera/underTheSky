import {CART} from "../constans"
const initialState = {
  dataProducts:[],
  allproductsUser:[],
  fss:[]
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case CART: 
         return Object.assign({}, state, {
            allproductsUser:action.allproductsUser,
            dataProducts: action.dataProducts,
            fss:action.fss
         });
         default: 
         return state;
        }
      }
      
      
      
      
      
     
      