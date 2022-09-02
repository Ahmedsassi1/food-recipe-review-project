import React from 'react';

class AddPlate extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                name: '',
                ImageUrl: '',
                ingredients: '',
                howTo: ''
            }

    }

    handlechange(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    render = () => (
        <div><h1>
            <input className='addInput' name="name" placeholder="Name ..." onChange={() => { this.handlechange(event); console.log(this.state) }}></input>
            <input className='addInput' name="ImageUrl" placeholder="ImageUrl" onChange={() => this.handlechange(event)}></input>
            <input className='addInput' name="ingredients" placeholder="ingredients" onChange={() => this.handlechange(event)}></input>
            <input className='addInput' name="howTo" placeholder="How To" onChange={() => this.handlechange(event)}></input>
        </h1>
            <div className='addButtonholder'>
                <button className='addButton' onClick={() => { this.props.addPlateDB(this.state); console.log(this.props) }}>confirm </button>
            </div>
        </div>
    );
}
export default AddPlate;