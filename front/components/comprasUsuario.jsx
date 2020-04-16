import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Modal from 'react-bootstrap/Modal'


export default ({orders,user,allStyles})=>{

const [isOpen, setIsOpen] = useState(false);


const toggle = () => setIsOpen(!isOpen);



let orderUser= orders.orders
let productsData = orders.productData

const styleUser={
    width:"50%",
    backgroundColor:"white",
    marginLeft:"25%",
    marginBottom:"10%"
}
    return(
        <div>
            <div>
                <h3 style={{color:"white",textAlign:"center"}}>tus compras</h3>
                {orderUser?orderUser.map((e,i)=>{
                  let selectedStyle=null
                  let total=0
                   
                let productDataUser= productsData.filter(f=>{
                     selectedStyle= allStyles.filter(style=>{
                        return f.styleId===style.id
                    })
                      total+=f.price
                      return f.orderId=== e.id
                  })
                
                   return(
                       <div key={i} style={styleUser}>
                           <strong>estado de tu compra: </strong><span>{e.status}</span><br/>
                           <strong>direccion:</strong><span>{e.address}</span><br/>
                           <strong>pais: </strong><span>{e.country}</span><br/>
                           <strong>provincia: </strong><span>{e.state}</span><br/>
                           <strong>ciudad: </strong><span>{e.city}</span><br/>
                            <h2>${total}</h2>
                           <div>
                            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>ver productos</Button>
                            <Collapse isOpen={isOpen}>
                            tienes {productDataUser.length}{productDataUser.length>1?<span>productos</span>:<span>producto</span> }
                           { productDataUser.map((e,i)=>{
                               return(
                                    <Card key={i}>
                                    <CardBody>
                                    <span><strong>tamaño: </strong>{e.size+" "}</span>
                                    <span><strong>estilo: </strong>{selectedStyle[0].name+" "}</span>
                                    {e.digital?<strong>digital</strong>:<span><strong>marco:</strong> {e.frame}</span>}<br/>
                                    <strong>fecha: </strong><span>{e.date}</span><br/>
                                    <span><strong>color: </strong>{selectedStyle[0].color+" "}</span><br/>



                                    <strong>nombre o frase: </strong>{e.name}<span></span><br/>
                                    <strong>hora:</strong><span>{e.time}</span><br/>
                                    <strong>idioma: </strong><span>{e.language}</span><br/>
                                    </CardBody>
                                    </Card>
                               )
                            })}

                            </Collapse>

                            </div>
                       </div>
                   )
               }): <span style={{color:"white"}}>aun no tienes compras</span> }
            </div>
        </div>
    )
}
            
                           