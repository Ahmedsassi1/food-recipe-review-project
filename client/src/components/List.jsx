import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div className="element">
    {props.Plates.map((item, index) => (
      <div key={index} className="item">
        <ListItem plate={item} /><button id="delete">X</button><button  id="Edit">E</button>
      </div>
    ))}
  </div>
);

export default List;
