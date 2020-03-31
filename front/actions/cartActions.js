import axios from "axios"
import {CART} from "../constans"

export const cart = (dataProducts,allproductsUser,fss) => ({
    type: CART,
    dataProducts,
    allproductsUser,
    fss
  });
    

  
   


  export const deleteProductData=(productId) => dispatch =>{
      return axios.delete(`/api/cart/delete/${productId}`)
    .then(()=>{

      return axios.get("/api/cart/getDataProducts")
  .then(allDataProducts => {

   
    const products=allDataProducts.data.map((e)=>{
   
      return axios.post("/api/products/getUserProducts",{productId:e.productId})
    })
      axios.all(products).then((allProductsUser)=>{
        
       
        const FSS= allProductsUser.map((e)=>{
          return axios.post("/api/products/getProductFSS",e.data)
        })
          
        axios.all(FSS)
        .then((allFss)=>{
         
          dispatch(cart(
            allDataProducts.data,
            allProductsUser,
            allFss
            ))
      })
    })
  }
);
})
    
  }


export const getCart = () => dispatch =>
axios.get("/api/cart/getDataProducts")
.then(allDataProducts => {
  const products=allDataProducts.data.map((e)=>{
    return axios.post("/api/products/getUserProducts",{productId:e.productId})
  })
  
  axios.all(products).then((allProductsUser)=>{
    const FSS= allProductsUser.map((e)=>{
    return axios.post("/api/products/getProductFSS",e.data)
  })
  axios.all(FSS)
  .then((allFss)=>{
    dispatch(cart(
      allDataProducts.data,
      allProductsUser,
      allFss
      ))
    })
  })
});

 
    
      
    
      
      
       
        
        



export const modifyDataProduct =(id,quantity,allProductsUser,allFss)=> dispatch =>{
  axios.put("/api/products/modifyDataProduct",{quantity:quantity,productDataId:id})
  .then((newData)=>{
    console.log("nuevaData: ",newData)
    axios.get(`/api/cart/getDataProducts`)
    .then(alldataProducts => {
      dispatch(cart(
        alldataProducts.data,
        allProductsUser,
        allFss
        ))
    })
  })
 }
      
   