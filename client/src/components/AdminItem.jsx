import React from 'react';

class Adminlist extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                name:'',
                ImageUrl: '',
                ingredients: '',
                howTo: ''
            }

    }

    handlechange(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
           [name] : value
        });
    }

    render = (props) => (
        <div >
        <h2>{this.props.plate.name}</h2>
        <div>
          <img src={this.props.plate.ImageUrl} width="100"
            height="100" />
        </div>
        <div> <input></input></div>
        <div> <input></input></div>
        <div> <input></input></div>
        <div> <input></input></div>
        <div>
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>
        </div>
      </div>
    );
}
export default Adminlist ;