import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import PrincipalContainer from "../containers/PrincipalContainer";

import { connect } from "react-redux"


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div id="main">
        <Switch>
          <Route path="/home" exact component={PrincipalContainer} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
};

export default connect(null, null)(Main)