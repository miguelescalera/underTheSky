import React from "react"
import AdminOrdenes from "../components/AdminOrdenes"
import {connect} from "react-redux"




class AdminOrdenesContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <AdminOrdenes />
            </div>
        )
    }
}
export default connect (null,null)(AdminOrdenesContainer)









// import React from "react"
// import AdminOrdenes from "../components/AdminOrdenes"
// import {connect} from "react-redux"
// import { getOrders, fetchDataProducts} from "../actions/adminActions";

// const mapStateToProps = state => {
//     return {
//         Orders: state.admin.allOrders, 
//         DataProducts: state.admin.allDataProducts
//     }
// };

// const mapDispatchToProps = function(dispatch){  
//   return {
//     getOrders: () => dispatch(getOrders()),
//     // fetchDataProducts:()=>dispatch(fetchDataProducts())
//   }
// };

// class AdminOrdenesContainer extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//           input:""
//         }
//     }
//     componentDidMount(){
//         this.props.getOrders()
//         // this.props.fetchDataProducts()
//     }
    
//     handleChange(event){
//         console.log("este es mi valor",input)
//         this.setState({ input:event.target.value})
//     }
//     handleSubmit(event){
//        event.preventDefault()
//        setInput(this.state.input) 
//      }

//     render(){
//         //const Ordenes= this.props.Orders
//         return(
//             <div>
//                 <AdminOrdenes 
//                 handleChange={this.handleChange}
//                 handleSubmit={this.handleSubmit} 
//                 //Ordenes={this.Ordenes}
//                 />
//             </div>
//         )
//     }
// }
// export default connect (mapStateToProps, mapDispatchToProps)(AdminOrdenesContainer)