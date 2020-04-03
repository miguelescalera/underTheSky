import React, {useState}from "react";
import Card from "react-bootstrap/Card";
import Collapse from 'react-bootstrap/Collapse'
import Button from "react-bootstrap/Button"
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


export default ({
  selectedOrder,
  DataProducts,
  users,
  envio,
  estadoDeCompra,
  handleChange,
  handleSelectedOrder
}) => {
    const [open, setOpen] = useState(false);

   
  const allOrders = ()=>{
    
    if(selectedOrder[0]&&DataProducts[0]&&users){
     return selectedOrder.map((e,i)=>{
       let dataProduct= DataProducts.filter(f=>{
         return f.orderId===e.id
       })
     
     
       let orderUser=users.filter(u=>{
         return e.userId===u.id
        })
        orderUser=orderUser[0]

      
       return(
        <Container >
        <Card>
       <Card.Title>Orden N° {i+1}</Card.Title>
          <h6>User: {orderUser.firstName+" "+ orderUser.lastName} </h6> 
          <h6>Estado:{e.status} </h6> <Button>cambiar estado de orden</Button>
       <h6>Email:{orderUser.email}</h6>
          <h6>Direccion: {e.address}</h6> 
          <h6>Total:$ 2500 </h6> 
         
          <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Detalles De La Orden
      </Button>
      <Collapse in={open}>
        <tr>
       <h6>esta orden contiene {dataProduct.length} productos</h6>
       <Container>
          <Row> 
              {dataProduct.map((e,i)=>{
                return(
                  <Col xs={3}>
                    <Card style={{ marginLeft:'2%',marginRight:"2%"}}>
                    <ListGroup variant="flush" style={{color:"black" }}>
                      <ListGroup.Item>Momento:{e.date + " "+e.time}</ListGroup.Item>
                      <ListGroup.Item>Lugar: Buenos Aires</ListGroup.Item>
                      <ListGroup.Item>Frase:{e.content}</ListGroup.Item>
                      <ListGroup.Item>Idioma: {e.language}</ListGroup.Item>
                      <ListGroup.Item>Marco: Blanco</ListGroup.Item>
                      <ListGroup.Item>Estilo: Minimalista</ListGroup.Item>
                      <ListGroup.Item>Tamaño: 13x18</ListGroup.Item>
                    </ListGroup>
                  </Card>
                  </Col>
                )
              })}
          </Row>
       </Container>
        </tr>
      </Collapse>
    </>
        </Card>
      </Container>
       )
     })
    }
    else{
      return(
        <h5>cargando ordenes</h5>
      )
    }
  }

          



  return (
    <div>
        <Container>
        <input type="text"/><Button type="submit" >Buscar</Button><br/>
        <h3>filtrar por </h3>
          <form >
          <label style={{color:"white"}}>
            envio:
            <select value ={envio} name="envio" onChange={handleChange}>
              <option value="todos">todos</option>
              <option value= {false}>a domicilio</option>
              <option value= {true} >en punto de entrega</option>
            </select>
          </label>
          <label style={{color:"white"}}>
            estado de la compra:
            <select value ={estadoDeCompra} name="estadoDeCompra" onChange={handleChange}>
              <option value="todos">todos</option>
              <option value="inprocess">en proceso</option>
              <option value="delivered">enviada</option>
            </select>
          </label>
          <button onClick={handleSelectedOrder}>buscar</button>
        </form>
        </Container>
        {allOrders()}
    </div>
  );
};
              

      
     
