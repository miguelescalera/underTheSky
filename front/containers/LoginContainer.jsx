import React from "react";
import Login from "../components/Login";
import { connect } from "react-redux";
import {userLogin} from "../actions/LoginAction"

const mapDispatchToProps = (dispatch, state) => {
  return {
    userLogin: (user)=>{dispatch(userLogin(user))}
  };
};

const mapStateToProps = (state, ownprops) => {
  return {};
};

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value
    });
    
  }

  handleSubmit(e) {
    console.log("esty en el handleSubmit",this.state)
    e.preventDefault();
    this.props.userLogin(this.state)
    this.props.history.push("/home")
  }

  render() {
    return (
      <div>
        <Login
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);
