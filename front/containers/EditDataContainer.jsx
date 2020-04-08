import React from "react";
import { connect } from "react-redux";
import { dataProduct,modifyData} from "../actions/productDataActions"
import { fetchProduct } from '../actions/productsActions'
import FormData from '../components/FormData'
import { getCart } from "../actions/cartActions"

const mapDispatchToProps = (dispatch, state) => {
    return {
        //modifyData:(data)=>dispatch(modifyData(data)),
        dataProduct: (data) => dispatch(dataProduct(data)),
        selectedProducts: (product) => dispatch(fetchProduct(product)),
        getCart: () => dispatch(getCart()),
        
    };
}


const mapStateToProps = (state, ownprops) => {
    return {
        dataToEdit: state.dataProducts.dataProduct
    };
};
        

let arrOfData=[]


class FormDataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.dataToEdit
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
        modifyData(this.state)
        .then((res)=>{
            console.log("RES:",res)
             this.props.dataProduct(res.data)
             if(!this.props.userEmail){
                let dataWithoutUser=res.data
                if(arrOfData.length!==1){
                    arrOfData=JSON.parse(localStorage.getItem("dataWithoutUser"))

                    arrOfData.map((e,i)=>{
                        if(e.id===res.data.id){
                            arrOfData.splice(i,1)
                          arrOfData.push(dataWithoutUser)
                        }
                    })
                          

                    localStorage.setItem("dataWithoutUser",JSON.stringify(arrOfData))
                }
                else{
                    arrOfData.push(dataWithoutUser)
                    localStorage.setItem("dataWithoutUser",JSON.stringify(arrOfData))
                }
            }
        })
        .then(()=>{
            if(this.props.userEmail){
                this.props.getCart()
            }
          }).then(()=>this.props.history.push("/cart"))
          }

          render() {
                return (
                    <div>
                        <h3 className="titulopagina">Información</h3>
                        <FormData
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            state={this.state}
                        />
                    </div>
                );
            }
        }
        
        export default connect(mapStateToProps, mapDispatchToProps)(FormDataContainer);
                   
            
            
         
               
    
    
              
            
        

    