import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'



export default ({dataProduct,userProduct,fss,handleSubmit})=>{
    
    const dataProductsIds=[]
    let allData=[]
    let total=0
    if(userProduct[0]&&fss[0]){
    for (let i = 0; i < dataProduct.length; i++) {
            allData.push({
             dataProduct:dataProduct[i],
             userProduct:userProduct[i].data,
             fss:fss[i].data
            })
            dataProductsIds.push(dataProduct[i].id)
        }
      }
  else{
      allData=[]
      }

        


    const styleCheckout={
    display:"flex",
    justifyContent:"space-between"
}


return(
    <div style={{marginTop:"50%"}}>
        <ListGroup variant="flush">
            {allData.map((e,i)=>{
                total+=(e.fss.size.price)*(e.dataProduct.quantity)
                return(
                    <ListGroup.Item>
                        <div style={styleCheckout}>
                            <span>{i+1}</span>  
                            <span>{e.fss.style.name}</span> 
                            <span>x{e.dataProduct.quantity} </span>
                            <strong>${(e.fss.size.price)*(e.dataProduct.quantity)}</strong>
                        </div>
                        </ListGroup.Item>
                    )
                })}
                
                <ListGroup.Item>
                    <div style={styleCheckout}>
                        <span>total: </span><strong>${total}</strong>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item style={{textAlign:"center"}}>
                    <Button onClick={()=>handleSubmit(dataProductsIds)} variant="dark">checkout all product</Button>
                </ListGroup.Item>
        </ListGroup>
    </div>
)



        

}