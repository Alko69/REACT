import React, {Component} from 'react';
import './App.css';
import MyCars from './Components/MyCars';

class App extends Component {

  state = {
    titre: 'Mes voitures',
    color: 'green'
  }

  render() {
    return (
      <div className="App">
        <MyCars color={this.state.color} title={this.state.titre}/>
      </div>
    );
  }
}
export default App;