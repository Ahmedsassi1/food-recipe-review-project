import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Axios from 'axios';
import AddPlate from './components/add.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Menu: [],
      addPlate:{},
      editSheet:[],
    }
  }

  componentDidMount() {
    Axios.get("/all").then((done) => { this.setState({ Menu: done.data }); console.log(done.data) }).catch((err) => console.log(err))
  }

  addPlate(){
    Axios.post("/add")
  }


  render() {
    return (<div>
      <ul className='nav'>
        <li className='navB'><button>Menu</button></li>
        <li className='navB'><button>Add</button></li>
        <li className='navB'><button>Edit</button></li>
        <li className='navB'><button>Info</button></li>
      </ul>

      <h1 className='Menu' >The Menu</h1>
      <List Plates={this.state.Menu} />
      <AddPlate Plates={this.state.Menu} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));