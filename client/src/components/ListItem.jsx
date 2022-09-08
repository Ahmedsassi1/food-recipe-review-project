import React from 'react';


const ListItem = (props) => (
  <div >
    <h2>{props.plate.name}</h2>
    <div>
      <button id='imageSelector' onClick={()=>{props.getElementDetails(props.plate);console.log(props.plate);props.changeView('oneDetails');}}><img src={props.plate.ImageUrl} width="263"
        height="250" /></button>
      
    </div>
    <button id="dislike">dislike</button><button id="like">like</button>
  </div>
)

export default ListItem;