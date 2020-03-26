import React, { useState } from 'react';;
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'


export default ({dataProduct,userProduct,fss,handleDelete}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    let allData=[]
    
    for (let i = 0; i < dataProduct.length; i++) {
       allData.push({
        dataProduct:dataProduct[i],
        userProduct:userProduct[i].data,
        fss:fss[i].data
       })
    }
    const CheckoutButton={
      marginTop:"10%",
      marginBottom:"10%",
      
    }

    const buttonModal={
      marginTop:"10%",
      marginBottom:"10%",
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
      backgroundColor: "white",
      borderWidth: "0px 0px 1px 1px",
      borderStyle: "solid",
      borderColor: "white white black black",
      color: "white",
      backgroundColor: "black"
    }
      
    const  styleCart={
        width:"90%",
        textAlign: "center",
        border: "solid 1px #80808061",
        marginTop: "20%"
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
              return (
                
                <Col xs lg="3">
                  
              <div style={styleCart} >
                  <button onClick={()=>{handleDelete(e.dataProduct.id)}} style={deleteButton}>X</button>
                  <div style={{paddingTop:"10%"}}>
                     <div>
                       <h4>{e.fss.style.name} </h4>
                     </div>
                        <img style={{width:"50%"}} src="https://i.imgur.com/Usradoq.png" alt=""/>
                      <div style={styleContent}>
                          <strong>size: </strong>{e.fss.size.name} <br/>
                          <strong>frame: </strong>{e.fss.frame.name} <br/>
                          <strong>color: </strong>{e.fss.style.color} <br/>
                          <h5>${e.fss.size.price}</h5>
                          <div>
                              <button style={quantityButton_1}>-</button><div style={quantityStyle}>1</div><button style={quantityButton_2} >+</button><br/>
                          </div>
                      </div>
                  </div>
                  <>
                      <button style={buttonModal} variant="primary" onClick={handleShow}>
                        more information
                      </button>

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
                          <strong>date: </strong>{e.dataProduct.date} <br/>
                          <strong>content: </strong>{e.dataProduct.content} <br/>
                          <strong>name: </strong>{e.dataProduct.name} <br/>
                          <strong>time: </strong>{e.dataProduct.time} <br/>
                          <strong>language: </strong>{e.dataProduct.language} <br/>
                        </Col>
                        </Row>
                        </Container>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                            edit
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </>
              <Button variant="dark" style={CheckoutButton}>checkout</Button>
              </div>
                </Col>
                )

            })}  
          </Row>
        </Container>
    </div>
  );
};
                          
                          

                      
                    


            
       

  
            
           
        

