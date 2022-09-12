import React from 'react';


const ListItemDetails = (props) => (
  <div width>
    <br />
    <br />
    <h2>{props.plate.name}</h2>
    <div>
      <div id='detailsimage'>
        <img width="400" src={props.plate.ImageUrl}
          height="400" />
      </div>
    </div>
    <div id='details'>Ingredients : {props.plate.ingredients}
    </div>
    <br />
    <br />
    <div id='details'>HowTo :{props.plate.howTo}
    </div>
  </div>
)

export default ListItemDetails;