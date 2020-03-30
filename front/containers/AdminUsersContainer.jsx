import React from "react"
import AdminUsers from "../components/AdminUsers"
import {getUsers} from "../actions/adminActions"
import {connect} from "react-redux"

const mapStateToProps = state => {
    return {users: state.admin.allUsers}
};

const mapDispatchToProps = function(dispatch){  
  return {
    getUsers: () => dispatch(getUsers())
  }
};

class AdminUsersContainer extends React.Component{
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.getUsers()
    }

    render(){
        const usuarios=this.props.users
        return(
            <div>
                <AdminUsers usuarios={usuarios} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsersContainer)