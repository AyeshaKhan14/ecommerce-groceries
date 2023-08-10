import React from "react";
import "../Style/Titlebar.css"

const TitleBar = ({text,color}) => {
  return (
      <nav className="navbar-light" style={{margin:"0px",padding:"5px",textAlign:"center",alignItems:"center",justifyItems:"center"}}>
          <p className="Title-text" style={{color:color}}>{text}</p>
      </nav>
  );
};

export default TitleBar;
