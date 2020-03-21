import axios from "axios"
import {LOGIN_USER} from "../constans"


export const addLogin = user => ({
    type: LOGIN_USER,
    user
  });

export const userLogin = user => dispatch =>
  axios.post("/api/users/login", {email: user.email, password: user.password})
  .then(user => {
    dispatch(addLogin(user.data))
    return user.data;
    }
  );