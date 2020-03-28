import React from "react"
import Navbar from "../components/Navbar"
import { connect } from "react-redux";


const mapStateToProps = (state, ownprops) => {
    return {
        cart:state.cart.dataProducts
    };
};




 class NavbarContainer extends React.Component{

   


    render(){
        return (
            <div>
                <Navbar
                    cart={this.props.cart}
                />
            </div>
        )
    }
}


export default connect(mapStateToProps)(NavbarContainer)