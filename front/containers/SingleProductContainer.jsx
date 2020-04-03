import React from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import { getAllfss,
     fetchNewProduct, 
     selectStyle, 
     SelectedProducts 
     ,selectFrame,
     selectSize,
     Allfss
    } from "../actions/productsActions";


const mapStateToProps = (state, ownProps) => {
    return {
        frames: state.products.Allfss.frames,
        sizes: state.products.Allfss.sizes,
        style: state.products.selectedStyle,
        selectedProduct: state.products.SelectedProduct
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectFrame: (frame) => dispatch(selectFrame(frame)),
        selectSize: (size) => dispatch(selectSize(size)),
        selectStyle: data => dispatch(selectStyle(data)),
        getAllfss: () => dispatch(getAllfss()),
        fetchNewProduct: data => dispatch(fetchNewProduct(data)),
        Allfss:data => dispatch(Allfss(data))
    };
};

class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            digital: true,
            frameId: 1,
            sizeId: 1,
            styleId: 1
        };
        this.handleFrame = this.handleFrame.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
        

    componentDidMount() {
        this.props.getAllfss()
        .then(result=>{
            this.props.Allfss(result.data)
            this.props.selectFrame(result.data.frames[0])
            this.props.selectSize(result.data.sizes[0])
        })
           
        let styleId = localStorage.getItem('selectedStyle')
        if (styleId) {
            this.props.selectStyle(styleId)
        }
       
    }


    handleFrame(frame) {
        this.props.selectFrame(frame)
    }
       
    handleSize(size) {
       this.props.selectSize(size)
    }
        
       
    

   
    handleClick(e) {
        e.preventDefault();
        this.props.fetchNewProduct({
            digital: true,
            frameId: this.state.frameId,
            sizeId: this.state.sizeId,
            styleId: parseInt(this.props.style)
        })
            .then((product) => localStorage.setItem('selectedProduct', product.id))
            .then(() => this.props.history.push("/productData"))

    }

    render() {

        return (
            <div>
                <h3 className="titulopagina">Personalizalo</h3>

                <SingleProduct
                    handleColor={this.handleColor}
                    handleSize={this.handleSize}
                    handleFrame={this.handleFrame}
                    sizes={this.props.sizes}
                    frames={this.props.frames}
                    styles={this.props.styles}
                    handleClick={this.handleClick}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleProductContainer);
