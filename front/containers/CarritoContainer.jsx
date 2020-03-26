import React from "react"
import Carrito from "../components/Carrito"
import { connect } from "react-redux";
import {getCart,deleteProductData} from "../actions/cartActions"

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
        deleteProductData:(id)=>dispatch(deleteProductData(id))
    }
}

 class NavbarContainer extends React.Component{
     constructor(props){
         super()

         this.handleDelete= this.handleDelete.bind(this)
     }
componentDidMount(){
    this.props.getCart()
}

handleDelete(id){
this.props.deleteProductData(id)
}

    render(){
        return (
            <div>
                <Carrito
                dataProduct={this.props.dataProduct}
                userProduct={this.props.userProduct}
                fss={this.props.fss}
                handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);