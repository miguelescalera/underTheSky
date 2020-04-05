import React, {useState}from "react";
import Collapse from 'react-bootstrap/Collapse'
import Button from "react-bootstrap/Button"
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
         <div style={{backgroundColor:"white", marginBottom:"5%"}}>

              <Container >
            
                <h3>Orden N° {e.id}</h3> 
                <h6>User: {orderUser?orderUser.firstName+" "+ orderUser.lastName:"usuario no registrado"} </h6> 
                <span>Estado:{e.status} </span> <button>cambiar estado de orden</button>
                <h6>Email:{dataProduct.emailClient}</h6>
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
       <h6>esta orden contiene {dataProduct.length} {dataProduct.length>1?<span>productos</span>:<span>producto</span>}</h6>
            <Container>
              <Row> 
                    {dataProduct.map((e,i)=>{
                      return(
                        <Col lg={3}>
                          <div>
                            <ul >
                              <li><strong>Momento:</strong>{e.date + " "+e.time}</li>
                              <li><strong>Frase o lugar:</strong>{e.content}</li>
                              <li><strong>Idioma:</strong>{e.language}</li>
                              <li><strong>Marco: </strong>{e.frame}</li>
                              <li><strong>Estilo:</strong>{e.style}</li>
                              <li><strong>Tamaño:</strong>{e.size}</li>
                            </ul>
                          </div>
                        </Col>

                       
                          
                              )
                            })}
                    </Row>
                </Container>
                  </tr>
                </Collapse>
              </>
                  
                </Container>
            </div>
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
        <h3 style={{color:"white"}}>filtrar por</h3>
          <form >
          <label style={{color:"white"}}>
            envio:
            <select value ={envio} name="envio" onChange={handleChange}>
              <option value="todos">todos</option>
              <option value= {false}>a domicilio</option>
              <option value= {true} >en punto de entrega</option>
            </select>
          </label> <br/>
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
              

      
     
