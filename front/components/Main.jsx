import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LandingContainer from "../containers/LandingContainer";
import { connect } from "react-redux";
import NavbarContainer from "../containers/NavbarContainer";
import FooterContainer from "../containers/FooterContainer";
import ProductsContainer from "../containers/ProductsContainer";
import SingleProductContainer from "../containers/SingleProductContainer"
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer"
import FormDataContainer from '../containers/FormDataContainer'
import CarritoContainer from "../containers/CarritoContainer"

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
          <Route path="/products/getProducts" exact component={ProductsContainer} />
          <Route path="/products" exact component={SingleProductContainer} />
          <Route path="/login" exact component={LoginContainer} />
          <Route path="/register" exact component={RegisterContainer} />
          <Route path="/product" exact component={SingleProductContainer} />
          <Route path='/productData' exact component={FormDataContainer} />
          <Route path='/cart' exact component={CarritoContainer} />

          <Redirect from="/" to="/home" />
        </Switch>
        <FooterContainer />
      </div>
    );
  }
}

export default connect(null, null)(Main);
