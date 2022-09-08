import React from 'react';


const ListItemDetails = (props) => (
  <div width>
    <br />
    <br />
    <h2>{props.plate.name}</h2>
    <div>
      <div>
        <img width="500" src={props.plate.ImageUrl}
          height="500" />
      </div>
    </div>
    <div>Ingredients : {props.plate.ingredients}
    </div>
    <br />
    <br />
    <div>HowTo :{props.plate.howTo}
    </div>
  </div>
)

export default ListItemDetails;