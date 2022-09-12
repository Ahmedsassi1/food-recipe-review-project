import React, { useState } from 'react';


function ListItem (props) {
  const [like,setLike]= useState(props.plate.FavRate);
  const [dislike,setDislike]=useState(props.plate.BadRate);
  
  return (
  <div >
    <br/>
    <br/>

    <h2>{props.plate.name}</h2>
    <div>
      <button id='imageSelector' onClick={() => {
        props.getElementDetails(props.plate);
        props.changeView('oneDetails');
      }}>
        <img src={props.plate.ImageUrl} width="263"
          height="250" /></button>

    </div>
    <button hidden id="dislike" onClick={()=>setLike(like+1)}>dislike</button>
    <a  hidden className='Rate'>{props.plate.BadRate}</a>
    <a  hidden className='Rate' id='FavR'>{props.plate.FavRate}</a>
    <button hidden id="like"onClick={()=>setDislike(dislike+1)} >like</button>
    
  </div>
)}

export default ListItem;