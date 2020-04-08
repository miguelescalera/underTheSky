import React from "react";
import Login from "../components/Login";
import { connect } from "react-redux";
import { userLogin, addLogin } from "../actions/LoginAction"
import { encrypt } from "../actions/RegisterAction"
import { Tabs, Tab,FormFile } from 'react-bootstrap'
import AddFrame from "../components/AddFrame";
import AddSize from '../components/AddSize'
import AddStyle from '../components/AddStyle'
import { newFrame, newSize, newStyle } from '../actions/adminActions'


const mapDispatchToProps = (dispatch, state) => {
    return {

    };
};

const mapStateToProps = (state, ownprops) => {
    return {


    };
};

class AdminProductsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            size: "",
            sizePrice: 0,
            frame: "",
            framePrice: 0,
            frameImg:null,
            styleName: '',
            styleColor: '',
            styleImg:null,
            styleTipo:'',
            styleSigno:'n/a'

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSizeSubmit = this.handleSizeSubmit.bind(this)
        this.handleStyleSubmit = this.handleStyleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleStyleFile = this.handleStyleFile.bind(this)

    }


    checkboxLogin() {
        this.setState({ checkbox: !this.state.checkbox })
    }

    handleFile(e){
        console.log(e.target.files[0]);
        this.setState({frameImg:e.target.files[0]})
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


    handleSizeSubmit(e) {
        e.preventDefault();
        console.log('hola papu, gracias')
        newSize({
            name: this.state.size,
            price: this.state.sizePrice
        })
        this.props.history.push("/eladmin");

    }

    handleStyleFile(e){
        console.log(e.target.files[0]);
        this.setState({styleImg:e.target.files[0]})
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

        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="frame" title="Agregar marco">
                    <AddFrame handleChange={this.handleChange}
                        checkboxLogin={this.checkboxLogin}
                        handleSubmit={this.handleSubmit}
                        handleFile={this.handleFile}
                        alertNull={this.state.alertNull}
                        alertPass={this.state.alertPass} />
                </Tab>
                <Tab eventKey="size" title="Agregar tamaño">
                    <AddSize handleChange={this.handleChange}
                        checkboxLogin={this.checkboxLogin}
                        handleSizeSubmit={this.handleSizeSubmit}
                        alertNull={this.state.alertNull}
                        alertPass={this.state.alertPass} />
                </Tab>
                <Tab eventKey="style" title="Agregar estilo">
                    <AddStyle handleChange={this.handleChange}
                        handleStyleFile = {this.handleStyleFile}
                        checkboxLogin={this.checkboxLogin}
                        handleStyleSubmit={this.handleStyleSubmit}
                        alertNull={this.state.alertNull}
                        alertPass={this.state.alertPass}
                        styleName={this.state.styleName}
                        styleImg={this.state.styleImg} />
                </Tab>

            </Tabs>
        );
    }
}

export default connect(null, mapDispatchToProps)(AdminProductsContainer);