import React from "react"
import Carrito from "../components/Carrito"
import { connect } from "react-redux";
import {getCart} from "../actions/cartActions"

const mapStateToProps=(state,ownProps)=>{
    return{
       dataProduct:state.cart.dataProducts,
       userProduct:state.cart.allproductsUser,
       fss:state.cart.fss
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getCart: ()=>dispatch(getCart())
    }
}

 class NavbarContainer extends React.Component{
     constructor(props){
         super()
     }
componentDidMount(){
    this.props.getCart()
}

    render(){
        return (
            <div>
                <Carrito
                dataProduct={this.props.dataProduct}
                userProduct={this.props.userProduct}
                fss={this.props.fss}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);