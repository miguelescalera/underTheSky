import React from "react";
import Login from "../components/Login";
import { connect } from "react-redux";
import { userLogin, addLogin } from "../actions/LoginAction"
import { encrypt } from "../actions/RegisterAction"
import { Tabs, Tab, FormFile } from 'react-bootstrap'
import AddFrame from "../components/AddFrame";
import AddSize from '../components/AddSize'
import AddStyle from '../components/AddStyle'
import { fetchStyle } from '../actions/productsActions'
import EliminarPropiedades from "../components/EliminarPropiedades";
import EditStyle from '../components/EditStyle'

const mapDispatchToProps = (dispatch, state) => {
    return {
        fetchStyle: sizeId => dispatch(fetchStyle(sizeId))
    }
}

const mapStateToProps = (state, ownprops) => {
    return {
        selectedStyle: state.products.selectedStyle
    }
}





class EditStyleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styleName: '',
            styleColor: '',
            styleImg: null,
            styleTipo: '',
            styleSigno: 'n/a'
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleStyleSubmit = this.handleStyleSubmit.bind(this)
    }


    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchStyle(id)

    }

    handleChange(e) {

        const key = e.target.name;
        const value = e.target.value;
        console.log(e.target.name, e.target.value);
        this.setState({
            [key]: value
        });

    }

    handleStyleFile(e) {
        console.log(e.target.files[0]);
        this.setState({ styleImg: e.target.files[0] })
    }

    handleStyleSubmit(e) {

        e.preventDefault();
        const styleUpload = new FormData()
        styleUpload.append("styleImg", this.state.styleImg)
        styleUpload.append("styleName", this.state.styleName)
        styleUpload.append("styleColor", this.state.styleColor)
        styleUpload.append("styleTipo", this.state.styleTipo)
        styleUpload.append("styleSigno", this.state.styleSigno)

        newStyle(styleUpload)
        this.props.history.push("/eladmin");
    }


    render() {
        const tabStyle = {
            marginBlockStart: '0rem'
        }

        return (
            <div>
                <EditStyle handleChange={this.handleChange} handleStyleSubmit={this.handleSubmit} handleStyleFile={this.handleStyleFile} state={this.state} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStyleContainer);