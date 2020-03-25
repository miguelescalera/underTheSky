import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Products from "../components/Products";

// ACCIONES 
import {
    getDisplays
} from "../actions/adminActions";



  
  const displays = [
    {
      imgURL: 'https://gradientjoy.com/300x400?id=20',
      styleId: 1,
      name:"classic"
    },
     {
      imgURL: 'https://gradientjoy.com/300x400?id=23',
      styleId: 2,
      name:"minimalista"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=15',
      styleId: 3,
      name:"polaroid"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=8',
      styleId: 4,
      name:"full color"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=39',
      styleId: 5,
      name:"zodiac"
    },
  
  
    {
      imgURL: 'https://gradientjoy.com/300x400?id=20',
      styleId: 1,
      name:"classic"
    },
     {
      imgURL: 'https://gradientjoy.com/300x400?id=23',
      styleId: 2,
      name:"minimalista"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=15',
      styleId: 3,
      name:"polaroid"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=8',
      styleId: 4,
      name:"full color"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=39',
      styleId: 5,
      name:"zodiac"
    },
  
  
    {
      imgURL: 'https://gradientjoy.com/300x400?id=20',
      styleId: 1,
      name:"classic"
    },
     {
      imgURL: 'https://gradientjoy.com/300x400?id=23',
      styleId: 2,
      name:"minimalista"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=15',
      styleId: 3,
      name:"polaroid"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=8',
      styleId: 4,
      name:"full color"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=39',
      styleId: 5,
      name:"zodiac"
    },
  
    {
      imgURL: 'https://gradientjoy.com/300x400?id=20',
      styleId: 1,
      name:"classic"
    },
     {
      imgURL: 'https://gradientjoy.com/300x400?id=23',
      styleId: 2,
      name:"minimalista"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=15',
      styleId: 3,
      name:"polaroid"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=8',
      styleId: 4,
      name:"full color"
    },
    {
      imgURL: 'https://gradientjoy.com/300x400?id=39',
      styleId: 5,
      name:"zodiac"
    },
  ];

// const mapStateToProps = function (state) {
//     return {
//         products: state.products.getDisplays,
//     };
// };






class ProductsContainer extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e) {
        //aqui pasa al siguiente paso y carga el estilo desde aca 
    }

    render() {
        return (
            <div>
                <h3 className="d-flex justify-content-center" style={{ marginBlockStart: "1rem" }}>Nuestros estilos</h3>
                <Products products={displays} handleClick={this.handleClick} cart={this.props.cart} />
            </div>
        );
    }
}
export default connect()(ProductsContainer);
