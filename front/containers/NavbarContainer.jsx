import React from "react"
import Navbar from "../components/Navbar"
import { connect } from "react-redux";
import Headroom from 'react-headroom'
import {logoutUser,userLogin,addLogin} from "../actions/LoginAction"
import {getCart,cart} from "../actions/cartActions"
import {decrypt} from "../actions/RegisterAction"



const mapStateToProps = (state, ownprops) => {
    return {
        cartItems:state.cart.dataProducts,
        User: state.user.user
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        getCart: ()=>dispatch(getCart()),
        logoutUser: ()=>dispatch(logoutUser()),
        cart: ()=>dispatch(cart([],[],[])),
        addLogin:(user)=>dispatch(addLogin(user))
    }
}
        


 class NavbarContainer extends React.Component{
     constructor(props){
         super()
         this.handelLogout= this.handelLogout.bind(this)
     }

     componentDidMount(){
         let userPassword= localStorage.getItem("pass")
         let email=localStorage.getItem("email")
         
         if(!this.props.emailUser&&email){
            userLogin({email:email,password:decrypt(userPassword)})
            .then(user=> this.props.addLogin(user.data)).then(()=>{
                this.props.getCart()
              })
              .catch(err=>console.error(err))
         }
         
     }
         
        

   handelLogout(){
       localStorage.removeItem("pass")
       localStorage.removeItem("email")
       this.props.logoutUser()
       this.props.cart()
       
    }
     
     


    render(){
        return (
            <Headroom>
                <Navbar
                    cartItems={this.props.cartItems}
                    User={this.props.User}
                    handelLogout={this.handelLogout}
                />
            </Headroom>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NavbarContainer)