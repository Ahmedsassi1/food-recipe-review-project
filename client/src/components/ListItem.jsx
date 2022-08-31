import React from 'react';

const ListItem = (props) => (
  <div>
    <div>{props.plate.name}</div>
    <ul>
    <img src={props.plate.ImageUrl}  width="180" 
     height="180"  />
      <li>{props.plate.Id}</li>
      <li>{props.plate.ingredients}</li>
      </ul>
  </div>
)

export default ListItem;