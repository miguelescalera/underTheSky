import axios from "axios"
import {
  GET_ORDERS,
  GET_USERS,
  GET_DISPLAY,
  GET_FRAME,
  GET_SIZE,
  GET_STYLE,
  DATA_PRODUCTS} from "../constans"

/*-----------------ACTIONS-------------------------*/
export const allOrders = allOrder => ({
    type: GET_ORDERS,
    allOrder
  });


export const allUsers = allUsers => ({
    type: GET_USERS,
    allUsers
  });

export const allDisplay = allDisplay => ({
    type: GET_DISPLAY,
    allDisplay
  });
export const allFrame = allFrame => ({
    type: GET_FRAME,
    allFrame
  }); 

export const allSize = allSize => ({
    type: GET_SIZE,
    allSize
  });  
  
export const allStyle = allStyle => ({
    type: GET_STYLE,
    allStyle
  });  

export const allDataProducts = allDataProducts=>({
  type: DATA_PRODUCTS,
  allDataProducts
})  
/*-----------------ORDERS FETCH---------------------*/

export const getOrders=() => dispatch =>
  axios.get("/api/admin/getOrders")
  .then(order => {
    dispatch(allOrders(order.data))
    return order.data;
    }
  );

export const changeStatusOrder=(order) => 
  axios.put("/api/admin/chageStatus",{orderId:order.id,status:order.status})
  .then((newOrder)=>{
    return newOrder
  })
 
export const deleteOrder=(order) => 
  axios.delete("/api/admin/chageStatus",{orderId:order.id})



  /*----------------USERS FETCH---------------------------*/

export const getUsers=() => dispatch =>
  axios.get("/api/admin/getUsers")
  .then(users => {
    dispatch(allUsers(users.data))
    return users.data;
    }
  );

  export const changeStatus = function(usertype,idUser){
    axios.post(`/api/private/addAdmin`,{type:usertype,userId:idUser})
  }




export const deleteUser=(user) => 
  axios.delete("/api/admin/deleteUser",{userId:user.id})



/*--------------------PRODUCTS----------------------------*/
export const fetchDataProducts=()=>dispatch=>{
  axios.get("/api/admin/getAllDataProducts")
  .then(dataproducts=>{
    dispatch(allDataProducts(dataproducts.data))
    return dataproducts.data;
  })
}

export const deleteProduct=(product) => 
  axios.delete("/api/admin/deleteProduct",{productId:product.id})



/*-------------------DISPLAY----------------------------------*/
export const getDisplays=() => dispatch =>
  axios.get("/api/admin/getDisplay")
  .then(display => {
    dispatch(allDisplay(display.data))
    return display.data;
    }
  );

export const newDisplay=(newDisplay) => 
  axios.post("/api/admin/newDisplay",newDisplay)

export const deleteDisplay=(display) => 
  axios.delete("/api/admin/deleteDisplay",{displayId:display.id})

  /*--------------------FRAME/SIZE/STYLE---------------------------*/
export const getFrame=() => dispatch =>
  axios.get("/api/admin/getFrame")
  .then(frame => {
    dispatch(allFrame(frame.data))
    return frame.data;
    }
  );

export const newFrame=(newFrame) => 
  axios.post("/api/admin/newFrame",newFrame)


export const deleteFrame=(frame) => 
  axios.delete("/api/admin/deleteFrame",{frameId:frame.id})

/*---------------------------------------------------------*/

export const getSize=() => dispatch =>
  axios.get("/api/admin/getSize")
  .then(size => {
    dispatch(allSize(size.data))
    return size.data;
    }
  );

export const newSize=(newSize) => 
  axios.post("/api/admin/newSize",newSize)


export const deleteSize=(size) => 
  axios.delete("/api/admin/deleteSize",{sizeId:size.id})

  
/*------------------------------------------------------------*/
export const getStyle=() => dispatch =>
  axios.get("/api/admin/getStyle")
  .then(style => {
    dispatch(allStyle(style.data))
    return style.data;
    }
  );
export const newStyle=(newStyle) => 
  axios.post("/api/admin/newStyle",newStyle)


export const deleteStyle=(style) => 
  axios.delete("/api/admin/deleteStyle",{styleId:style.id})