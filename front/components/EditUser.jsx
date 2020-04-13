import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'


export default ({
    changeName,
    changeLastName,
    changeEmail,
    state,
    user,
    changePassword,
    changeUser,
    changeSubmit,
    submitNewPassword
})=>{
    
   
    const styleContainer={
    backgroundColor:"white",
    width:"500px",
    marginLeft:"25%",
    marginTop:"10%",
    marginBottom:"10%",
    borderRadius:"3px",
    padding:"5%"
    }
    

    const inputName={
        display:"none"
    }
    const inputLastName={
        display:"none"
    }
    const inputEmail={
        display:"none"
    }
    const inputPassword={
        display:"none",
        border:"solid 1px gray",
        borderRadius:"3px",
        width:"50%",
        marginLeft:"25%",
        padding:"10px"
    }
    const styleAlert={
        display:"none"
       
    }
    const styleAlertPass={
        display:"none"
    }

//--------------------------------------------//
    const buttonStyle={
        border: "solid 0px",
        backgroundColor: "white",
        color: "blue",
        marginBottom: "30px"
    }



    if(state.inputName){
        inputName.display="block"
    }
    else{
        inputName.display="none"
    }
    //---------------------------------------
    if(state.inputLastName){
        inputLastName.display="block"
    }
    else{
        inputLastName.display="none"
    }
    //---------------------------------------
    if(state.inputEmail){
        inputEmail.display="block"
    }
    else{
        inputEmail.display="none"
    }
    //---------------------------------------
   

    if(state.inputPassword){
        inputPassword.display="block"
    }
    else{
        inputPassword.display="none"
    }
    //---------------------------------------


    if(state.alert){
        styleAlert.display="block"
    }
    else{
        styleAlert.display="none"
    }
    //---------------------------------------
    

    if(state.alertPassword){
        styleAlertPass.display="block"
    }
    else{
        styleAlertPass.display="none"
    }
    //---------------------------------------



    
    return(
        <div style={styleContainer}>
            <Container>
                <Row>
                    <Col>
                        <div style={{marginBottom:"30px"}}>
                            <strong>nombre: </strong><span>{user.firstName}</span>
                            <div>
                                <form style={inputName}>
                                    <input type="text" value={state.firstName}
                                     name="firstName" 
                                     onChange={changeUser} 
                                     placeholder="nuevo nombre"/>
                                </form>
                            </div>
                        </div>
                            
                        <div style={{marginBottom:"30px"}}>
                            <strong>apellido: </strong><span>{user.lastName}</span>
                            <div>
                                <form style={inputLastName}>
                                    <input type="text"value={state.lastName}
                                        name="lastName"
                                        onChange={changeUser}
                                        placeholder="nuevo apellido"
                                      />
                                </form>
                            </div>
                        </div>
                            
                        <div style={{marginBottom:"30px"}}>
                            <strong>email: </strong> <span>{user.email}</span>
                            <div>
                                <form style={inputEmail}>
                                    <input type="text"value={state.email}
                                     name="email" 
                                     onChange={changeUser}
                                     placeholder="nuevo email"
                                     />
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <button onClick={changeName} style={buttonStyle}>cambiar nombre</button>
                    <button onClick={changeLastName}style={buttonStyle}>cambiar apellido</button>
                    <button onClick={changeEmail}style={buttonStyle}>cambiar email</button>
                    </Col>
             </Row>
          </Container>
          <div style={styleAlert}>
              <Alert variant="danger">
                  ¡no puedes dejar un campo vacio!
              </Alert>
          </div>
            <div style={{textAlign:"center",marginTop:"20px"}} >
                <Button variant="dark" onClick={changeSubmit}>guardar cambios</Button>    
            </div>
            <div style={{textAlign:"center"}}>
                <button onClick={changePassword} style={buttonStyle}>cambiar contraseña</button>
                <form style={inputPassword} >
                    <strong>escribe la nueva contraseña</strong><br/>
                    <input type="password" 
                    style={{marginBottom:"15px"}} 
                    onChange={changeUser}
                    name="newPassword"
                    /><br/>
                    <strong>repite la nueva contraseña</strong><br/>
                    <input type="password"
                    style={{marginBottom:"15px"}}
                    onChange={changeUser}
                    name="repeatPassword"
                    />
                    <div style={styleAlertPass}>
                        <Alert variant="danger">
                            ¡las contraseñas no coinciden!
                        </Alert>
                    </div>
                    <button  style={{marginBottom:"15px"}} onClick={submitNewPassword}>cambiar contraseña</button>
                </form>
            </div> 
        </div>
    )
}


                   
                        
                   
                      

               
              
                
                   
                