import React, {Component} from 'react';
import './App.css';
import MyCars from './Components/MyCars';

class App extends Component {

  state = {
    titre: 'Mes voitures',
    color: 'green'
  }

  changeText = () => {
    this.setState(
      {
        titre: 'Nouveau titre'
      }
    )
  }
  
  params = (titre) => {
    this.setState({
      titre: titre
    }
    )
  }

  changeViaInput = (e) => {
    e=e.target.value ;
    this.setState({
      titre: e
    })
  }

  render() {
    return (
      <div className="App">
        <MyCars color={this.state.color} title={this.state.titre}/>
        <button onClick={this.changeText}>Appuyez</button>
        <button onClick={() => {this.params('test')}}>2</button>
        <input type={'text'} onChange={this.changeViaInput} ></input>
      </div>
    );
  }
}
export default App;