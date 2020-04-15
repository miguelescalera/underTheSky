import React from "react";
import { connect } from "react-redux";
import StepWizard from 'react-step-wizard';
import SingleProductContainer from "./SingleProductContainer"
import FormDataContainer from "./FormDataContainer"
import CarritoContainer from "./CarritoContainer"
import CheckoutContainer from "./CheckoutContainer"








class StepWizardContainer extends React.Component {
    constructor() {
        super()
    }




    render() {
        return (
            <div>
                <StepWizard>
                    <SingleProductContainer />
                    <FormDataContainer />
                    <CarritoContainer />
                    <CheckoutContainer />
                </StepWizard>
            </div>
        )
    }
}





export default connect()(StepWizardContainer);
