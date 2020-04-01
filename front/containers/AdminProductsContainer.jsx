import React from "react";
import Login from "../components/Login";
import { connect } from "react-redux";
import { userLogin, addLogin } from "../actions/LoginAction"
import { encrypt } from "../actions/RegisterAction"
import { Tabs, Tab } from 'react-bootstrap'
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
            sizePrice: "",
            frame: "",
            framePrice: '',
            styleName: '',
            color: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSizeSubmit = this.handleSizeSubmit.bind(this)
        this.handleStyleSubmit = this.handleStyleSubmit.bind(this)
    }
    checkboxLogin() {
        this.setState({ checkbox: !this.state.checkbox })
    }

    handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value
        });

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('hola papu, gracias')
        newFrame({
            name: this.state.frame,
            price: this.state.framePrice
        })
    }

    handleSizeSubmit(e) {
        e.preventDefault();
        console.log('hola papu, gracias')
        newSize({
            name: this.state.size,
            price: this.state.sizePrice
        })
    }

    handleStyleSubmit(e) {
        e.preventDefault();
        console.log('hola papu, gracias')
        newStyle({
            name: this.state.styleName,
            price: this.state.color
        })
    }


    render() {

        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="frame" title="Add Frame">
                    <AddFrame handleChange={this.handleChange}
                        checkboxLogin={this.checkboxLogin}
                        handleSubmit={this.handleSubmit}
                        alertNull={this.state.alertNull}
                        alertPass={this.state.alertPass} />
                </Tab>
                <Tab eventKey="size" title="Add Size">
                    <AddSize handleChange={this.handleChange}
                        checkboxLogin={this.checkboxLogin}
                        handleSizeSubmit={this.handleSizeSubmit}
                        alertNull={this.state.alertNull}
                        alertPass={this.state.alertPass} />
                </Tab>
                <Tab eventKey="style" title="Add Style">
                    <AddStyle handleChange={this.handleChange}
                        checkboxLogin={this.checkboxLogin}
                        handleStyleeSubmit={this.handleStyleSubmit}
                        alertNull={this.state.alertNull}
                        alertPass={this.state.alertPass} />
                </Tab>

            </Tabs>
        );
    }
}

export default connect(null, mapDispatchToProps)(AdminProductsContainer);