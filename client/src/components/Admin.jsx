import React from "react";
import Adminlist from "./AdminItem.jsx";



const Admin = (props) => (
  <div className="element">
    {props.Plates.map((item, index) => (
      <div key={index} className="item">
        <Adminlist plate={item} changeView={props.changeView}/>
      </div>
    ))}
  </div>
);

export default Admin;