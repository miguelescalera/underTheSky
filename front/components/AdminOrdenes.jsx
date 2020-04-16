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
  handleStatus,
  allStyles
}) => {

const styleFilter={
  width:"50%",
  marginLeft:"25%",
  borderBottom:"solid 1px gray",
  marginBottom:"20%"
}


  
    const [open, setOpen] = useState(false);
    let dateOrder= ""
    const allOrders = ()=>{
      if(selectedOrder[0]&&DataProducts[0]&&users){
          selectedOrder= selectedOrder.sort(function (a, b) {
            return  b.id - a.id;
        });
      return selectedOrder.map((e,i)=>{

          let total=0
          let selectStyle=null
          let dataProduct= DataProducts.filter(f=>{
            selectStyle= allStyles.filter(style=>{
              return  style.id===f.styleId
            }) 
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
            <div style={{backgroundColor:"white", marginBottom:"5%"}} key={i}>
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
                                            {e.digital? <strong>ESTE PRODUCTO ES DIGITAL</strong>: null }
                                            <li><strong>cantidad: </strong>{e.quantity}</li>
                                            <li><strong>Momento:</strong>{e.date + " "+e.time}</li>
                                            <li><strong>Frase o lugar:</strong>{e.content}</li>
                                            <li><strong>Idioma:</strong>{e.language}</li>
                                            <li><strong>Marco: </strong>{e.frame}</li>
                                            <li><strong>Estilo:</strong>{selectStyle[0]?selectStyle[0].name:null}</li>
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
                           <div style={styleFilter}>
                                <h3 style={{textAlign:"center"}}>filtrar por</h3>
                                <form >
                             <Container>
                             <Row>  
                              <Col xs={6}>
                                <span>envio:</span><br/>
                                <span>estado de la compra:</span>
                              </Col>
                              <Col xs={6}>
                              <select value ={envio} name="envio" onChange={handleChange}>
                                      <option value="todos">todos</option>
                                      <option value= {false}>a domicilio</option>
                                      <option value= {true} >en punto de entrega</option>
                                    </select>
                                  <br/>
                                  <select value ={estadoDeCompra} name="estadoDeCompra" onChange={handleChange}>
                                      <option value="todos">todos</option>
                                      <option value="inprocess">en proceso</option>
                                      <option value="delivered">enviada</option>
                                    </select>
                              </Col>
                                  <button style={{textAlign:"center"}} onClick={handleSelectedOrder}>buscar</button>
                             </Row> 
                             </Container>
                                </form>
                           </div>
                             {allOrders()}
                         </div>
                       );
                     };
                                  
                                  

                                
                                    
                                   
                                  
                                    
                                    
                 
                       
                      
                   

       
     
        
             

                       
                          

          
                     



              

      
     
