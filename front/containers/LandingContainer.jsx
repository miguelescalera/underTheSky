import React from 'react'
import Landing from '../components/Landing'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getCart} from "../actions/cartActions"

const mapStateToProps = function(state) {
    return {
        // Aqui traes props desde el store de react-redux
    };
  };

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getCart: ()=>dispatch(getCart())
    };
  };




class LandingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)

    }

  componentDidMount(){
      this.props.getCart()
      }

    handleClick(e) {
        this.props.history.push('/products/getproducts')
      }

    render() {
        return (
                <Landing handleClick={this.handleClick} />
        )
    }
}

  
  
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
  );

