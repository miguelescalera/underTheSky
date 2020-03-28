import React from "react"
import Carrito from "../components/Carrito"
import { connect } from "react-redux";
import {getCart,deleteProductData, modifyDataProduct} from "../actions/cartActions"
import {IdsForOrders} from "../actions/orderActions"
import Container from 'react-bootstrap/Container'
import CheckoutCart from "../components/CheckoutCart"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const mapStateToProps=(state,ownProps)=>{
    return{
       dataProduct:state.cart.dataProducts,
       userProduct:state.cart.allproductsUser,
       fss:state.cart.fss
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getCart: ()=>dispatch(getCart()),
        deleteProductData:(id)=>dispatch(deleteProductData(id)),
        IdsForOrders:(id)=>dispatch(IdsForOrders(id)),
        modifyDataProduct:(id,quantity)=>dispatch(modifyDataProduct(id,quantity))
    }
}

 class NavbarContainer extends React.Component{
     constructor(props){
         super()

         this.handleDelete= this.handleDelete.bind(this)
         this.handleSubmit= this.handleSubmit.bind(this)
         this.handleQuantity= this.handleQuantity.bind(this)
     }
componentDidMount(){
    this.props.getCart()
}

handleDelete(id){
this.props.deleteProductData(id)
}

handleSubmit(id){
    this.props.IdsForOrders(id)
    this.props.history.push("/cart/checkout")
}

handleQuantity(id,quantity){
   
    if(quantity>=1){
        this.props.modifyDataProduct(id,quantity)
    }
       
}


    render(){
        return (
            <div>
                    
                <Container>
                <Row>
                <Col xs lg="8">
                    <Carrito
                    dataProduct={this.props.dataProduct}
                    userProduct={this.props.userProduct}
                    fss={this.props.fss}
                    handleDelete={this.handleDelete}
                    handleSubmit={this.handleSubmit}
                    handleQuantity={this.handleQuantity}
                    />
                </Col>
                <Col xs lg="4">
                    <CheckoutCart
                    dataProduct={this.props.dataProduct}
                    userProduct={this.props.userProduct}
                    fss={this.props.fss}
                    handleDelete={this.handleDelete}
                    handleSubmit={this.handleSubmit}
                    
                    />
                </Col>
                    
                </Row>
                </Container>
                
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);