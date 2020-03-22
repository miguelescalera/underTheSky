import axios from "axios"
import {ORDER} from "../constans"

export const order = order => ({
    type: ORDER,
    order
  });


  


export const order = (dataOrder) => dispatch =>
  axios.post("/api/orders/addOrder",dataOrder)
  .then(order => {
    dispatch(order(order.data))
    return order.data;
    }
  );

  