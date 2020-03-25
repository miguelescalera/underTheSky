import React from "react"
import SingleProduct from "../components/SingleProduct"
import {connect} from "react-redux"
import {getAllfss} from "../actions/productsActions"

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
    // console.log(this.props)
    this.props.getAllfss()
}


    handleFrame(e) {
        let value = e.target.name
        this.setState({frame:value})
        console.log("frame",value)   
    }
    handleSize(e) {
        let value = e.target.name
        this.setState({size:value})
        console.log("Size",value)
    }
    handleColor(e) {
        let value = e.target.name
        this.setState({color:value})
        console.log("color",value)
    }
    // handleSubmit(e){
    //     console.log("entre",e)
    //     e.preventDefault()
    //     selectedProducts(this.state)

    // }


    
    
    render(){
        console.log("estoy en el size",this.state.size)
        console.log("estoy en el marco",this.state.frame)
        console.log("estoy en el color",this.state.color)
        return(
            <div>
                <SingleProduct 
                handleColor={this.handleColor}
                handleSize={this.handleSize}
                handleFrame={this.handleFrame}/>
            </div>
        )
    }
}

export default connect (null, mapDispatchToProps)(SingleProductContainer)