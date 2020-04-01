import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'


export default ({
  dataProduct,
  userProduct,
  fss,
  handleDelete,
  handleSubmit,
  handleQuantity
}) => {

  
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let allData=[]
  let quantity=1
  
  if(userProduct[0]&&fss[0]){
    for (let i = 0; i < dataProduct.length; i++) {
            allData.push({
             dataProduct:dataProduct[i],
             userProduct:userProduct[i].data,
             fss:fss[i].data
            })
          }
          
        }
        else{
          allData=[]
        }
  
  console.log("ALL DATA:",allData)
    const CheckoutButton={
      marginTop:"5%",
      marginBottom:"10%",
      
    }

    const buttonModal={
      marginTop:"10%",
      marginBottom:"5%",
      backgroundColor:"white",
      border:"solid 1px #80808061"
    }

    const quantityButton_1={
      float:"left",
      backgroundColor:"white",
      border: "1px solid #80808061",
      borderRadius: "25px",
      width: "30px",
      height: "30px"
    }
    const quantityButton_2={
      backgroundColor:"white",
      border: "1px solid #80808061",
      borderRadius: "25px",
      width: "30px",
      height: "30px"
    }
      
    const quantityStyle={
      display: "inline-block",
      marginLeft: "5%",
      marginRight: "5%"
      }
    
    const deleteButton={
      width:"20%",
      paddingTop: "0px",
      float: "right",
      borderWidth: "0px 0px 0px 0px",
      borderStyle: "solid",
      borderColor: "white white #00000085 #00000085",
      color: "white",
      backgroundColor: " #00000085"
    }
    const styleModal={
      display:"flex",
      justifyContent:"space-between"
  }
      
    const  styleCart={
        boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',
        width:"75%",
        textAlign: "center",
        border: "solid 1px #80808061",
        marginTop: "50%"
      }
      const  styleContent={
          textAlign: "left",
          paddingLeft: "30%"
      }
        
        
       
    
  return (
    <div>
        <Container>
          <Row>
            {allData.map((e,i)=>{
              quantity=e.dataProduct.quantity
            
              return (
                <Col xs lg="6">
              <div style={styleCart} >
                  <button onClick={()=>{handleDelete(e.dataProduct.id)}} style={deleteButton}>
                    X
                  </button>
                  <span style={{float:"left",marginLeft:"10%"}}>{i+1}</span>
                  <div style={{paddingTop:"15%"}}>
                     <div>
                       <h4>{e.fss.style.name} </h4>
                     </div>
                        <img style={{width:"50%"}} src="https://i.imgur.com/Usradoq.png" alt=""/>
                      <div style={styleContent}>
                          <strong>size: </strong>{e.fss.size.name} <br/>
                          <strong>frame: </strong>{e.fss.frame.name} <br/>
                          <strong>color: </strong>{e.fss.style.color} <br/>
                          <h5>${e.fss.size.price * quantity }</h5>
                          <div>
                          <button style={quantityButton_1} onClick={()=>{handleQuantity(e.dataProduct.id,e.dataProduct.quantity - 1)}} >-</button>
                          <div style={quantityStyle}>{quantity}</div>
                          <button style={quantityButton_2} onClick={()=>{handleQuantity(e.dataProduct.id,e.dataProduct.quantity + 1)}} >+</button><br/>
                          </div>
                      </div>
                  </div>
                  <>
                      <button style={buttonModal} variant="primary" onClick={handleShow}>
                        more information
                      </button> <br/>

                      <Modal show={show} onHide={handleClose}>
                        
                        <Modal.Body>
                        <Container>
                        <Row>
                        <Col xs lg="6">
                          <h4>{e.fss.style.name} </h4>
                          <img style={{width:"50%"}} src="https://i.imgur.com/Usradoq.png" alt=""/><br/>
                          <strong>size: </strong>{e.fss.size.name} <br/>
                          <strong>frame: </strong>{e.fss.frame.name} <br/>
                          <strong>color: </strong>{e.fss.style.color} <br/>
                          <h5>${e.fss.size.price}</h5>
                        </Col>
                        <Col xs lg="6">
                            <ListGroup variant="flush">
                                 
                                    <ListGroup.Item style={styleModal}>
                                        <strong>date: </strong> {e.dataProduct.date}
                                    </ListGroup.Item>

                                    <ListGroup.Item style={styleModal}>
                                        <strong>name: </strong>  {e.dataProduct.name}
                                    </ListGroup.Item>

                                    <ListGroup.Item style={styleModal}>
                                        <strong>content: </strong>  {e.dataProduct.content}
                                    </ListGroup.Item>

                                    <ListGroup.Item style={styleModal}>
                                        <strong>time: </strong>  {e.dataProduct.time}
                                    </ListGroup.Item>
                                    
                                    <ListGroup.Item style={styleModal}>
                                        <strong>email: </strong>  {e.dataProduct.emailClient}
                                    </ListGroup.Item>

                                    <ListGroup.Item style={{textAlign:"center",display:"inline"}}>
                                         <Button variant="dark">edit data</Button>
                                    </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        </Row>
                        </Container>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          
                        </Modal.Footer>
                      </Modal>
                    </>
              <Button variant="dark" onClick={()=>handleSubmit([e.dataProduct.id])} style={CheckoutButton}>
                checkout
              </Button>
              </div>
                </Col>
                )
              })}  
            </Row>
          </Container>
      </div>
    );
  };
                                     
                                      

                            
              
             
                                
                                

                                        
                                  
                                    
                
                
                
                





                          
                          

                      
                    


            
       

  
            
           
        

