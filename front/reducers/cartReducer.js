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
          dataProducts: action.dataProducts,
          allproductsUser:action.allproductsUser,
          fss:action.fss
        });
       default: 
          return state;
     }
   }



      