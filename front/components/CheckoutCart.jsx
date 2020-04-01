import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default ({ dataProduct, userProduct, fss, handleSubmit }) => {
  console.log("dataProduct", dataProduct);
  console.log("userProduct", userProduct);
  console.log("fss", fss);

  const dataProductsIds = [];
  let allData = [];
  let total = 0;
  if (userProduct[0] && fss[0]) {
    for (let i = 0; i < dataProduct.length; i++) {
      console.log("estoy en el for:", dataProduct, userProduct, fss);
      allData.push({
        dataProduct: dataProduct[i],
        userProduct: userProduct[i].data,
        fss: fss[i].data
      });
      dataProductsIds.push(dataProduct[i].id);
    }
  } else {
    allData = [];
  }

  const styleCheckout = {
    display: "flex",
    justifyContent: "space-between"
  };

  return (
    <div className="carrito-resumen">
      <ListGroup variant="flush">
      <ListGroup.Item>
              <div style={styleCheckout}>
                <span>Num</span>
                <span>Estilo</span>
                <span>Cantidad </span>
                <strong>Precio</strong>
              </div>
            </ListGroup.Item>
        {allData.map((e, i) => {
          console.log("buscando el price", e);
          total += e.fss.size.price * e.dataProduct.quantity;
          return (
            <ListGroup.Item>
              <div style={styleCheckout}>
                <span>{i + 1}</span>
                <span>{e.fss.style.name}</span>
                <span>x{e.dataProduct.quantity} </span>
                <strong>${e.fss.size.price * e.dataProduct.quantity}</strong>
              </div>
            </ListGroup.Item>
          );
        })}

        <ListGroup.Item>
          <div style={styleCheckout}>
            <span>total: </span>
            <strong>${total}</strong>
          </div>
        </ListGroup.Item>
        <ListGroup.Item style={{ textAlign: "center" }}>
          <Button onClick={() => handleSubmit(dataProductsIds)} className="boton-outline">
            Finalizar compra
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
