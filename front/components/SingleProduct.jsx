import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";



export default ({ handleSize,
                  handleFrame,
                  handleColor,
                  sizes,
                  frames,
                  styles                
                }) => {

                  

console.log("sizes",sizes)
console.log("frames",frames)
console.log("styles",styles)
  return (



    <div>
      <h2>Product</h2>
      <Container className="d-flex justify-content-center">
        <Card border="light" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://strellas.com/wp-content/uploads/2019/03/Framed-Star-map-poster-ES-Word-press.png"
            />
          </Card.Body>
          <Card.Header>Estilo del cuadro </Card.Header>{" "}{/* ver como puede llegar el estilo del cuadro */}
        </Card>
      </Container>

      <Container className="d-flex justify-content-center">
        <h4>Tamaño</h4>
        {!sizes?<p>cargando</p>:sizes.map((e)=>{
          return(
            <Button variant="outline-info" onClick ={()=>handleSize(e.id)} name="13x18" >{e.name}</Button>
            )
          })}
          <h5>$400</h5> <br/>
          </Container>
          
          <Container className="d-flex justify-content-center">
           <h4>Color</h4>
        {!styles?<p>cargando</p>:styles.map((e)=>{
          return(
            <Button variant="outline-info" onClick={()=>handleColor(e.id)} name="Blue" >{e.color}</Button>
            )
          })}  
           </Container>
           
           <Container className="d-flex justify-content-center">
           <h4>Marco</h4>
          {!frames?<p>cargando</p>:frames.map((e)=>{
            return(
              <Button variant="outline-info" onClick={()=>handleFrame(e.id)} name="madera" >{e.name}</Button>
              )
            })}
           </Container>
      <Container className="d-flex justify-content-center">
      <Button variant="outline-info"  type="submit" size="lg" >Comprar</Button>{" "}
      </Container>
    </div>
  );
};

     

           
            
          
                
          
        
           

            



            

            

           






