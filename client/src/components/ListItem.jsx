import React from 'react';


const ListItem = (props) => (
  <div >
    <h2>{props.plate.name}</h2>
    <div>
      <img src={props.plate.ImageUrl} width="250"
        height="250" />
    </div>
    <button id="dislike">dislike</button><button id="like">like</button>
  </div>
)

export default ListItem;