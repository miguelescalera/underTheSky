import React from "react"
import Navbar from "../components/Navbar"
import { connect } from "react-redux";
import Headroom from 'react-headroom'


const mapStateToProps = (state, ownprops) => {
    return {
        cart:state.cart.dataProducts
    };
};




 class NavbarContainer extends React.Component{

   


    render(){
        return (
            <Headroom>
                <Navbar
                    cart={this.props.cart}
                />
            </Headroom>
        )
    }
}


export default connect(mapStateToProps)(NavbarContainer)