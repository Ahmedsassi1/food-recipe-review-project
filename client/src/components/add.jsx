import React, { useState } from 'react';

function AddPlate(props) {
    const [name, setName] = useState('');
    const [ImageUrl, setUrl] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [howTo, setHowTo] = useState('');
    let newrecipe = { name: name, ImageUrl: ImageUrl, ingredients: ingredients, howTo: howTo }

    return (
        <div>
            <h1>
                <input className='addInput' placeholder="Name ..." onChange={(e) => {setName(e.target.value)}}></input>
                <input className='addInput' placeholder="ImageUrl..." onChange={(e) => {setUrl(e.target.value)}}></input>
                <input className='addInput' placeholder="ingredients..." onChange={(e) => {setIngredients(e.target.value)}}></input>
                <input className='addInput' placeholder="How To..." onChange={(e) => {setHowTo(e.target.value)}}></input>
            </h1>
            <div className='addButtonholder'>
                <button className='addButton' onClick={() => { props.addPlateDB(newrecipe); alert("added") }}>confirm </button>
            </div>
        </div>
    );
}
export default AddPlate;