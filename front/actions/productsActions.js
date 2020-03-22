import axios from "axios"
import { SELECTED_PRODUCT,ALL_PRODUCTS} from "../constans"


export const SelectedProducts= Product =>({
    type:SELECTED_PRODUCT,
    Product
})

export const AllProducts=allProducts=>({
    type:ALL_PRODUCTS,
    allProducts
})


export const fetchNewProduct=(body)=>{
return axios.post("/api/products/newProduct",body)
.then(res => res.data)
.then(result=>dispatch(SelectedProducts(result)))
}

export const getAllProducts=()=>{
    axios.get("/api/products/getProducts")
    .then(res => res.data)
    .then(result=>dispatch(AllProducts(result)))
}

