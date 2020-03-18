import React from 'react'
import Landing from '../components/Landing'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class LandingContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
                <Landing />
        )
    }
}

const mapStateToProps = function(state) {
    return {
        // Aqui traes props desde el store de react-redux
    };
  };

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //Aqui envias cosas al store
    };
  };
  
  
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
  );

