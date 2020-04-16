import React from "react";
import AdminUsers from "../components/AdminUsers";
import { getUsers, changeStatus, deleteUser } from "../actions/adminActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { users: state.admin.allUsers };
};

const mapDispatchToProps = function (dispatch) {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

class AdminUsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleDelete=this.handleDelete.bind(this)
  }

  handleStatus(type, userid) {
    changeStatus(type, userid);
  }
  handleDelete(user) {
    deleteUser(user)
    this.props.getUsers()
  }
 


  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const usuarios = this.props.users;
    return (
      <div>
        <h3 className="titulopagina">Usuarios</h3>

        <AdminUsers
          usuarios={usuarios}
          handleStatus={this.handleStatus}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminUsersContainer);
