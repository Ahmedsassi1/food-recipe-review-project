import React from 'react';

class AddPlate extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                name:'',
                imageUrl: '',
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
            <input name="imageUrl" placeholder="ImageUrl" onChange={()=>this.handlechange(event)}></input>
            <input name="ingredients" placeholder="ingredients" onChange={()=>this.handlechange(event)}></input>
            <input name="howTo" placeholder="How To" onChange={()=>this.handlechange(event)}></input>
        </h1>
            <button >confirm </button>
        </div>
    );
}
export default AddPlate;