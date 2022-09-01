import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Axios from 'axios';
import AddPlate from './components/add.jsx';
import Admin from './components/Admin.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view:'List',
      Menu: [],
    }
    this.addPlateDB = this.addPlateDB.bind(this);
    this.changeView =this.changeView.bind(this);
    this.EditPlate=this.EditPlate.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }
  componentDidMount() {
    Axios.get("/all").then((done) => this.setState({ Menu: done.data })).catch((err) => console.log(err))
  }

  addPlateDB(element){
    Axios.post("/addOne",element).then((result)=>{console.log('done')}).catch((err)=>console.log(err))
  }

  EditPlate(element){
    Axios.post("/http://localhost:3000/updateOne",element).then((result)=>{console.log('done')}).catch((err)=>console.log(err))
  }





  renderView() {
    const { view } = this.state;
    if (view === "List") { 
      return <List Plates={this.state.Menu}/>
    } else if
      (view === 'AddPlate') {
      return <AddPlate addPlateDB={this.addPlateDB} />;
    }
    else if (view === 'Admin') {
      return <Admin  EditP={this.EditPlate} Plates={this.state.Menu}
                     />
    }
  }

  render() {
    return (<div>
      <ul className='nav'>
        <li className='navB'><button onClick={()=>this.changeView('List')}>Menu</button></li>
        <li className='navB'><button onClick={()=>{this.changeView('AddPlate');console.log(this.state.view)}}>Add</button></li>
        <li className='navB'><button onClick={()=>this.changeView('Admin')}>Admin</button></li>
        <li className='navB'><button>Info</button></li>
      </ul>

      <div>
      {this.renderView()}</div>
      
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));