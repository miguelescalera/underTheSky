import React from "react"
import Navbar from "../components/Navbar"
import { connect } from "react-redux";
import {logoutUser,userLogin,addLogin} from "../actions/LoginAction"
import {getCart,dataProducts,allproductsUser,fss} from "../actions/cartActions"
import {decrypt} from "../actions/RegisterAction"



const mapStateToProps = (state, ownprops) => {
    return {
        cart:state.cart.dataProducts,
        emailUser: state.user.user.email
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        getCart: ()=>dispatch(getCart()),
        logoutUser: ()=>dispatch(logoutUser()),
        dataProducts: ()=>dispatch(dataProducts([])),
        allproductsUser: ()=>dispatch(allproductsUser([])),
        fss: ()=>dispatch(fss([])),
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
       this.props.dataProducts()
       this.props.allproductsUser()
       this.props.fss()
    }
     
     


    render(){
        return (
            <div>
                <Navbar
                    cart={this.props.cart}
                    emailUser={this.props.emailUser}
                    handelLogout={this.handelLogout}
                />
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NavbarContainer)