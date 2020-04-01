import {
  GET_ORDERS,
  GET_USERS,
  GET_DISPLAY,
  GET_FRAME,
  GET_SIZE,
  GET_STYLE,
  DATA_PRODUCTS
} from "../constans"


const initialState = {
    allUsers:[],
    allOrders:[],
    alldisplay:[],
    allFrames:[],
    allSizes:[],
    allStyles:[],
    allDataProducts:[]
  }

  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_USERS: 
         return Object.assign({}, state, { allUsers: action.allUsers });
      case GET_ORDERS: 
         return Object.assign({}, state, { allOrders: action.allOrder });
      case GET_DISPLAY: 
         return Object.assign({}, state, { alldisplay: action.alldisplay });
      case GET_FRAME: 
         return Object.assign({}, state, { allFrames: action.allFrame });
      case GET_SIZE: 
         return Object.assign({}, state, { allSizes: action.allSize });
      case GET_STYLE: 
         return Object.assign({}, state, { allStyles: action.allStyle });
      case DATA_PRODUCTS: 
         return Object.assign({}, state, { allDataProducts: action.allDataProducts });
         default: 
            return state;
       }
     }