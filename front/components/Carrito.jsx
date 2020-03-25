import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default ({dataProduct,userProduct,fss}) => {
    console.log("alll data here: ",dataProduct,userProduct,fss)
    let allData=[]
    
    for (let i = 0; i < dataProduct.length; i++) {
       allData.push({
        dataProduct:dataProduct[i],
        userProduct:userProduct[i].data,
        fss:fss[i].data
       })
    }

    console.log("allData:",allData)
    
  return (
    <div>
        <Container>
        <Row>
        {allData.map((e,i)=>{
            return(
                <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="left" src="https://static.promodescuentos.com/pepperpdimages/threads/thread_large/default/283038_1.jpg" />
            <Card.Body>
              <Card.Title><h4>product {i+1}</h4></Card.Title>
              <Card.Text>
               
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem><strong>size: </strong> {e.fss.size.name} </ListGroupItem>
              <ListGroupItem><strong>style: </strong>{e.fss.style.name} </ListGroupItem>
              <ListGroupItem><strong>color: </strong>{e.fss.style.color} </ListGroupItem>
              <ListGroupItem><strong>frame: </strong>{e.fss.frame.name} </ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Button variant="dark"><Card.Link href="#">delete</Card.Link></Button>
              <Button variant="dark"><Card.Link href="#">buy</Card.Link></Button> 
            </Card.Body>
          </Card>
          </Col>
            )
        })}
        </Row>
        </Container>
    </div>
  );
};
  
            
           
        

