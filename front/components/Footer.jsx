import React from "react";
export default () => {

  const footerStyles = {

    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(255, 254, 251, 1)",
    color: "#102f51",
    textAlign: "center",
    zIndex:3,
    boxShadow: '0px -8px 15px -10px rgba(0, 0, 0, 0.25)'

    
  }

  


  return (


    <div style={footerStyles}>
      <p>Under the sky 2020.</p>
    </div>
  );
};
