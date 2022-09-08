import React, { useState } from 'react';
import Adminlist from "./AdminItem.jsx";



function Admin(props) {
  return (
    <div className="element">{console.log(props)}
      {props.Plates.map((item, index) => (
        <div key={index} className="item">
          <Adminlist plate={item}
            EditP={props.EditP}
            DeletePlate={props.DeletePlate}
            changeView={props.changeView} />
        </div>
      ))}
    </div>
  )
};

export default Admin;