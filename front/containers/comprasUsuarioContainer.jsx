import React from "react"
import {connect} from "react-redux"
import ComprasUsuario from "../components/comprasUsuario"
import {getOrderUser} from "../actions/orderActions"
const mapStateToProps= state =>{
    return {
        orders:state.orders.userOrders,
        user:state.user.user
    }
}

const mapDispatchToProps = dispatch=>{
    return{
       
        getOrderUser:()=>dispatch(getOrderUser())
    }
}

class perfilUser extends React.Component{
constructor(){
    super()
}
componentDidMount(){
    this.props.getOrderUser()
   
}
  
      
  

render(){
    return(
<ComprasUsuario orders={this.props.orders} user={this.props.user}/>
        )
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(perfilUser)
    



