import React, {useState}from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse'
import Button from "react-bootstrap/Button"

export default ({orders,DataProducts,users}) => {
    const [open, setOpen] = useState(false);

    console.log("true o false",users[0])
  const allOrders = ()=>{
    if(users[0]){
     return orders.map((e,i)=>{
       let dataProduct= DataProducts.filter(f=>{
         return f.orderId===e.id
       })
       dataProduct=dataProduct[0]
       console.log("dataProduct",dataProduct)
       let allusers=users.filter(u=>{
         return e.userId===u.id
        })
        allusers=allusers[0]
        
       
       return(
        <Container style={{marginBlockStart:"2rem"}} >
        <Card>
       <Card.Title>Orden N° {i+1}</Card.Title>
          <h6>User: {allusers.firstName+" "+ allusers.lastName} </h6> 
          <h6>Estado:{e.status} </h6> <Button>cambiar estado de orden</Button>
       <h6>Email:{allusers.email}</h6>
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
        <tr style={{flexDirection:"column-reverse"}} >
            <h6>Cuadro: 0032</h6>
       <h6>Momento:{dataProduct.date + " "+dataProduct.time} </h6>
            <h6>Lugar: Buenos Aires</h6>{/*lugar no existe en el modelo, agregarlo despues*/}
            <h6>Frase:{dataProduct.content}</h6>
       <h6>Idioma: {dataProduct.language} </h6>
            <h6>Marco: Blanco</h6>
            <h6>Estilo: Minimalista</h6>
            <h6>Tamaño: 13x18</h6>
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
    <div style={{marginBlockStart:"3rem"}} >
        <Container style={{display:"flex", flexDirection:"column", alignItems:"center"}} >
        <input type="text"/><Button type="submit" >Buscar</Button>
        </Container>
        {allOrders()}
    </div>
  );
};

      
     
