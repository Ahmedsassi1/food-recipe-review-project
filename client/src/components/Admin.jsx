import React from "react";
import Adminlist from "./AdminItem.jsx";



const Admin = (props) => (
  <div className="element">{console.log(props)}
    {props.Plates.map((item, index) => (
      <div key={index} className="item">
        <Adminlist plate={item} EditP={props.EditP}/>
      </div>
    ))}
  </div>
);

export default Admin;