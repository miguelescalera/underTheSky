import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LandingContainer from "../containers/LandingContainer";
import { connect } from "react-redux";
import NavbarContainer from "../containers/NavbarContainer";
import FooterContainer from "../containers/FooterContainer";
import ProductsContainer from "../containers/ProductsContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import FormDataContainer from "../containers/FormDataContainer";
import AdminOrdenesContainer from "../containers/AdminOrdenesContainer";
import AdminUsersContainer from "../containers/AdminUsersContainer";
import CarritoContainer from "../containers/CarritoContainer";
import CheckoutContainer from "../containers/CheckoutContainer";
import Img from "react-bootstrap/Image";
import "../../back/public/global.css";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const generalBackground = {
  position: "fixed",
  backgroundImage: "url(/src/img/fondo-general.png)",
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  backgroundAttachment: "scroll",
  backgroundPosition: "center",
  height: "100vh",
  top: 0,
  left: 0,
  width: "100vw",
  zIndex: -5
};

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        {/* <Img id="fondo-general" src="/src/img/fondo-general.png"></Img> */}
        <div id="fondo" style={generalBackground}></div>
        <NavbarContainer />
        <Switch>
          <Route path="/home" exact component={LandingContainer} />
          <Route
            path="/products/getProducts"
            exact
            component={ProductsContainer}
          />
          <Route path="/products" exact component={SingleProductContainer} />
          <Route path="/login" exact component={LoginContainer} />
          <Route path="/register" exact component={RegisterContainer} />
          <Route path="/product" exact component={SingleProductContainer} />
          <Route path="/productData" exact component={FormDataContainer} />
          <Route path="/cart" exact component={CarritoContainer} />
          <Route path="/cart/checkout" exact component={CheckoutContainer} />
          <Route
            path="/admin/getOrders"
            exact
            component={AdminOrdenesContainer}
          />
          <Route path="/admin/getUsers" exact component={AdminUsersContainer} />
          <Redirect from="/" to="/home" />
        </Switch>
        <FooterContainer />
      </div>
    );
  }
}

export default connect(null, null)(Main);
