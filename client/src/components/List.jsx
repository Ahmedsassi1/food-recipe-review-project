import React from "react";
import ListItem from "./ListItem.jsx";



const List = (props) => (
  <div className="element">
    {props.Plates.map((item, index) => (
      <div key={index} className="item">
        <ListItem plate={item} changeView={props.changeView}/>
      </div>
    ))}
  </div>
);

export default List;
