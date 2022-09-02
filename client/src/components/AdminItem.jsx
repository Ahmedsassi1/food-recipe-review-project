import React from 'react';

class Adminlist extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                name: '',
                ImageUrl: '',
                ingredients: '',
                howTo: '',
                update: [],
            }


    }

    handlechange(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    updateHandler() {
        var preparation = [];
        preparation.push({ name: this.props.plate.name });
        if (this.state.name === '' || this.state.ingredients === '' || this.state.howTo === '') {
            alert('fill the blanks')
        }
        else {
            preparation.push(this.state)
        }
        this.setState({ update: preparation })

    }

    Delete(){
        let plate ={
            name:this.props.plate.name
        }
        console.log(plate)
        this.props.DeletePlate(plate)
    }


    render = () => (
        <div >
            <h2>{this.props.plate.name}</h2>
            <div>
                <img src={this.props.plate.ImageUrl} width="100"
                    height="100" />
                <div>ingredients :{this.props.plate.ingredients}</div>
                <div>howTo :{this.props.plate.howTo}</div>

<div>
                <div> Name     </div>
                <input className='putAdmin' name="name" onChange={() => { this.handlechange(event) }}></input>
                <div> ImageUrl </div>
                <input className='putAdmin' type='url' name="ImageUrl" onChange={() => { this.handlechange(event) }}></input>
                <div> ingredients</div>
                <input className='putAdmin' name="ingredients" onChange={() => { this.handlechange(event) }}></input>
                <div> howTo    </div>
                <input className='putAdmin' name="howTo" onChange={() => { this.handlechange(event); console.log(this.state) }} ></input>
                </div>
                <div className='addButtonholder'>
                <button className='addButton' onClick={() => {this.updateHandler();this.props.EditP(this.state.update);this.props.changeView('Admin');alert("modified") }}>
                    Edit</button>

                <button className='addButton' onClick={()=> { this.Delete();this.props.changeView('Admin');alert("deleted")}}>
                    Delete</button></div>
            </div>
        </div>
    );
}
export default Adminlist;