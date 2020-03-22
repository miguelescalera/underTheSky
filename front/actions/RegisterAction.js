import axios from "axios";

export const userRegister = user => 
  axios.post("/api/users/register", user).then(res => {
    if (res.status == 201) {
      console.log("usuario creado");
    }
  });
