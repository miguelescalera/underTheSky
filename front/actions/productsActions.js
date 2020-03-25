import axios from "axios"
import { SELECTED_PRODUCT, ALL_PRODUCTS, ALL_FSS } from "../constans"

export const Allfss = (Allfss) => ({
    type: ALL_FSS,
    Allfss
})


export const SelectedProducts = Product => ({
    type: SELECTED_PRODUCT,
    Product
})

export const AllProducts = allProducts => ({
    type: ALL_PRODUCTS,
    allProducts
})


export const fetchNewProduct = (body) => dispatch => {
    return axios.post("/api/products/newProduct", body)
        .then(res => res.data)
        .then(result => dispatch(SelectedProducts(result)))
}

export const getAllProducts = () => {
    axios.get("/api/products/getProducts")
        .then(res => res.data)
        .then(result => dispatch(AllProducts(result)))
}

export const getAllfss = () => dispatch => {
    console.log("estoy en axios")
    axios.post("/api/products/getAllfss")
        .then(res => res.data)
        .then(result => dispatch(Allfss(result)))
        .catch((err => console.log("err:", err)))
}
