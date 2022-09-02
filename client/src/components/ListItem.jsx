import React from 'react';
import ListItemDetails from './OneItemDetails.jsx';


const ListItem = (props) => (
  <div >
    <h2>{props.plate.name}</h2>
    <div>
      <button id='imageSelector' onClick={()=>{props.changeView('oneDetails')}}><img src={props.plate.ImageUrl} width="263"
        height="250" /></button>
      <div hidden>  <ListItemDetails plate={props.plate}/></div>
    </div>
    <button id="dislike">dislike</button><button id="like">like</button>
  </div>
)

export default ListItem;