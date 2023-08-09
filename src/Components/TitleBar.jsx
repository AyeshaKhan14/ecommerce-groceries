import React from "react";

const TitleBar = ({text}) => {
  return (
      <nav className="navbar-light" style={{margin:"0px",padding:"5px",textAlign:"center",alignItems:"center",justifyItems:"center"}}>
          <h4 style={{margin:"0px",padding:"5px",textAlign:"center",alignItems:"center",justifyItems:"center", borderBottom:"1px solid #ccc"}}>{text}</h4>
      </nav>
  );
};

export default TitleBar;
