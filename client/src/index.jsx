import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Axios from 'axios';
import AddPlate from './components/add.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Menu: [],
      editSheet:[],
    }
  }

  componentDidMount() {
    Axios.get("/all").then((done) => this.setState({ Menu: done.data })).catch((err) => console.log(err))
  }

  makePlate(a,b,c,d){
    this.setState({name:a,
      ImageUrl:b,
      ingredients:c,
      howTo:d,
    })
  }
  addPlateDB(){
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
      <AddPlate makePlate={this.makePlate} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));