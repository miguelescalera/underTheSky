import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import { selectStyle } from '../actions/productsActions'

// ACCIONES 
import {
  getAllStyles,
  allStyles
} from "../actions/productsActions";


import { runInThisContext } from "vm";


const mapStateToProps = (state, ownprops) => {
  return {
    styles:state.products.allStyles
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    allStyles:data => dispatch(allStyles(data)),
    selectStyle: data=>dispatch(selectStyle(data))


  };
};







class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    getAllStyles()
    .then(result=>{
      this.props.allStyles(result.data)
    })
  }
      
      

    

  

  handleClick(style) {
    console.log("style",style)
    this.props.selectStyle(style)
   this.props.history.push('/product')
    
  }
    
      
   
    
    
    
     


  render() {
    return (
      <div>
        <h3 className="titulopagina">Nuestros estilos</h3>
        <Products handleClick={this.handleClick} cart={this.props.cart} styles={this.props.styles} />
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
