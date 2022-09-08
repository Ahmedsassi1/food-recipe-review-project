import React from 'react';
import List from './components/List.jsx';
import Axios from 'axios';
import AddPlate from './components/add.jsx';
import Admin from './components/Admin.jsx';
import ListItemDetails from './components/OneItemDetails.jsx';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      view: 'List',
      Menu: [],
      onePlate: {},
      details: {}
    }
    this.addPlateDB = this.addPlateDB.bind(this);
    this.changeView = this.changeView.bind(this);
    this.EditPlate = this.EditPlate.bind(this);
    this.DeletePlate = this.DeletePlate.bind(this);
    this.getElementDetails = this.getElementDetails.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  getElementDetails(plate) {
    this.setState({ details: plate })
  }

  componentDidMount() {
    Axios.get("/all").then((done) => this.setState({ Menu: done.data })).catch((err) => console.log(err))
  }

  getOne() {
    Axios.get("/one", element).then((done) => this.setState({ Menu: done.data })).catch((err) => console.log(err))
  }

  addPlateDB(element) {
    Axios.post("/addOne", element).then((result) => { console.log('done') }).catch((err) => console.log(err))
  }

  EditPlate(element) {
    Axios.put("/updateOne", element).then((result) => { console.log('done') }).catch((err) => console.log(err))
  }

  DeletePlate(element) {
    Axios.delete("/deleteOne", element).then((result) => { console.log(result) }).catch((err) => console.log(err))
  }





  renderView() {
    const { view } = this.state;
    if (view === "List") {
      { this.componentDidMount() }
      return <List Plates={this.state.Menu}
        changeView={this.changeView}
        getElementDetails={this.getElementDetails} />
    } else if
      (view === 'AddPlate') {
      return <AddPlate addPlateDB={this.addPlateDB} />;
    }
    else if (view === 'Admin') {
      return <Admin EditP={this.EditPlate}
        Plates={this.state.Menu}
        DeletePlate={this.DeletePlate}
      />
    }
    else if (view === 'oneDetails') {
      console.log(this.state.details)
      return <ListItemDetails plate={this.state.details} />
    }
  }

  render() {
    return (<div>
      <ul className='nav'>
        <li className='navB'><button onClick={() => this.changeView('List')}>Menu</button></li>
        <li className='navB'><button onClick={() => { this.changeView('AddPlate'); console.log(this.state.view) }}>Add</button></li>
        <li className='navB'><button onClick={() => this.changeView('Admin')}>Admin</button></li>
      </ul>

      <div>
        {this.renderView()}</div>

    </div>)
  }
}


export default App ;