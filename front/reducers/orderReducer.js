import {ORDER} from "../constans"


const initialState = {
    order:{}
  }
   

  export default (state = initialState, action) => {
    switch (action.type) {
      case ORDER: 
         return Object.assign({}, state, { order: action.order });
         default: 
            return state;
       }
     }
        
      