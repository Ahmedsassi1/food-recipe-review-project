import React, { useState } from 'react';

function Adminlist(props) {
    const [name, setName] = useState('');
    const [ImageUrl, setUrl] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [howTo, setHowTo] = useState('');
    let updaterecipe = { name: name, ImageUrl: ImageUrl, ingredients: ingredients, howTo: howTo }

    const updateHandler = () => {
        var preparation = [];
        preparation.push({ name: props.plate.name });
        if (name === '' || ingredients === '' || howTo === '') {
            alert('fill the blanks')
        } else {
            preparation.push(updaterecipe)
        } return preparation
    }

    return (
        <div >
            <br/>
            <br/>
            <h2>{props.plate.name}</h2>
            <div>
                <img src={props.plate.ImageUrl} width="100"
                    height="100" />
                <div>ingredients :{props.plate.ingredients}</div>
                <div>howTo :{props.plate.howTo}</div>
                <div>
                    <div> Name     </div>
                    <input className='putAdmin' name="name" onChange={(e) => { setName(e.target.value) }}></input>
                    <div> ImageUrl </div>
                    <input className='putAdmin' type='url' name="ImageUrl" onChange={(e) => { setUrl(e.target.value) }}></input>
                    <div> ingredients</div>
                    <input className='putAdmin' name="ingredients" onChange={(e) => { setIngredients(e.target.value) }}></input>
                    <div> howTo    </div>
                    <input className='putAdmin' name="howTo" onChange={(e) => { setHowTo(e.target.value) }} ></input>
                </div>
                <div className='addButtonholder'>
                    <button className='addButton'
                        onClick={() => { () => props.EditP(updateHandler()); props.changeView('Admin'); alert("modified") }}>
                        Edit
                    </button>
                    <button className='addButton' onClick={() => {  props.DeletePlate({name:props.plate.name}); props.changeView('Admin'); alert("deleted") }}>
                        Delete</button></div>
            </div>
        </div>
    );
}
export default Adminlist;