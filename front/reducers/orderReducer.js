


import {ORDER,ORDER_IN_PROCESS,ID_FOR_ORDERS, PUNTO_ENCUENTRO,USER_ORDERS} from "../constans"
import { PuntoDeEncuentro } from "../actions/orderActions";



const initialState = {
    order:{},
    orderInProcess:{},
    idsForOrders:[],
    userOrders:{},
    PuntoDeEncuentro:[]
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

      case PUNTO_ENCUENTRO: 
         return Object.assign({}, state, { PuntoDeEncuentro: action.PuntoDeEncuentro });   

         default: 
            return state;
       }
     }
        
      