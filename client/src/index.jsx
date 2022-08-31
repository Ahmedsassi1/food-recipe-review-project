import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Menu: []
    }
  }

//   componentDidMount() {
// Axios.get('/Menu')
//   }

  render() {
    return (<div>
      <ul className="nav">
        <li className="nav-item">
          <button className="nav-link" >The Menu     /</button>
        </li>
        <li className="nav-item">
          <button  className="nav-link" >Add It       /</button >
        </li>
        <li className="nav-item">
          <button  className="nav-link" >Pump it      /</button >
        </li>
      </ul>
      <h1>Item List</h1>
      <List items={this.state.Menu} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));