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
    allStyles:data => dispatch(allStyles(data))


  };
};





const displays = [
  {
    imgURL: 'https://i.imgur.com/Usradoq.png',
    styleId: 1,
    name: "classic"
  },
  {
    imgURL: 'https://i.imgur.com/oDx7xxC.png',
    styleId: 2,
    name: "minimalista"
  },
  {
    imgURL: 'https://i.imgur.com/oH886qa.png',
    styleId: 3,
    name: "polaroid"
  },
];

// const mapStateToProps = function (state) {
//     return {
//         products: state.products.getDisplays,
//     };
// };

const style={
  styleId: 5,
  name: "zodiac"
}
class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log('hola, este es el estado',this.props.styles)

    getAllStyles()
    .then(result=>{
      console.log('EEEE este es el resulti', result);
      
        this.props.allStyles(result.data)

    })
}
  

  handleClick(e) {
      
   localStorage.setItem("selectedStyle",JSON.stringify(style))
   this.props.history.push('/product')
    
  }
    
   
    
    
    
     


  render() {
    return (
      <div>
        <h3 className="titulopagina">Nuestros estilos</h3>
        <Products products={displays} handleClick={this.handleClick} cart={this.props.cart} styles={this.props.styles} />
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
