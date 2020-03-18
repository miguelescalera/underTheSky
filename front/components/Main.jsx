import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LandingContainer from "../containers/LandingContainer";
import { connect } from "react-redux";
import NavbarContainer from "../containers/NavbarContainer";
import FooterContainer from "../containers/FooterContainer";
import ProductsContainer from "../containers/ProductsContainer";
import SingleProductContainer from "../containers/SingleProductContainer"

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <NavbarContainer />
        <Switch>
          <Route path="/home" exact component={LandingContainer} />
          <Route path="/products/getProducts" exact component={ProductsContainer}/>
          <Route path="/products/:id" exact component={SingleProductContainer} />
          <Redirect from="/" to="/home" />
        </Switch>
        <FooterContainer />
      </div>
    );
  }
}

export default connect(null, null)(Main);
