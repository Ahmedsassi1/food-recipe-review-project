import React, { useState } from 'react';
import List from './components/List.jsx';
import Axios from 'axios';
import AddPlate from './components/add.jsx';
import Admin from './components/Admin.jsx';
import ListItemDetails from './components/OneItemDetails.jsx';
import SingIn from './components/signin.jsx';
import SignUP from './components/SignUp.jsx';


function App(props) {
  const [view, setView] = useState('List');
  const [Menu, setMenu] = useState([]);
  const [onePlate, setOnePlate] = useState({})
  const [details, setDetails] = useState({});


  const changeView = (option) => {
    setView(
      option
    );
  }

  const getElementDetails = (plate) => {
    setDetails(
      plate
    )
  }

  const componentDidMount = () => {
    Axios.get("/all").then((done) => setMenu(done.data)).catch((err) => console.log(err))
  }

  const getOne = () => {
    Axios.get("/one", element).then((done) => setMenu(done.data)).catch((err) => console.log(err))
  }

  const addPlateDB = (element) => {
    Axios.post("/addOne", element).then((result) => { console.log('done') }).catch((err) => console.log(err))
  }

  const EditPlate = (element) => {
    Axios.put("/updateOne", element).then((result) => { console.log('done') }).catch((err) => console.log(err))
  }

  const DeletePlate = (element) => {
    console.log(element)
    Axios.delete("/deleteOne",{data:element} ).then((result) => { console.log(result) }).catch((err) => console.log(err))
  }


  const renderView = () => {
    if (view === "List") {
      { componentDidMount() }
      return <List Plates={Menu}
        changeView={changeView}
        getElementDetails={getElementDetails} />
    } else if
      (view === 'AddPlate') {
        { componentDidMount() }
      return <AddPlate addPlateDB={addPlateDB} />;
    }
    else if (view === 'Admin') {
      { componentDidMount() }
      return <Admin EditP={EditPlate}
        Plates={Menu}
        DeletePlate={DeletePlate}
        changeView={changeView}
      />
    }
    else if (view === 'oneDetails') {
      { componentDidMount() }
      console.log(details)
      return <ListItemDetails plate={details} />
    }
    else if
    (view === 'signIn') {
      { componentDidMount() }
    return <SingIn  changeView={changeView}/>;
  }
  else if
  (view === 'signUP') {
    { componentDidMount() }
  return <SignUP  changeView={changeView} />;
}
  }

  return (<div>
    <ul className='nav'>
      <li className='navB'><button onClick={() => changeView('List')}>Menu</button></li>
      <li className='navB'><button onClick={() => changeView('AddPlate')}>Add</button></li>
      <li className='navB'><button  id='AdminButton' onClick={() => changeView('Admin')}>Admin</button></li>
      <li className='navSignli' ><button className='navSign' onClick={() => changeView('signIn')}>Enter</button></li>
      <li className='navSignli'><button className='navSign'onClick={() => changeView('signUP')}>SignUp</button></li>
    </ul>

    <div>
      {renderView()}</div>

  </div>)
}


export default App;