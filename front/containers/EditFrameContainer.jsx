import React from "react";
import Login from "../components/Login";
import { connect } from "react-redux";
import { userLogin, addLogin } from "../actions/LoginAction"
import { encrypt } from "../actions/RegisterAction"
import { Tabs, Tab, FormFile } from 'react-bootstrap'
import AddFrame from "../components/AddFrame";
import AddSize from '../components/AddSize'
import AddStyle from '../components/AddStyle'
import { fetchFrame } from '../actions/productsActions'
import EliminarPropiedades from "../components/EliminarPropiedades";
import EditFrame from '../components/EditFrame'

const mapDispatchToProps = (dispatch, state) => {
    return {
        fetchFrame: sizeId => dispatch(fetchFrame(sizeId))
    }
}

const mapStateToProps = (state, ownprops) => {
    return {
        selectedFrame: state.products.selectedFrame
    }
}





class EditFrameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frame: "",
            framePrice: 0,
            frameImg: null,
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchFrame(id)
        this.setState({
            frame: this.props.selectedFrame.name,
            price: this.props.selectedFrame.price
        })
    }

    handleChange(e) {

        const key = e.target.name;
        const value = e.target.value;
        console.log(e.target.name, e.target.value);
        this.setState({
            [key]: value
        });

    }

    handleSubmit(e) {
        e.preventDefault();
        const frameUpload = new FormData()
        frameUpload.append("frameImg", this.state.frameImg)
        frameUpload.append("frame", this.state.frame)
        frameUpload.append("framePrice", this.state.framePrice)


        newFrame(frameUpload)
        this.props.history.push("/eladmin");

    }


    render() {
        const tabStyle = {
            marginBlockStart: '0rem'
        }

        return (
            <div>
                <EditFrame handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFrameContainer);