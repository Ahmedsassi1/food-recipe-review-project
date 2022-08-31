import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div>
    There are {props.Plates.length} items.
    {props.Plates.map((item, index) => (
      <div key={index}>
        <ListItem plate={item} />
      </div>
    ))}
  </div>
);

export default List;
