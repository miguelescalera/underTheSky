import React from "react";
import Carrito from "../components/Carrito";
import { connect } from "react-redux";
import {getCart,deleteProductData, modifyDataProduct,cartWithoutUser} from "../actions/cartActions"
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
  }
  componentDidMount() {
    if (this.props.userEmail) {
      this.props.getCart();
    }
    else if(JSON.parse(localStorage.getItem("dataWithoutUser"))){
        let dataProduct= JSON.parse(localStorage.getItem("dataWithoutUser"))
        this.props.cartWithoutUser(dataProduct)
      }}
       
    
       
       

  handleDelete(id) {
    this.props.deleteProductData(id);
  }

  handleSubmit(id) {
    this.props.IdsForOrders(id);
    this.props.history.push("/cart/checkout");
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
            />
        </Container>
      </div>
           
           
    );
  }
}
           
           


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
