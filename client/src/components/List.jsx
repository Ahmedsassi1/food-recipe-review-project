import React from "react";
import ListItem from "./ListItem.jsx";



const List = (props) => (
  <div>
  <h1 className='Menu' >The Menu </h1>
  <div className="element">
    {props.Plates.map((item, index) => (
      <div key={index} className="item">
        <ListItem plate={item} changeView={props.changeView}/>
      </div>
    ))}
  </div></div>
);

export default List;
