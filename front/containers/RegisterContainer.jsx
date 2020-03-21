import React from "react"
import Register from "../components/Register"
import {userRegister} from "../actions/RegisterAction"
import {connect} from "react-redux"


const mapDispatchToProps = (dispatch, state) => {
    return {
        userRegister: (user)=>dispatch(userRegister(user))
    }
}
const mapStateToProps = function (state) {
    return {}
}


class RegisterContainer extends React.Component{
    constructor(){
        super()
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            password:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }

handleChange(e) {
    let value = e.target.value
    let key = e.target.name
    this.setState({ [key]: value })
}

handleSubmit(evento){
    console.log("entre", this.state)
    evento.preventDefault()
    this.props.userRegister(this.state)
    //aca va el history push para redirigir al login
    // this.props.history.push("/login")
}



        render(){
        return(
            <div>
                <Register 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default connect (null, mapDispatchToProps)(RegisterContainer)