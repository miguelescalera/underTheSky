import React from "react";
import Checkout from "../components/Checkout";
import { connect } from "react-redux";
import { orderInProcess } from "../actions/orderActions"


const mapDispatchToProps = (dispatch, state) => {
    return {
        orderInProcess: (data) => { dispatch(orderInProcess(data)) }
    };
};

const mapStateToProps = (state, ownprops) => {
    return {
        userEmail:state.user.user.email,
        nameUser:state.user.user.firstName,
        lastNameUser:state.user.user.lastName
    };
};


class CheckoutContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            address:"",
            country:"",
            state:"",
            city:"",
            postCode:"",
           
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEncuentro(e){
        console.log("llega al handleEncontro")
        e.preventDefault()
    }


    handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.orderInProcess(this.state)
        //this.props.history.push("/pay")
    }

    render() {
        return (
            <div>
                <Checkout
                    handleEncuentro={this.handleEncuentro}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    userEmail={this.props.userEmail}
                    nameUser={this.props.nameUser}
                    lastNameUser={this.props.lastNameUser}
                />
            </div>
        );
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);