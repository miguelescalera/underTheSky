import axios from "axios"
import {CART} from "../constans"

export const Cart = (dataProducts,allproductsUser,fss) => ({
    type: CART,
    dataProducts,
    allproductsUser,
    fss
  });


  export const deleteProductData=(productId) => dispatch =>{
      return axios.delete(`/api/cart/delete/${productId}`)
    .then(()=>{
      return axios.get("/api/cart/getDataProducts")
  .then(dataProducts => {
    const products=dataProducts.data.map((e)=>{

      return axios.post("/api/products/getUserProducts",{productId:e.productId})
    })
      axios.all(products).then((allproductsUser)=>{
      
        const FSS= allproductsUser.map((e)=>{
          return axios.post("/api/products/getProductFSS",e.data)
        })
          
        axios.all(FSS)
        .then((fss)=>{
        dispatch(Cart(dataProducts.data,allproductsUser,fss))
      })
    })
  }
);
})
    
  }


export const getCart = () => dispatch =>
  axios.get("/api/cart/getDataProducts")
  .then(dataProducts => {

    const products=dataProducts.data.map((e)=>{
      return axios.post("/api/products/getUserProducts",{productId:e.productId})
    })
      axios.all(products).then((allproductsUser)=>{
    
        const FSS= allproductsUser.map((e)=>{
          return axios.post("/api/products/getProductFSS",e.data)
         
        })
        axios.all(FSS)
        .then((fss)=>{
        dispatch(Cart(dataProducts.data,allproductsUser,fss))
      })
    })

  }
);



