import React from 'react';

const EditItem = (props) => (<div>
    <div>{console.log(props)}</div>
    <ul>
    <img  width="180" 
     height="180"  />
      <li></li>
      <li></li>
      </ul>
      <button id="edit">Edit</button><button id="delete">delete</button>
  </div>
);

export default EditItem;