import axios from "axios"
import {DATA_PRODUCTS,ALL_PRODUCT_USER,FSS} from "../constans"

export const dataProducts = (dataProducts) => ({
    type: DATA_PRODUCTS,
    dataProducts
  });
    

  export const allproductsUser = (allproductsUser) => ({
    type: ALL_PRODUCT_USER,
    allproductsUser
  });
    
    

  export const fss = (fss) => ({
    type: FSS,
    fss
  });
   


  export const deleteProductData=(productId) => dispatch =>{
      return axios.delete(`/api/cart/delete/${productId}`)
    .then(()=>{

      return axios.get("/api/cart/getDataProducts")
  .then(allDataProducts => {

    dispatch(dataProducts(allDataProducts.data))
    const products=allDataProducts.data.map((e)=>{

      return axios.post("/api/products/getUserProducts",{productId:e.productId})
    })
      axios.all(products).then((allProductsUser)=>{
        
        dispatch(allproductsUser(allProductsUser))
        const FSS= allProductsUser.map((e)=>{
          return axios.post("/api/products/getProductFSS",e.data)
        })
          
        axios.all(FSS)
        .then((allFss)=>{
         
        dispatch(fss(allFss))
      })
    })
  }
);
})
    
  }


export const getCart = () => dispatch =>
    axios.get("/api/cart/getDataProducts")
  .then(allDataProducts => {
    console.log("allDataProducts:",allDataProducts)
    dispatch(dataProducts(allDataProducts.data))
    
    const products=allDataProducts.data.map((e)=>{
      return axios.post("/api/products/getUserProducts",{productId:e.productId})
    })
    
      axios.all(products).then((allProductsUser)=>{
        console.log("allProductsUser:",allProductsUser)
        dispatch(allproductsUser(allProductsUser))
        
        const FSS= allProductsUser.map((e)=>{
          return axios.post("/api/products/getProductFSS",e.data)
        })
          
        axios.all(FSS)
        .then((allFss)=>{
          console.log("allFss:",allFss)
        dispatch(fss(allFss))
      })
    })
  }
);



export const modifyDataProduct =(id,quantity)=> dispatch =>{
  axios.put("/api/products/modifyDataProduct",{quantity:quantity,productDataId:id})
  .then((newData)=>{
    console.log("nuevaData: ",newData)
    axios.get(`/api/cart/getDataProducts`)
    .then(alldataProducts => {
      dispatch(dataProducts(alldataProducts.data))
    })
  })
 }
      
   