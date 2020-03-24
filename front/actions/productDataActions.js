import axios from "axios"
import { DATA_PRODUCTS } from "../constans"

export const dataProduct = dataProduct => ({
    type: DATA_PRODUCTS,
    dataProduct
})

export const fetchProductData = (productId) => dispatch => {
    axios.get(`/api/products/productData/${productId}`)
        .then(res => res.data)
        .then(data => dispatch(dataProduct(data)))
}


/*data es un objeto que debe contener: fecha,lugar,etc... y  el productId(id del producto que contiene el marco,tamaño,etc)*/
export const createDataProduct = (data) => dispatch => {
    console.log("llego aca", data)
    axios.post("/api/products/nuevoproducto", data)
        .then(res => res.data)
        .then(productData => dispatch(dataProduct(productData)))



} 