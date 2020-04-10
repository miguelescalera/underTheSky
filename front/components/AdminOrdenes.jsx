import React, {useState}from "react";
import Collapse from 'react-bootstrap/Collapse'
import Button from "react-bootstrap/Button"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import moment from "moment"



export default ({
  selectedOrder,
  DataProducts,
  users,
  envio,
  estadoDeCompra,
  handleChange,
  handleSelectedOrder,
  handleStatus
}) => {

  
    const [open, setOpen] = useState(false);
    let dateOrder= ""
    const allOrders = ()=>{
      if(selectedOrder[0]&&DataProducts[0]&&users){
          selectedOrder= selectedOrder.sort(function (a, b) {
            return  b.id - a.id;
        });
      return selectedOrder.map((e,i)=>{

          let total=0

          let dataProduct= DataProducts.filter(f=>{
              if(f.orderId===e.id){
                total+=(f.price * f.quantity)
                return f
              } 
            })

          let orderUser=users.filter(u=>{
              return e.userId===u.id
             })

          orderUser=orderUser[0]
          
         
          dateOrder= moment(e.createdAt).format('DD/MM/YYYY')
             
     
          return(
            <div style={{backgroundColor:"white", marginBottom:"5%"}}>
                <Container >
                  <h3>Orden N° {e.id}</h3> <strong>fecha:</strong><span>{dateOrder}</span>
                  <h6>User: {orderUser?orderUser.firstName+" "+ orderUser.lastName:"usuario no registrado"} </h6> 
                  <span>Estado:{e.status} </span>
                  <DropdownButton id="dropdown-basic-button" title="cambiar el estado de la orden">
                      <Dropdown.Item  onClick={()=>{handleStatus({id:e.id,status:"inprocess"})}}>
                        en proceso
                      </Dropdown.Item>
                      <Dropdown.Item  onClick={()=>{handleStatus({id:e.id,status:"delivered"})}}>
                        enviado
                      </Dropdown.Item>
                      </DropdownButton>
                      <h6><strong>Email:</strong>{dataProduct[0].emailClient}</h6>
                      <h6><strong>Direccion: </strong> {e.address}</h6> 
                      <h6><strong>Total: </strong>${total} </h6> 
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
                                            <li><strong>cantidad: </strong>{e.quantity}</li>
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
                 
                       
                      
                   

       
     
        
             

                       
                          

          
                     



              

      
     
