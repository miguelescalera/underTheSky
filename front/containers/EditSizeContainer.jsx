import React from "react";
import Login from "../components/Login";
import { connect } from "react-redux";
import { userLogin, addLogin } from "../actions/LoginAction"
import { encrypt } from "../actions/RegisterAction"
import { Tabs, Tab, FormFile } from 'react-bootstrap'
import AddFrame from "../components/AddFrame";
import AddSize from '../components/AddSize'
import AddStyle from '../components/AddStyle'
import { newFrame, newSize, newStyle, deleteStyle, deleteFrame, deleteSize } from '../actions/adminActions'
import EliminarPropiedades from "../components/EliminarPropiedades";
import { fetchSize } from "../actions/productsActions";
import EditSize from '../components/EditSize'

const mapDispatchToProps = (dispatch, state) => {
    return {
        fetchSize: sizeId => dispatch(fetchSize(sizeId))
    }
}

const mapStateToProps = (state, ownprops) => {
    return {
        selectedSize: state.products.selectedSize
    }
}





class EditSizeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "",
            sizePrice: 0,
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchSize(id)
        this.setState({
            size: this.props.selectedSize.name,
            price: this.props.selectedSize.price
        })
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log('hola papu, gracias')
        newSize({
            name: this.state.size,
            price: this.state.sizePrice
        })
        this.props.history.push("/eladmin");

    }


    render() {
        const tabStyle = {
            marginBlockStart: '0rem'
        }

        return (
            <div>
                <EditSize handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSizeContainer);