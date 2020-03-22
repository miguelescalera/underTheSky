import axios from "axios"
import {CART} from "../constans"

export const Cart = cart => ({
    type: CART,
    cart
  });

export const getCart = () => dispatch =>
  axios.post("/api/cart")
  .then(cart => {
    dispatch(Cart(cart.data))
    return cart.data;
    }
  );