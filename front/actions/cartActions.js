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
  })
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
  


export const modifyDataProduct =(id,quantity,allProductsUser,allFss,user)=> dispatch =>{
  console.log("user del modify",user)
  axios.put("/api/products/modifyDataProduct",{quantity:quantity,productDataId:id})
  .then((newData)=>{
    if(user){
      axios.get(`/api/cart/getDataProducts`)
      .then(alldataProducts => {
        dispatch(cart(
          alldataProducts.data,
          allProductsUser,
          allFss
          ))
      })
    }
    else{
      let dataProduct= JSON.parse(localStorage.getItem("dataWithoutUser"))
      dataProduct.map((e)=>{
        if(e.id===newData.data.id){
          e.quantity=quantity
        }
      })
      dispatch(cart(
        dataProduct,
        allProductsUser,
        allFss
        ))
      localStorage.setItem("dataWithoutUser",JSON.stringify(dataProduct))

    }
  })
}
      

 
          
    
 
    
      
 export const cartWithoutUser = (data)=>dispatch =>{
   console.log(data.product);
   
   const FSS= data.product.map((e)=>{
      return axios.post("/api/products/getProductFSS",e)
    })
    axios.all(FSS).then((allfss)=>{
      dispatch(cart(
        data.dataProduct,
        data.product,
        allfss
          ))
        })
      }    
     
      
      
      
       
        
        



      
   