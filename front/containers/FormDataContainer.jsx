import React from "react";
import { connect } from "react-redux";
import { createDataProduct } from "../actions/productDataActions"
import FormData from '../components/FormData'

const mapDispatchToProps = (dispatch, state) => {
    return {
        createDataProduct: (data) => { dispatch(createDataProduct(data)) }
    };
};

const mapStateToProps = (state, ownprops) => {
    return {};
};


class FormDataContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            date: '',
            content: '',
            name: '',
            time: '',
            language: '',
            emailClient: ''
            

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
        e.preventDefault();
        this.props.createDataProduct(this.state)
        this.props.history.push("/home")
    }

    render() {
        return (
            <div>
                <FormData
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(FormDataContainer);