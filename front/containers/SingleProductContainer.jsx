import React from "react"
import SingleProduct from "../components/SingleProduct"
import {connect} from "react-redux"
import {getAllfss} from "../actions/productsActions"

const mapStateToProps=(state,ownProps)=>{
    return{
        
        frames:state.products.Allfss.frames,
        sizes:state.products.Allfss.sizes,
        styles:state.products.Allfss.styles
        
    }
}




const mapDispatchToProps=(dispatch)=>{
    return{
        getAllfss: ()=>dispatch(getAllfss())
    }
}




class SingleProductContainer extends React.Component{
    constructor(){
        super()
        this.state={
            frame:"",
            size:"",
            color:""
        }
        this.handleFrame=this.handleFrame.bind(this)
        this.handleColor=this.handleColor.bind(this)
        this.handleSize=this.handleSize.bind(this)
    }
    


componentDidMount(){
    this.props.getAllfss()
   
     
}

 

    handleFrame(id) {
        console.log("id:",id)
    }
    handleSize(id) {
        console.log("id:",id)
    }
    handleColor(id) {
        console.log("id:",id)
    }
    // handleSubmit(e){
    //     console.log("entre",e)
    //     e.preventDefault()
    //     selectedProducts(this.state)

    // }


    
    
    render(){
        console.log("frame",this.props.sizes)
        console.log("size",this.props.frames)
        console.log("style",this.props.styles)
        return(
            <div>
                
                
                <SingleProduct 
                handleColor={this.handleColor}
                handleSize={this.handleSize}
                handleFrame={this.handleFrame}
                sizes={this.props.sizes}
                frames={this.props.frames}
                styles={this.props.styles}
                />
                
            </div>
        )
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(SingleProductContainer)