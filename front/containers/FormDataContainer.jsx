import React from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import { createDataProduct, dataProduct,modifyData} from "../actions/productDataActions"
import { fetchProduct } from '../actions/productsActions'
import FormData from '../components/FormData'
import { getCart,cartWithoutUser} from "../actions/cartActions"

const mapDispatchToProps = (dispatch, state) => {
    return {
        cartWithoutUser: (data)=>dispatch(cartWithoutUser(data)),
        dataProduct: (data) => dispatch(dataProduct(data)),
        selectedProducts: (product) => dispatch(fetchProduct(product)),
        getCart: () => dispatch(getCart()),

    };
}


const mapStateToProps = (state, ownprops) => {
    return {
        product: state.products.selectedProduct,
        userEmail: state.user.user.email,
        selectedStyle: state.products.selectedStyle,
        selectedFrame: state.products.selectedFrame,

        selectedSize:state.products.selectedSize,
        digital:state.products.digital,

        selectedSize: state.products.selectedSize,

    };
};

let arrOfData = []
let arrOfProduct = []

class FormDataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            digital: "",
            date: '',
            content: '',
            name: '',
            time: '',
            language: '',
            emailClient: '',
            size: "",
            style: "",
            color: "",
            frame: "",


        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
        this.PreviousStep= this.PreviousStep.bind(this)
    }



    handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value
        });
    }
    onChange = date => this.setState({ date })

    handleSubmit(e) {
        e.preventDefault();


        createDataProduct(

             {
                 date: this.state.date,
                 content: this.state.content,
                 name: this.state.name,
                 time: this.state.time,
                 language: this.state.language,
                 emailClient: this.state.emailClient,
                 digital:this.props.digital,
                 size:this.props.selectedSize.name,
                 frame:this.props.selectedFrame.name,
                 style:this.props.selectedStyle.name,
                 price:this.props.selectedSize.price,
                 styleId:this.props.selectedStyle.id
             }
         ).then((res)=>{
             this.props.dataProduct(res.data)
             if(!this.props.userEmail){
                let dataWithoutUser=res.data
                
                if(arrOfData.length!==0){
                   
                    arrOfData=JSON.parse(localStorage.getItem("dataWithoutUser"))
                    arrOfData.push(dataWithoutUser)
                    this.props.cartWithoutUser(arrOfData)
                    localStorage.setItem("dataWithoutUser",JSON.stringify(arrOfData))
                 


                }
                else {
                    arrOfData.push(dataWithoutUser)

                    this.props.cartWithoutUser(arrOfData)
                    localStorage.setItem("dataWithoutUser",JSON.stringify(arrOfData))

                    localStorage.setItem("dataWithoutUser", JSON.stringify(arrOfData))

                }
            }

        })
        .then(()=>{
            if(this.props.userEmail){
                this.props.getCart()
            }
          }).then(()=>{
              this.props.nextStep()
            })
        }
          
           

    PreviousStep(e){
        e.preventDefault()
        this.props.previousStep()
    }
         
          render() {
              
                return (
                    <div>
                        <h3 className="titulopagina">Información</h3>
                        <FormData
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            PreviousStep={this.PreviousStep}
                            onChange={this.onChange}
                             date={this.state.date}

                            state={this.state}
                        />
                    </div>
                );
            }
        }
        
        export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormDataContainer))
               
    
                   
    
              
            
        

    
