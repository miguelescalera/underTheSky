import React from "react"
import SingleProduct from "../components/SingleProduct"
import { connect } from "react-redux"
import { getAllfss, fetchNewProduct } from "../actions/productsActions"

const mapStateToProps = (state, ownProps) => {
    return {

        frames: state.products.Allfss.frames,
        sizes: state.products.Allfss.sizes,
        styles: state.products.Allfss.styles

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getAllfss: () => dispatch(getAllfss()),
        fetchNewProduct: (data) => dispatch(fetchNewProduct(data))
    }
}




class SingleProductContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            digital: true,
            frameId: "",
            sizeId: "",
            styleId: 1,
        }
        this.handleFrame = this.handleFrame.bind(this)
        this.handleColor = this.handleColor.bind(this)
        this.handleSize = this.handleSize.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }



    componentDidMount() {
        this.props.getAllfss()


    }
    handleFrame(id) {
        this.setState({ frameId: id })
    }
    handleSize(id) {
        this.setState({ sizeId: id })
    }
    handleColor(id) {
        console.log("id:", id)
    }
    handleClick(e) {
        console.log("entre", e)
        e.preventDefault()
        this.props.fetchNewProduct(this.state)
        this.props.history.push("/productData")

    }




    render() {
        console.log("frame", this.props.sizes)
        console.log("size", this.props.frames)
        console.log("style", this.props.styles)
        return (
            <div>


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
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer)