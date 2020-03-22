import axios from "axios"
import { DATA_PRODUCTS} from "../constans"

export const dataProducts= dataProduct =>({
    type:DATA_PRODUCTS,
    dataProduct
})


/*data es un objeto que debe contener: fecha,lugar,etc... y  el productId(id del producto que contiene el marco,tamaño,etc)*/
export const fetchDataProduct= (data)=>{
 axios.post("/api/products/newProductsData",data)
 .then(res => res.data)
 .then(result=>dispatch(dataProducts(result)))
} 