import React from "react"
import PuntoDeEncuentro from "../components/PuntoDeEncuentro"
import {addPunto, deletePunto} from "../actions/orderActions"
import { Tabs, Tab } from 'react-bootstrap'
import {getPuntoDeEncuentro} from "../actions/orderActions"
import { connect } from "react-redux";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"


const mapDispatchToProps = (dispatch, state) => {
    return {
        getPuntoDeEncuentro: () => { dispatch(getPuntoDeEncuentro()) }
    };
};

const mapStateToProps = (state, ownprops) => {
    return {
        PuntoDeEncuentro:state.orders.PuntoDeEncuentro
    };
};


class PuntoDeEncuentroContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            address:"",
            place:"",
            neighborhood:"",
            Attention:""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    
    componentDidMount(){
       this.props.getPuntoDeEncuentro()
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
        addPunto(this.state)
        this.props.history.push("/eladmin")
    }

    handleDelete(id){
        deletePunto(id)
        console.log("este es mi iddd papa",id)
    }

    
    render(){
        const Puntos=this.props.PuntoDeEncuentro
        return(
        <>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="frame" title="Nuevo Punto De Encuentro">
                    < PuntoDeEncuentro
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}/>
                </Tab>
            </Tabs>
{Puntos.map(P=>{
        return(
        <Card style={{ width: "16rem" }}>
        <Card.Body>
          <Card.Title>Lugar: {P.place}</Card.Title>
          <Card.Text>Direccion: {P.address} </Card.Text>
          <Card.Text>Barrio: {P.neighborhood }</Card.Text>
          <Card.Text>Horario De Atencion: {P.Attention }</Card.Text>
          <Button variant="primary" onClick={()=>this.handleDelete(P.id)}>Borrar Punto</Button>
        </Card.Body>
      </Card>
        )
    })}
        </>
        )
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(PuntoDeEncuentroContainer)


