import React from "react"
import AdminOrdenes from "../components/AdminOrdenes"
import {connect} from "react-redux"
import { getOrders, fetchDataProducts} from "../actions/adminActions";



const mapStateToProps = state => {
    return {Orders: state.admin.allOrders, DataProducts: state.admin.allDataProducts}
};

const mapDispatchToProps = function(dispatch){  
  return {
    getOrders: () => dispatch(getOrders()),
    fetchDataProducts:()=>dispatch(fetchDataProducts())
  }
};

class AdminOrdenesContainer extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getOrders()
        this.props.fetchDataProducts()
    }

    render(){
        
        // const Ordenes= this.props.Orders
        return(
            <div>
                <AdminOrdenes  
                // Ordenes={Ordenes}
                />
            </div>
        )
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(AdminOrdenesContainer)