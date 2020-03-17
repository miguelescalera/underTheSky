import React from 'react'
import Principal from '../components/Principal'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class MapaContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
                <Principal />
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
    connect(mapStateToProps, mapDispatchToProps)(MapaContainer)
  );

