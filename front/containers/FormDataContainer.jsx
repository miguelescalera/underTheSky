import React from "react";
import { connect } from "react-redux";
import { createDataProduct, dataProduct} from "../actions/productDataActions"
import { fetchProduct } from '../actions/productsActions'
import FormData from '../components/FormData'
import { getCart } from "../actions/cartActions"

const mapDispatchToProps = (dispatch, state) => {
    return {
        dataProduct: (data) => dispatch(dataProduct(data)),
        selectedProducts: (product) => dispatch(fetchProduct(product)),
        getCart: () => dispatch(getCart()),
        
    };
}


const mapStateToProps = (state, ownprops) => {
    return {
        product: state.products.selectedProduct,
        userEmail: state.user.user.email
    };
};

let arrOfData=[]
let arrOfProduct=[]

class FormDataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            content: '',
            name: '',
            time: '',
            language: '',
            emailClient: ''
            
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        let product = JSON.parse(localStorage.getItem('selectedStyle'))
        if (product) {
            this.props.selectedProducts(product)
        }

    }



    handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        
        createDataProduct(
             {
                 date: this.state.date,
                 content: this.state.content,
                 name: this.state.name,
                 time: this.state.time,
                 language: this.state.language,
                 emailClient: this.state.emailClient,
                 productId: this.props.product.id
             }
         ).then((res)=>{
             this.props.dataProduct(res.data)
             if(!this.props.userEmail){
                let dataWithoutUser=res.data
                let productWithoutUser=this.props.product
    
    
                if(arrOfData.length!==0){
                    arrOfProduct=JSON.parse(localStorage.getItem("productWithoutUser"))
                    arrOfData=JSON.parse(localStorage.getItem("dataWithoutUser"))
    
                    arrOfProduct.push(productWithoutUser)
                    arrOfData.push(dataWithoutUser)
    
                    localStorage.setItem("dataWithoutUser",JSON.stringify(arrOfData))
                    localStorage.setItem("productWithoutUser",JSON.stringify(arrOfProduct))
                }
                else{
                    arrOfData.push(dataWithoutUser)
                    arrOfProduct.push(productWithoutUser)
                    localStorage.setItem("dataWithoutUser",JSON.stringify(arrOfData))
                    localStorage.setItem("productWithoutUser",JSON.stringify(arrOfProduct))
                }
            }
        })
     .then(()=>{
         if(this.props.userEmail){
             this.props.getCart()
         }
     }).then(()=>this.props.history.push("/cart"))
 }
      
  render() {
        return (
            <div>
                <h3 className="titulopagina">Información</h3>
                <FormData
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDataContainer);