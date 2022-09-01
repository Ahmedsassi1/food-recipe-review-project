import React from 'react';

class AddPlate extends React.Component {
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
        <div><h1>
            <input name="name" placeholder="Name ..." onChange={()=>{this.handlechange(event);console.log(this.state)}}></input>
            <input name="ImageUrl" placeholder="ImageUrl" onChange={()=>this.handlechange(event)}></input>
            <input name="ingredients" placeholder="ingredients" onChange={()=>this.handlechange(event)}></input>
            <input name="howTo" placeholder="How To" onChange={()=>this.handlechange(event)}></input>
        </h1>
            <button onClick={()=>{this.props.addPlateDB(this.state);console.log(this.props)}}>confirm </button>
        </div>
    );
}
export default AddPlate;