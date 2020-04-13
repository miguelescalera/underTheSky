import {ORDER,ORDER_IN_PROCESS,ID_FOR_ORDERS,USER_ORDERS} from "../constans"


const initialState = {
    order:{},
    orderInProcess:{},
    idsForOrders:[],
    userOrders:{}
  }
   

  export default (state = initialState, action) => {
    switch (action.type) {
      case ORDER: 
         return Object.assign({}, state, { order: action.order });
      case ORDER_IN_PROCESS: 
         return Object.assign({}, state, { orderInProcess: action.orderInProcess });
      case ID_FOR_ORDERS: 
         return Object.assign({}, state, { idsForOrders: action.idsForOrders });
      case USER_ORDERS: 
         return Object.assign({}, state, { userOrders: action.userOrders });
         default: 
            return state;
       }
     }
        
      