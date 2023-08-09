import React from "react";
import "../Style/Gridcard.css";

export const GridCards = () => {
  return (
    <div>
      <div style={{gap:"10px",marginLeft:"6%",marginRight:"6%",marginBottom:"10px",display:"flex", flexDirection:"row",display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
      <GridCard img_link="grid-card1"/>
      <GridCard img_link="grid-card2"/>
      <GridCard img_link="grid-card3"/>
      <GridCard img_link="grid-card4"/>
      </div>
      <div style={{gap:"10px",marginLeft:"6%",marginRight:"6%",display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
      <GridCard img_link="grid-card5"/>
      <GridCard img_link="grid-card6"/>
      <GridCard img_link="grid-card7"/>
      <GridCard img_link="grid-card8"/>
      </div>
    </div>
  )
}


export const GridCard = ({img_link}) => {
  return (
    <div className="card gridcard" style={{maxWidth: "40%",maxHeight:"25rem", justifyContent:"space-between"}}>
      <img className="card-img-top" src={`images/${img_link}.avif`} alt="Card image cap" />
    </div>
  );
};
