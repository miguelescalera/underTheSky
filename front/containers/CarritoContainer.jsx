import React from "react";
import Carrito from "../components/Carrito";
import { connect } from "react-redux";
import {getCart,deleteProductData, modifyDataProduct,cartWithoutUser} from "../actions/cartActions"
import {dataProduct} from "../actions/productDataActions"
import {IdsForOrders} from "../actions/orderActions"
import Container from 'react-bootstrap/Container'
import CheckoutCart from "../components/CheckoutCart"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const mapStateToProps=(state,ownProps)=>{
    return{
       dataProduct:state.cart.dataProducts,
       userEmail:state.user.user.email
      }
    }
       

const mapDispatchToProps=(dispatch)=>{
    return{
        dataToEdit:(data)=>dispatch(dataProduct(data)),
        getCart: ()=>dispatch(getCart()),
        cartWithoutUser: (data)=>dispatch(cartWithoutUser(data)),
        deleteProductData:(id)=>dispatch(deleteProductData(id)),
        IdsForOrders:(id)=>dispatch(IdsForOrders(id)),
        modifyDataProduct:(id,quantity,user)=>dispatch(modifyDataProduct(id,quantity,user))
    }
}

class NavbarContainer extends React.Component {
  constructor(props) {
    super();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleEditData = this.handleEditData.bind(this)
  }
  componentDidMount() {
    if (this.props.userEmail) {
      this.props.getCart();
    }
    else if(JSON.parse(localStorage.getItem("dataWithoutUser"))){
        let dataProduct= JSON.parse(localStorage.getItem("dataWithoutUser"))
        this.props.cartWithoutUser(dataProduct)
      }
    }
       
    
       
       

  handleDelete(id) {
    this.props.deleteProductData(id);
    if(!this.props.userEmail){
      let dataProduct= JSON.parse(localStorage.getItem("dataWithoutUser"))
     
      dataProduct.map((e,i)=>{
        if(e.id===id){
          dataProduct.splice(i,1)
        }
      })
      localStorage.setItem("dataWithoutUser",JSON.stringify(dataProduct))
      this.props.cartWithoutUser(dataProduct)
    }
  }

     

handleSubmit(id) {
  console.log("length.:",this.props.dataProduct.length)
    if(this.props.dataProduct.length){
      this.props.IdsForOrders(id);
      this.props.history.push("/cart/checkout");
    }
  }


handleQuantity(id,quantity){
  if(quantity>=1){
      this.props.modifyDataProduct(
          id,
          quantity,
          !!this.props.userEmail
          )
        }
      }
         
handleEditData(data){
  this.props.dataToEdit(data)
  this.props.history.push("/cart/editData");
}
 

  render() {
    return (
      <div>
        <Container className="carrito-vistageneral">
          <CheckoutCart
            dataProduct={this.props.dataProduct}
            handleDelete={this.handleDelete}
            handleSubmit={this.handleSubmit}
          />
          <Carrito
            dataProduct={this.props.dataProduct}
            handleDelete={this.handleDelete}
            handleSubmit={this.handleSubmit}
            handleQuantity={this.handleQuantity}
            handleEditData={this.handleEditData}
            />
        </Container>
      </div>
           
           
    );
  }
}
           
           


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
